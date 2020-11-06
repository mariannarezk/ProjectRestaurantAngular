import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  managerdiv;
  modal;
  general;
  scrty;
  reponse;
  editemail;editname;inputeditname; inputeditemail;
  editpass=true;inputeditpass=false;
  enablepassword;
  securityandlogin;
  active1=true;active2=false;active3=false;active4=false;active5=false;
  public email:string;
  public password:any;
  public fullname:any;
  public phonenumber:any;
  public manageremail:any;
  currentpassword:any;
  formname = this.fb.group({
    fullName: new FormControl('', Validators.required),
  });
  formemail = this.fb.group({
    email: new FormControl('', Validators.required),
  });
  form = this.fb.group({
    
    currentpassword: new FormControl('', Validators.required),
    Passwords: this.fb.group({
      newpassword: new FormControl('', Validators.required),
    confirmnewpassword: new FormControl('', Validators.required),
  },{validator : this.comparePasswords})
});
  constructor(private router: Router, private http: HttpClient,private toastr: ToastrService, private fb:FormBuilder) { 
    this.general=true;
    this.scrty=false;
    this.enablepassword=true;
    this.modal=false;
    this.inputeditname=false;
    this.inputeditemail=false;
    this.securityandlogin=false;

    this.getprofileinfos();
    if(localStorage.getItem('role')=="Manager")
    {
      
      this.managerdiv=true;
    }else if(localStorage.getItem('role')=="Super Admin"){

    }else{
      this.managerdiv=false;
    }
    this.editemail=true;
    this.editname=true;
  }
  comparePasswords(fb:FormGroup){
    let confirm=fb.get('confirmnewpassword');
    if(confirm.errors == null || 'passwordMismatch' in confirm.errors){
      if(fb.get('newpassword').value != confirm.value){
        confirm.setErrors({passwordMismatch:true });
      }else{
        confirm.setErrors(null);
      }
    }
  }
  openeditname(){
    this.editname=false;
    this.inputeditname=true;

  }
  canceleditname(){
    this.editname=true;
    this.inputeditname=false;

  }

  openeditpass(){
    this.editpass=false;
    this.inputeditpass=true;

  }
  canceleditpass(){
    this.editpass=true;
    this.inputeditpass=false;

  }


  openeditemail(){
    this.editemail=false;
    this.inputeditemail=true;

  }
  canceleditemail(){
    this.editemail=true;
    this.inputeditemail=false;

  }
  security(){
    this.general=false;
    this.scrty=true;
    this.modal=false;
    this.securityandlogin=false;

  }
  generalfct(){
    this.general=true;
    this.scrty=false;
    this.modal=false;
    this.securityandlogin=false;


  }
  secandlog(){
    this.general=false;
    this.scrty=false;
    this.modal=false;
    this.securityandlogin=true;
    this.editpass=true;
    this.inputeditpass=false;
  }
  ngOnInit(): void {
  }
  getprofileinfos(){
    var managerid=localStorage.getItem('id');
    //console.log(managerid);
     this.http.get('https://localhost:44369/api/UserProfile/getprofileinfos?managerid='+managerid).subscribe(result => {
         this.reponse=result;
        // console.log(this.reponse.email);
         this.email=this.reponse.email;
         this.password=this.reponse.password;
         this.fullname=this.reponse.fullName;
         this.phonenumber=this.reponse.phonenumber;
    //     console.log(this.reponse.restaurantId);
    //     console.log(this.reponse.password);
      //   console.log(this.reponse.phoneNumber);
       });
  }
  addmanager(){
    console.log("hi");
    console.log(this.manageremail);
    this.http.post<any>('https://localhost:44369/api/Manager/accept', {
      RestaurantId: parseInt(localStorage.getItem("restid")),
      Email:this.manageremail, 
      // FullName: this.fullname, 
     
  }).subscribe(data => { 
    console.log(data);
    this.toastr.success('Manager added', 'Success',
  {timeOut: 2000});;
  });
  }
openaddmanager(){
this.modal=true;
this.general=false;
    this.scrty=false;
    
}
saveeditemail(){
  this.http.post<any>('https://localhost:44369/api/UserProfile/editemail', {
        Id:localStorage.getItem('id'),
        Email:this.email, 
        //FullName: this.fullname, 
//PhoneNumber: this.phonenumber, 
        //PasswordHash: this.password
    }).subscribe(data => { 
      console.log(data);
    if(data == "no"){
      this.toastr.error('failed to update e-mail', 'fail',
      {timeOut: 2000});;
    }else {
      this.toastr.success('Email updated', 'Success',
    {timeOut: 2000});;
    this.canceleditemail();
    }
    
    
    });
}

saveeditname(){
  
  this.http.post<any>('https://localhost:44369/api/UserProfile/editfullname', {
        Id:localStorage.getItem('id'),
        //Email:this.email, 
        FullName: this.fullname, 
//PhoneNumber: this.phonenumber, 
        //PasswordHash: this.password
    }).subscribe(data => { 
      console.log(data);
    
      this.toastr.success('Name updated', 'Success',
    {timeOut: 2000});;
    this.canceleditname();
    
    
    });
}

saveeditpass(){
  this.http.post<any>('https://localhost:44369/api/UserProfile/editpassword', {
        Id:localStorage.getItem('id'),
        CurrentPassword: this.currentpassword, 
        PasswordHash: this.password
    }).subscribe(data => { console.log(data);
    
      this.toastr.success('Password updated', 'Success',
      {timeOut: 2000});;
    
    });
}
public closeCreate() {
  this.modal=false;

}
payments(){

}
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  public email:string;
  public password:any;
  public fullname:any;
  public phonenumber:any;
  public manageremail:any;
  reponse;
  editemail;editname;inputeditname; inputeditemail;general=false;
  currentpassword:any;
  formname = this.fb.group({
    fullName: new FormControl('', Validators.required),
  });
  formemail = this.fb.group({
    email: new FormControl('', Validators.required),
  });
  constructor(private http: HttpClient,private toastr: ToastrService,private fb:FormBuilder) { 
    this.general=true;
    this.inputeditname=false;
    this.inputeditemail=false;
    this.editemail=true;
    this.editname=true;
    this.getprofileinfos();
  }

  ngOnInit(): void {
  }
  getprofileinfos(){
    var managerid=localStorage.getItem('id');
    //console.log(managerid);
     this.http.get('https://localhost:44309/api/UserProfile/getprofileinfos?managerid='+managerid).subscribe(result => {
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
  saveeditemail(){
    this.http.post<any>('https://localhost:44309/api/UserProfile/editemail', {
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
 
  openeditemail(){
    this.editemail=false;
    this.inputeditemail=true;

  }
  canceleditemail(){
    this.editemail=true;
    this.inputeditemail=false;

  }
  openeditname(){
    console.log("edit name");
    this.editname=false;
    this.inputeditname=true;

  }
  canceleditname(){
    this.editname=true;
    this.inputeditname=false;

  }
  saveeditname(){
    
    this.http.post<any>('https://localhost:44309/api/UserProfile/editfullname', {
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
}

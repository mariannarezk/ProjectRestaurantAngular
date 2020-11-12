import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  editpass=true;
  inputeditpass=false;
  reponse;
  public email:string;
  public password:any;
  public currentpassword:any;
  public fullname:any;
  public phonenumber:any;
  public manageremail:any;
  constructor(private fb:FormBuilder,private http: HttpClient,private toastr: ToastrService) {
    this.getprofileinfos();
   }
   form = this.fb.group({
    
    currentpassword: new FormControl('', Validators.required),
    Passwords: this.fb.group({
      newpassword: new FormControl('', Validators.required),
    confirmnewpassword: new FormControl('', Validators.required),
  },{validator : this.comparePasswords})
});
  
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
  saveeditpass(){
    this.http.post<any>('https://localhost:44309/api/UserProfile/editpassword', {
          Id:localStorage.getItem('id'),
          CurrentPassword: this.currentpassword, 
          PasswordHash: this.password
      }).subscribe(data => { console.log(data);
      if(data == null){
        this.toastr.success('Wrong current password', 'Error',
        {timeOut: 2000});;
      }
      else{
        this.toastr.success('Password updated', 'Success',
        {timeOut: 2000});;
      }
      });
  }
  openeditpass(){
    this.editpass=false;
    this.inputeditpass=true;

  }
  canceleditpass(){
    this.editpass=true;
    this.inputeditpass=false;

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

}

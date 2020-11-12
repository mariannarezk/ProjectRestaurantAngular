import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurantprofile',
  templateUrl: './restaurantprofile.component.html',
  styleUrls: ['./restaurantprofile.component.css']
})
export class RestaurantprofileComponent implements OnInit {

  public email:string;
  public password:any;
  public fullname:any;
  public phonenumber:any;
  public manageremail:any;
  restaurantName;restaurantLogo;restPhoneNumber;restaurantActive;restaurantId;
  reponse;
  editphone;editname;inputeditname; inputeditphone; general=false;
  currentpassword:any;
  formname = this.fb.group({
    fullName: new FormControl('', Validators.required),
  });
  formphone = this.fb.group({
    restPhoneNumber: new FormControl('', Validators.required),
  });
  constructor(private http: HttpClient,private toastr: ToastrService,private fb:FormBuilder) { 
    this.general=true;
    this.inputeditname=false;
    this.inputeditphone=false;
    this.editphone=true;
    this.editname=true;
    this.getrestaurantinfos();
  }

  ngOnInit(): void {
  }
  getrestaurantinfos(){
    var managerid=localStorage.getItem('id');
     this.http.get('https://localhost:44309/api/Restaurant/GetRestInfos?managerid='+managerid).subscribe(result => {
         this.reponse=result;
         this.restaurantId=this.reponse.restaurantId;
         this.restaurantName=this.reponse.restaurantName;
         this.restaurantLogo=this.reponse.restaurantLogo;
         this.restPhoneNumber=this.reponse.restPhoneNumber;
         this.restaurantActive=this.reponse.restaurantActive;
       });
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44309/${serverPath}`;
  }
  saveeditphone(){
    this.http.post<any>('https://localhost:44309/api/Restaurant/UpdatePhone', {
      restaurantId:this.restaurantId,
      restPhoneNumber:this.restPhoneNumber,
      }).subscribe(data => { 
        console.log(data);
      if(data == "no"){
        this.toastr.error('failed to update phone number', 'fail',
        {timeOut: 2000});;
      }else {
        this.toastr.success('Phone number updated', 'Success',
      {timeOut: 2000});;
      this.canceleditphone();
      }
      
      
      });
  }
 
  openeditphone(){
    this.editphone=false;
    this.inputeditphone=true;

  }
  canceleditphone(){
    this.editphone=true;
    this.inputeditphone=false;

  }
  openeditrestname(){
    console.log("edit name");
    this.editname=false;
    this.inputeditname=true;

  }
  canceleditrestname(){
    this.editname=true;
    this.inputeditname=false;

  }
  saveeditrestname(){
    
    this.http.post<any>('https://localhost:44309/api/Restaurant/UpdateName', {
      restaurantId:this.restaurantId,
      restaurantName: this.restaurantName,
      }).subscribe(data => { 
        console.log(data);
        this.toastr.success('Name updated', 'Success',
      {timeOut: 2000});;
      this.canceleditrestname();
      
      
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {
  public manageremail:any;
  formmanager = this.fb.group({
    email: new FormControl('', Validators.required),
  });
  constructor(private http: HttpClient,private toastr: ToastrService, private fb:FormBuilder) { }
  addmanager(){
    console.log("hi");
    console.log(this.manageremail);
    this.http.post<any>('https://localhost:44309/api/Manager/accept', {
      RestaurantId: parseInt(localStorage.getItem("restid")),
      Email:this.manageremail, 
      // FullName: this.fullname, 
     
  }).subscribe(data => { 
    console.log(data);
    this.toastr.success('Manager added', 'Success',
  {timeOut: 2000});;
  });
  }
  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
@Component({
  selector: 'app-restoinfos',
  templateUrl: './restoinfos.component.html',
  styleUrls: ['./restoinfos.component.css']
})
export class RestoinfosComponent implements OnInit {
public managerid:string;
public restaurantname;
public restphonenumber;
public response: {dbPath: ''};

  constructor(private router: Router,private toastr: ToastrService,private http: HttpClient, private dataService: DataService, private _Activatedroute: ActivatedRoute) { 
    this.managerid = this._Activatedroute.snapshot.paramMap.get("managerid");
    this.print();
  }
print(){
  console.log(this.managerid);
}
  ngOnInit(): void {
  }
  public uploadFinished = (event) => {
    this.response = event;
  }
  createrest() {
    //console.log(this.restname);
    //this.currentRest.RestaurantName = this.restname;
    //this.restaurantService.saveRest(this.restname);
    this.http.post<any>('https://localhost:44309/api/Restaurant/Create', {
        RestaurantName:this.restaurantname, 
        RestPhoneNumber: this.restphonenumber, 
        userid:this.managerid,
        RestaurantLogo:this.response.dbPath,
    }).subscribe(
      (res: any) => {
        this.router.navigateByUrl('/login');
        this.toastr.success('Please wait for the manager to accept your request. An e-mail will be sent to you', 'Success',
        {timeOut: 5000});;
      }
    );
  };
}

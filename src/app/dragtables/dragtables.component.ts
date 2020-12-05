import { CdkDrag, CdkDragDrop, CdkDragEnd, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty } from 'rxjs';
import { DragtablesService } from '../dragtables.service';
import { ZoneService } from '../zone.service';

@Component({
  selector: 'app-dragtables',
  templateUrl: './dragtables.component.html',
  styleUrls: ['./dragtables.component.css']
})
export class DragtablesComponent implements OnInit {
  sidebar=false;
  editchairs=false;
  branchid;
  opt=false;
  cote1;cote2;cote3;cote4;
  zoneid;
  image:String;
  hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

  width:any;
  height:any;
  widthtable;
  heighttable;
  public array;
  public array2;
  offset:{x: any, y: any};
  public items;
  public add;
  public remove;
  public zones;
  yeszone;
  color;
  edit;
  openzone;
  description;
  tableSeatsNumber;
  tablenumber;
  dropdownvalue=true;
  tablecolor;
  public defaultColors: string[] = [
    '#ffffff',
    '#000105',
    '#3e6158',
    '#3f7a89',
    '#96c582',
    '#b7d5c4',
    '#bcd6e7',
    '#7c90c1',
    '#9d8594',
    '#dad0d8',
    '#4b4fce',
    '#4e0a77',
    '#a367b5',
    '#ee3e6d',
    '#d63d62',
    '#c6a670',
    '#f46600',
    '#cf0500',
    '#efabbd',
    '#8e0622',
    '#f0b89a',
    '#f0ca68',
    '#62382f',
    '#c97545',
    '#c1800b'
  ];
  chairsadd; chairsupdate;
  constructor(private _Activatedroute: ActivatedRoute,private zoneservice:ZoneService,private toastr: ToastrService,private dragtablesservice:DragtablesService,private http: HttpClient) {
    this.array=this.items;
    this.edit=false;
    this.image="StaticFiles/Images/table1.jpg";
    this.getZones();
    this.items = Array<object>();
    this.chairsadd=Array<object>();
    this.chairsupdate=Array<object>();
    this.add = Array<object>();
    this.remove = Array<object>();
    this.tablecolor="#fff";
    this.openzone=false;
    this.branchid = parseInt(this._Activatedroute.snapshot.paramMap.get("branchid"));
    if(this._Activatedroute.snapshot.paramMap.get('zoneid') == null){
      this.yeszone=false;
      this.opt=false;
    }else{
     this.zoneid=parseInt(this._Activatedroute.snapshot.paramMap.get('zoneid'));
      this.getTables(this._Activatedroute.snapshot.paramMap.get('zoneid'));
      this.yeszone=true;
      this.opt=true;
    }
   }



   
   public createImgPath = (serverPath: string) => {
    return `https://localhost:44309/${serverPath}`;
  }



   public setColor(color: string) {
    this.tablecolor = color;
    for (let item of this.add) {
      if(item.number == this.tablenumber){
        item.color=color;
      }
    }
    for (let item of this.items) {
      if(item.number == this.tablenumber){
        item.color=color;
      }
    }
   }
   closeCreate() {
    this.edit = false;
    this.description='';
    
  }
  openaddzone(){
    this.openzone=true;
  }
   openedit(number){
    this.edit=true;
    this.tablenumber=number;
    var element= document.getElementById(""+this.tablenumber);
    this.widthtable= element.offsetWidth;
    this.heighttable= element.offsetHeight;
    this.color=element.style.background;
    for (let item of this.add) {
      if(item.number == this.tablenumber){
        this.description=item.description;
        this.tableSeatsNumber=item.tableSeatsNumber;
      }
    }
    for (let item of this.items) {
      if(item.number == this.tablenumber){
        this.description=item.description;
        this.tableSeatsNumber=item.tableSeatsNumber;
      }
    }
   }
   removeItem(){
    for (let item of this.add) {
      if(item.number == this.tablenumber){
        this.add = this.add.filter(i => i.number !== this.tablenumber);
      }
    }
    for (let item of this.items) {
      if(item.number == this.tablenumber){
          this.remove.push({ 
            tableId: item.tableId,
            active:0
          });
          this.items = this.items.filter(i => i.number !== this.tablenumber);
      }
    }
    this.deletechairs(this.tablenumber);
    this.closeCreate();
  }
   adddescription(){
    for (let item of this.add) {
      if(item.number == this.tablenumber){
        item.description=this.description;
        item.width=this.widthtable;
        item.height=this.heighttable;
        item.tableSeatsNumber=this.tableSeatsNumber;
        this.deletechairs(this.tablenumber);
        if(item.cote1==null && item.cote2==null &&item.cote3==null &&item.cote4==null){
          this.generatechairs(item,item.number);
        }else{
          this.generatespecificchairs(item, item.cote1, item.cote2, item.cote3, item.cote4, item.number);
        }
        
      }
    }
    for (let item of this.items) {
      if(item.number == this.tablenumber){
        item.description=this.description;
        item.width=this.widthtable;
        item.height=this.heighttable;     
        item.tableSeatsNumber=this.tableSeatsNumber;  
        this.deletechairs(this.tablenumber);
        if(item.cote1==null && item.cote2==null &&item.cote3==null &&item.cote4==null){
          this.generatechairs(item,item.number);
        }else{
          this.generatespecificchairs(item, item.cote1, item.cote2, item.cote3, item.cote4, item.number);
        }
      }
    }
    this.closeCreate();
   }
   myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-blue";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-blue", "");
    }
  }
  // changeStyle($event){
  //   this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
  // }
  showzones(){
    var x = document.getElementById("z");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-blue";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-blue", "");
    }
  }
 
  close(){
    this.sidebar=false;
  }
  open(){
    this.sidebar=true;
  }
  getZones(){
    this.zoneservice.getZone().subscribe(result=>{
      this.zones=result
    });
  }
  getTables(zoneid) {
    this.dragtablesservice.getTables(zoneid).subscribe(result => {
      this.array2 = result;
      for (let array of this.array2) {
        var nb=this.items.length + 1;
        this.items.push({ 
          tableId: array.tableId,
          number:this.items.length + 1,
          dragPosition : {x: array.x, y: array.y},
          x:array.x,
          y:array.y,
          height:array.height,
          width:array.width,
          borderRadius:array.borderRadius,
          description:array.description,
          color:array.color,
          tableSeatsNumber:array.tableSeatsNumber,
          cote1:array.cote1,
          cote2:array.cote2,
          cote3:array.cote3,
          cote4:array.cote4
        });
        if(array.cote1==null && array.cote2==null &&array.cote3==null &&array.cote4==null){

          this.generatechairs(array,nb);
        }else{
          this.cote1=array.cote1;
          this.cote2=array.cote2;
          this.cote3=array.cote3;
          this.cote4=array.cote4;
          this.generatespecificchairs(array, array.cote1, array.cote2, array.cote3, array.cote4, nb);
        }
        
        console.log(nb);
      }
    }), error => console.error(error);
  }
  addchairtoarray(cx,cy,h,w,c,r,tid){
    this.chairsadd.push({
      number: tid,
      x:cx,
      y:cy,
      height:h,
      width:w,
      borderRadius:r,
      color:c,
      dragPosition : {x: cx, y: cy},
    })
  }
  deletechairs(number){
    for (let item of this.chairsadd) {
      if(item.number == number){
        this.chairsadd = this.chairsadd.filter(i => i.number !== number);
      }
    }
    
  }

  generatechairs(array,nb){
    var snb=array.tableSeatsNumber;
    var cotes=0;
    var max=0;
    var min=0;
    cotes=snb%4;
      max=Math.ceil(snb/4);
      min=Math.floor(snb/4);
      let cotesarray: number[] = [];
      var i=0;
      var j=4;
      var j1=8;      

      if(cotes == 0){
        cotes=2;
      }
    //eza toul akbar men 3ared 
    if(array.height < array.width)
    {
      if((array.height <= 2/3 * array.width) && (array.height > 1/3 * array.width) )
       {
        while(j != 0)
        {
          if(cotes != 0){
            cotesarray[i]=max+1;
            i++;
            cotes--;
          }else{
            cotesarray[i]=min-1;
            i++;
          }
          j--;
        }
        this.generatespecificchairs(array,cotesarray[2],cotesarray[0],cotesarray[3],cotesarray[1],nb);
      }
      else if(array.height > 2/3 * array.width) 
      {
        while(j != 0)
        {
          if(cotes != 0){
            cotesarray[i]=max;
            i++;
            cotes--;
          }else{
            cotesarray[i]=min;
            i++;
          }
          j--;
        }
        this.generatespecificchairs(array,cotesarray[2],cotesarray[0],cotesarray[3],cotesarray[1],nb);
      }
      else if(array.height <= 1/3 * array.width) 
      {
        max=Math.ceil(snb/2);
        min=Math.floor(snb/2);
        if(snb%2 == 0){
          this.generatespecificchairs(array,0,max,0,max,nb);
        }else{
          this.generatespecificchairs(array,0,max,0,min,nb);
        }
      }
    }
    //eza 3ared akbar men toul
    else if(array.width < array.height)
    {
       if( (array.width <= 2/3 * array.height) && (array.width > 1/3 * array.height) )
       {
        while(j != 0)
        {
          if(cotes != 0){
            cotesarray[i]=max+1;
            i++;
            cotes--;
          }else{
            cotesarray[i]=min-1;
            i++;
          }
          j--;
        }
        this.generatespecificchairs(array,cotesarray[0],cotesarray[2],cotesarray[1],cotesarray[3],nb)
      }
      else if(array.width > 2/3 * array.height) 
      {
        while(j != 0)
        {
          if(cotes != 0){
            cotesarray[i]=max;
            i++;
            cotes--;
          }else{
            cotesarray[i]=min;
            i++;
          }
          j--;
        }
        this.generatespecificchairs(array,cotesarray[0],cotesarray[2],cotesarray[1],cotesarray[3],nb)
      }
      else if(array.width <= 1/3 * array.height) 
      {
        max=Math.ceil(snb/2);
        min=Math.floor(snb/2);
        if(snb%2 == 0){
          this.generatespecificchairs(array,max,0,max,0,nb);
        }else{
          this.generatespecificchairs(array,max,0,min,0,nb);
        }
      }

    }
    //eza carre
    else
    {
      while(j != 0)
      {
        if(cotes != 0){
          cotesarray[i]=max;
          i++;
          cotes--;
        }else{
          cotesarray[i]=min;
          i++;
        }
        j--;
        
      }
      this.generatespecificchairs(array,cotesarray[0],cotesarray[1],cotesarray[2],cotesarray[3],nb)
   
    }

  }

  generatespecificchairs(array,cote1,cote2,cote3,cote4,nb){
    
    var snb=array.tableSeatsNumber;
    var height=array.height;
    var width=array.width;
    var c1=cote1; var c2=cote2; var c3=cote3; var c4=cote4;
    var cx,cy;
    var ancienX=0; var ancienY=0;
    var m=0;
    var sheight=0; var swidth=0;
      var hhround=0;
      var hwround=0;
      var vhround=0;
      var vwround=0;
      var width2=width;
      var height2=height;
      var neg = 0;
      if(array.borderRadius == 50){

        hhround = hwround = width2 / cote2;
        vhround = vwround = height2 / cote1;

      }
    while(c1!=0 && snb!=0){
      sheight=height/cote1 + hhround;
      cy=(sheight/2)+ancienY + vhround;
      cx=0;
      this.addchairtoarray(cx,cy,40,40,"#fff",50,nb);
      c1--;
      snb--;
      ancienY += sheight;
      if(array.borderRadius == 50 && hhround == 0 && vhround == 0 && neg == 1){
        
        hhround += width2 / cote2;
        vhround += width2 / cote1;

      }else{
        hhround -= hhround;
        vhround -= vhround;
        if(hhround ==0 && vhround ==0) neg = 1;
      }
      
      
    }
    while(c2!=0 && snb!=0){
      swidth=width/cote2;
      cx=(swidth/2)+ancienX;
      cy=0;
      this.addchairtoarray(cx,cy,40,40,"#fff",50,nb);
      c2--;
      snb--;
      ancienX+=swidth;
    }
    if(c1==0 || c2==0 || c3==0 || c4==0){
      ancienX=ancienY=0;
    }
    while(c3!=0 && snb!=0){
      sheight=height/cote3;
      cx=array.width;
      cy=(sheight/2)+ancienY;
      this.addchairtoarray(cx,cy,40,40,"#fff",50,nb);
      c3--;
      snb--;
      ancienY+=sheight;
    }
    while(c4!=0 && snb!=0){
      swidth=width/cote4;
      cx=(swidth/2)+ancienX;
      cy=array.height;
      this.addchairtoarray(cx,cy,40,40,"#fff",50,nb);
      c4--;
      snb--;
      ancienX+=swidth;
    }
    
    if(c1==0 || c2==0 || c3==0 || c4==0){
      ancienX=ancienY=0;
    }
  
    //this.addchairtoarray(cx,cy,40,40,"#fff",50,nb);
    
  }

  dragEnd(event: CdkDragEnd,number) {
    this.offset = { ...(<any>event.source._dragRef)._passiveTransform };
   var elmnt = document.getElementById(number);

///objects mawjoudin / update
    for (let update of this.items) {
      if(update.number == number){
        update.dragPosition.x=update.x=this.offset.x;
        update.dragPosition.y=update.y=this.offset.y;
      }
    }
    //added elements 
    for (let item of this.add) {
      if(item.number == number){
        item.dragPosition.x=item.x=this.offset.x;
        item.dragPosition.y=item.y=this.offset.y;
      }
    }
    
  }
  
  ngOnInit(): void {
  }
  copyTable(){
    
    var element= document.getElementById(""+this.tablenumber);
    var width= element.offsetWidth;
    var height= element.offsetHeight;
    var bradius=element.style.borderRadius;
    var color=element.style.backgroundColor;
    console.log("color "+this.rgb2hex(color));
    var splitted = bradius.split("%"); 
console.log(parseInt(splitted[0]));
for (let item of this.add) {
  if(item.number == this.tablenumber){ 
    var nb='a'+parseInt(this.add.length + 1);
    this.add.push({ 
      number:'a'+parseInt(this.add.length + 1),
      dragPosition : {x: 0, y: 0},
      x:0,
      y:0,
      height:height,
      width:width,
      borderRadius:parseInt(splitted[0]),
      zoneId:this.zoneid,
      color:this.rgb2hex(color),
      tableSeatsNumber:this.tableSeatsNumber,
      description:this.description
    });
    if(item.cote1==null && item.cote2==null &&item.cote3==null &&item.cote4==null){
      this.generatechairs(item,nb);
    }else{
      this.generatespecificchairs(item, item.cote1, item.cote2, item.cote3, item.cote4, nb);
    }
    
  }
}
for (let item of this.items) {
  if(item.number == this.tablenumber){
    var nb='a'+parseInt(this.add.length + 1)
    this.add.push({ 
      number:'a'+parseInt(this.add.length + 1),
      dragPosition : {x: 0, y: 0},
      x:0,
      y:0,
      height:height,
      width:width,
      borderRadius:parseInt(splitted[0]),
      zoneId:this.zoneid,
      color:this.rgb2hex(color),
      tableSeatsNumber:this.tableSeatsNumber,
      description:this.description
    });
    if(item.cote1==null && item.cote2==null &&item.cote3==null &&item.cote4==null){
      this.generatechairs(item,nb);
    }else{
      this.generatespecificchairs(item, item.cote1, item.cote2, item.cote3, item.cote4, nb);
    }
    
  }
}
  }

  
  
//convert rgb to hex
rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + this.hex(rgb[1]) + this.hex(rgb[2]) + this.hex(rgb[3]);
}

hex(x) {
  return isNaN(x) ? "00" : this.hexDigits[(x - x % 16) / 16] + this.hexDigits[x % 16];
 }
  square(){
    this.add.push({ 
      number:'a'+parseInt(this.add.length + 1),
      dragPosition : {x: 0, y: 0},
      x:0,
      y:0,
      height:100,
      width:100,
      borderRadius:5,
      zoneId:this.zoneid,
      cote1:null,
      cote2:null,
      cote3:null,
      cote4:null,
      description:'',
      tableSeatsNumber:0      
    });
  }
  circle(){
    this.add.push({ 
      number:'a'+parseInt(this.add.length + 1),
      dragPosition : {x: 0, y: 0},
      x:0,
      y:0,
      height:100,
      width:100,
      borderRadius:50,
      zoneId:this.zoneid,
      cote1:null,
      cote2:null,
      cote3:null,
      cote4:null,  
      description:'',
      tableSeatsNumber:0  
    });
  }

  save(){
    console.log(this.add);
    for (let item of this.items) {
      var elmnt = document.getElementById(""+item.number);
      item.height=elmnt.offsetHeight;
      item.width=elmnt.offsetWidth;
    }
    for (let item of this.add) {
      var elmnt = document.getElementById(""+item.number);
      item.height=elmnt.offsetHeight;
      item.width=elmnt.offsetWidth;
    }

    this.dragtablesservice.saveTables(this.add);
    this.dragtablesservice.updateTables(this.items);
    this.dragtablesservice.removeTables(this.remove);
    this.toastr.success('', 'Saved!', {
      timeOut: 3000});
  }

  //toggle between hiding and showing the dropdown content */
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  openeditchairs(){
    this.editchairs=true;
    this.edit=false;
  }
  closeeditchairs(){
    this.editchairs=false;
    this.edit=true;
  }
  saveeditchairs(){
    console.log(this.cote1,this.cote2,this.cote3,this.cote4);
    for (let item of this.add) {
      if(item.number == this.tablenumber){
        item.tableSeatsNumber=this.tableSeatsNumber;
        item.cote1=this.cote1; 
        item.cote2=this.cote2; 
        item.cote3=this.cote3; 
        item.cote4=this.cote4; 
        this.deletechairs(this.tablenumber); 
        this.generatespecificchairs(item,this.cote1,this.cote2,this.cote3,this.cote4,item.number);
      }
    }
    for (let item of this.items) {
      if(item.number == this.tablenumber){
        item.tableSeatsNumber=this.tableSeatsNumber;
        item.cote1=this.cote1; 
        item.cote2=this.cote2; 
        item.cote3=this.cote3; 
        item.cote4=this.cote4; 
        this.deletechairs(this.tablenumber);  
        this.generatespecificchairs(item,this.cote1,this.cote2,this.cote3,this.cote4,item.number);
      }
    }
    this.editchairs=false;
    this.edit=false;
  }
  
  
}

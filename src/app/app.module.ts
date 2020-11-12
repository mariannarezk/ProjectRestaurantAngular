import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditmodalComponent } from './editmodal/editmodal.component';
import { SectionComponent } from './section/section.component';
import { EditsectionComponent } from './editsection/editsection.component';
import { CategoryComponent } from './category/category.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { AddonesComponent } from './addones/addones.component';
import { EditaddoneComponent } from './editaddone/editaddone.component';
import { ComposeaddonesComponent } from './composeaddones/composeaddones.component';
import { ComposeensaddonesComponent } from './composeensaddones/composeensaddones.component';
import { CreateensembleComponent } from './createensemble/createensemble.component';
import { CreateitemComponent } from './createitem/createitem.component';
import { CreateobligadonComponent } from './createobligadon/createobligadon.component';
import { EditingredientComponent } from './editingredient/editingredient.component';
import { EdititemComponent } from './edititem/edititem.component';
import { EnsembleaddonsComponent } from './ensembleaddons/ensembleaddons.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ItemComponent } from './item/item.component';
import { ItemingredientComponent } from './itemingredient/itemingredient.component';
import { OptionaladdoneComponent } from './optionaladdone/optionaladdone.component';
import { PutensaddoneComponent } from './putensaddone/putensaddone.component';
import { PackagesComponent } from './packages/packages.component';
import { EditpackageComponent } from './editpackage/editpackage.component';
import { PackageitemComponent } from './packageitem/packageitem.component';
import { AllergenComponent } from './allergen/allergen.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestbranchComponent } from './restbranch/restbranch.component';
import { RegistermanagerComponent } from './registermanager/registermanager.component';
import { RegisterComponent } from './register/register.component';
import { ClientinterfaceComponent } from './clientinterface/clientinterface.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { LoginComponent } from './login/login.component';
import { CollectionaddonsComponent } from './collectionaddons/collectionaddons.component';
import { HomemanagerComponent } from './homemanager/homemanager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTablesModule} from 'angular-datatables';
//import {ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';

import { UploadComponent } from './upload/upload.component';
import { Upload2Component } from './upload2/upload2.component';
import { RestoinfosComponent } from './restoinfos/restoinfos.component';
import { RestorequestsComponent } from './restorequests/restorequests.component';
import { SettingsComponent } from './settings/settings.component';
import { SuperadminhomeComponent } from './superadminhome/superadminhome.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GeneralComponent } from './general/general.component';
import { SecurityComponent } from './security/security.component';
import { AddmanagerComponent } from './addmanager/addmanager.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    MenuComponent,
    EditmodalComponent,
    SectionComponent,
    EditsectionComponent,
    CategoryComponent,
    EditcategoryComponent,
    AddonesComponent,
    EditaddoneComponent,
    ComposeaddonesComponent,
    ComposeensaddonesComponent,
    CreateensembleComponent,
    CreateitemComponent,
    CreateobligadonComponent,
    EditingredientComponent,
    EdititemComponent,
    EnsembleaddonsComponent,
    IngredientComponent,
    ItemComponent,
    ItemingredientComponent,
    OptionaladdoneComponent,
    PutensaddoneComponent,
    PackagesComponent,
    EditpackageComponent,
    PackageitemComponent,
    AllergenComponent,
    RestaurantComponent,
    RestbranchComponent,
    RegistermanagerComponent,
    RegisterComponent,
    ClientinterfaceComponent,
    RegisterEmployeeComponent,
    LoginComponent,
    CollectionaddonsComponent,
    HomemanagerComponent,
    UploadComponent,
    Upload2Component,
    RestoinfosComponent,
    RestorequestsComponent,
    SettingsComponent,
    SuperadminhomeComponent,
    SidebarComponent,
    GeneralComponent,
    SecurityComponent,
    AddmanagerComponent,
    RestaurantprofileComponent,
    CustomerhomeComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgSelectModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    
      { path: 'menus', component: MenuComponent },
      { path: 'categories/:menuid', component: CategoryComponent },
      { path: 'packages/:menuid', component: PackagesComponent },
      { path: 'sections', component: SectionComponent },
      { path: 'ingredients', component: IngredientComponent },
      { path: 'items', component: ItemComponent },
      { path: 'restaurant', component: RestaurantComponent},
      { path: 'registermanager', component: RegistermanagerComponent},
      { path: 'addones', component: AddonesComponent },
      { path: 'restbranch/:restid', component: RestbranchComponent},
      { path: 'composeaddones/:itemid', component: ComposeaddonesComponent },
      { path: 'ensembleaddons/:itemid', component: EnsembleaddonsComponent },
      { path: 'itemingredient/:itemid', component: ItemingredientComponent },
      { path: 'packageitem/:packageid', component: PackageitemComponent },
      { path: 'allergen/:itemid', component: AllergenComponent },
      { path: 'registerC', component: RegisterComponent },
      {path:'collection/:menuid',component:CollectionaddonsComponent},
      {path:'homemanager/:branchid',component:HomemanagerComponent},
      { path: 'clientinterface', component: ClientinterfaceComponent },
      { path: 'register', component: RegisterEmployeeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'upload', component: UploadComponent },
      { path: 'upload2', component: Upload2Component },
      { path: 'homesa', component: SuperadminhomeComponent },
      { path: 'restoinfos/:managerid', component: RestoinfosComponent },
      { path: 'restorequests', component: RestorequestsComponent },
      { path: 'settings', component: SettingsComponent },
     {path:'registeremployee',component:RegisterEmployeeComponent},
     {path:'sidebar',component:SidebarComponent},
     
  // {path:'home',component:HomeComponent, canActivate:[AuthGuard]}
      {path:'home',component:HomeComponent},
      { path: 'optionaladdon/:itemid', component: OptionaladdoneComponent },
      { path: 'customerhome', component: CustomerhomeComponent }

    ]),
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [ 
    SuperadminhomeComponent,
    {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

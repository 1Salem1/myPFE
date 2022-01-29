import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AccederAuTimeSheetComponent } from 'src/app//modules/acceder-au-time-sheet/acceder-au-time-sheet.component';
import { PersonnageComponent } from 'src/app//modules/personnage/personnage.component';
import { ProjetComponent } from 'src/app//modules/projet/projet.component';
import { RolesComponent } from 'src/app//modules/roles/roles.component';
import { ServiceDepartmentComponent } from 'src/app//modules/service-department/service-department.component';
import { TachesComponent } from 'src/app//modules/taches/taches.component';
import { ValidationTimeSheetComponent } from 'src/app//modules/validation-time-sheet/validation-time-sheet.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';
const routes: Routes = [

  {

    path:'',component:FullwidthComponent,
    children:[{path:'',component:LoginComponent}]
  
  
  },
{
 path:'',component: DefaultComponent,
 children: [
   {
  path: 'home', component: HomeComponent
   },{
  path: 'AccederAuTimesheet', component: AccederAuTimeSheetComponent
   },{
  path: 'Personnage', component: PersonnageComponent
   },{
   path: 'Projet', component: ProjetComponent
   },{
    path: 'Roles', component:RolesComponent
    },{
    path: 'ServiceDepartment', component: ServiceDepartmentComponent
    },{
    path: 'Taches', component: TachesComponent
    },{
    path: 'ValidationTimeSheet', component: ValidationTimeSheetComponent
    },
   ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

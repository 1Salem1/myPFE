import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AccederAuTimeSheetComponent } from 'src/app//modules/acceder-au-time-sheet/acceder-au-time-sheet.component';
import { PersonnageComponent } from 'src/app//modules/personnage/personnage.component';
import { ProjetComponent } from 'src/app//modules/projet/projet.component';
import { RolesComponent } from 'src/app//modules/roles/roles.component';
import { ServiceDepartmentComponent } from 'src/app//modules/service-department/service-department.component';
import { TachesComponent } from 'src/app//modules/taches/taches.component';
import { ValidationTimeSheetComponent } from 'src/app//modules/validation-time-sheet/validation-time-sheet.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
   DefaultComponent,
   HomeComponent,
   AccederAuTimeSheetComponent,
   PersonnageComponent,
   ProjetComponent,
   RolesComponent,
   ServiceDepartmentComponent,
   TachesComponent,
   ValidationTimeSheetComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
      // * MATERIAL IMPORTS
      MatSidenavModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
    
  ]
})
export class DefaultModule { }

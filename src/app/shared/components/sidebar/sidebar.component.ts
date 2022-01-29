import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   show_time = false ;
   show_para = false ;
   show_proj = false ;
   show_val  = false ;
  constructor() { 
 
  }

  ngOnInit(): void {
   
   
  }

  changetime(){
    this.show_time = !this.show_time
  }
   changepara(){
    this.show_para = !this.show_para
  }
  changeproj(){
    this.show_proj = !this.show_proj
  }
  changeval(){
    this.show_val = !this.show_val
  }
}

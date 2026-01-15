import { Component, OnInit } from '@angular/core';
import { Master } from '../services/master';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {

  adminDetails:any;
  constructor(private master:Master){

  }

  ngOnInit(): void {
    this.adminData();
  }


  async adminData(){
   this.master.getData().subscribe((res:any)=>{
      this.adminDetails = res;
    })
  }
}
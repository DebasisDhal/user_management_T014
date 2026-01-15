import { Component, OnInit } from '@angular/core';
import { Master } from '../services/master';
import { RouterOutlet, RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

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

  childRouteActive = false;

onChildActivate() {
  this.childRouteActive = true;
}

onChildDeactivate() {
  this.childRouteActive = false;
}


}

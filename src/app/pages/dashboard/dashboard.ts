import { Component, OnInit } from '@angular/core';
import { Master } from '../services/master';
import { RouterOutlet, RouterLinkWithHref, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  adminDetails:any;
  searchText: string = '';

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


filteredAdmins() {
  if (!this.searchText) {
    return this.adminDetails; // show all
  }

  return this.adminDetails.filter((admin:any) =>
    admin.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
}

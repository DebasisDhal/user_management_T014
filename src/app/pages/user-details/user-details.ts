import { Component, signal } from '@angular/core';
import { Master } from '../services/master';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
adminDetails = signal<any[]>([]);
    userId:any;
    constructor(private master:Master,private route: ActivatedRoute){
  
    }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{
        this.userId = params.get('id');
      })
      this.adminData();
console.log(this.adminDetails)
    }
  
  
    async adminData(){
     this.master.getData().subscribe((res:any)=>{
        this.adminDetails.set( res.filter((x:any)=> x.id== this.userId));
        // console.log(this.adminDetails)

      })
    }

}

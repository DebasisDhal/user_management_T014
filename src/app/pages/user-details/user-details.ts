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
     this.route.queryParamMap.subscribe(params => {
    const id = Number(params.get('id'));

    if (id) {
      this.adminData(id);
    }
  });
     
    }
  
  
    async adminData(userId:number){
     this.master.getData().subscribe((res:any)=>{
        this.adminDetails.set( res.filter((x:any)=> x.id== userId));
      })
    }

}

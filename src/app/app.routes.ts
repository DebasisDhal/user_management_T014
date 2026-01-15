import { Routes } from '@angular/router';
import { Users } from './pages/users/users';
import { UserCreate } from './pages/user-create/user-create';
import { UserDetails } from './pages/user-details/user-details';

export const routes: Routes = [
    {

        path:'',
        children:[
            {
                path:'users',
                component:Users
            },
            {
                path:'users/create',
                 component:UserCreate
            },
            {
                path:'users/:id',
                component:UserDetails
            }
        ]
    }
];

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Dashboard1Component} from './dashboard1/dashboard1.component';


const appRoutes: Routes = [
    {path: '', component: LoginComponent },
    { 
        path: 'home', 
        component: HomeComponent ,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'dashboard1',component:Dashboard1Component}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: LoginComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
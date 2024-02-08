import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MasterControlComponent } from "./master-control/master-control.component";

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: MasterControlComponent },
];


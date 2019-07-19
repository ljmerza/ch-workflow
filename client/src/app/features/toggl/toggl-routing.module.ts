import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    StandUpComponent, LoginComponent
} from './components';

const routes: Routes = [
    {
        path: '',
        component: StandUpComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClubhouseRoutingModule { }

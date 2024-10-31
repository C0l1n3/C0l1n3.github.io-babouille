import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'whoAreWe',
        component: WhoAreWeComponent,
    },
];

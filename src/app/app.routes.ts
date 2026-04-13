import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Main } from './main/main';
import { Dashboard } from './main/dashboard/dashboard';
import { AboutMe } from './main/about-me/about-me';
import { ErrorPage } from './main/error-page/error-page';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {   path: 'register',
        component: Register 
    },
    {
        path: '',
        redirectTo: 'Login',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: Main,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'about-me', component: AboutMe }
        ],
    },
    {
        path: '**',
        component: ErrorPage
    }

];

import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { AboutMe } from './pages/about-me/about-me';

export const routes: Routes = [
    {
        path: 'login',
        component: Login       
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'about-me',
        component: AboutMe
    }
];

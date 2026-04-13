import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { AboutMe } from './pages/about-me/about-me';
import { ErrorPage } from './pages/error-page/error-page';

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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'about-me',
        component: AboutMe
    },
    {
        path: '**',
        component: ErrorPage
    }

];

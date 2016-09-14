import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { // 重定向路由
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { // 带参数的路由
        path: 'detail/:id',
        component: HeroDetailComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes);

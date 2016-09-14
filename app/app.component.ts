import { Component } from '@angular/core';

// RouterOutlet 是 RouterModule 提供的 指令之一 。 当我们在应用中导航时，路由器就把激活的组件显示在 ` 里面。

@Component({
    selector: 'my-app',
    template: `
            <h1>{{title}}</h1>
            <nav>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            </nav>
            <router-outlet></router-outlet>
            `,
    styleUrls: ['app/app.component.css'],
})

export class AppComponent {
    title = 'Tour of Heroes';
}

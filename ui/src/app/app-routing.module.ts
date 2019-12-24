import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ShellComponent } from './components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
      },
    ]
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

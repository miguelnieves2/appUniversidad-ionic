import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'login-estudiante',
    loadChildren: () => import('./login-estudiante/login-estudiante.module').then( m => m.LoginEstudiantePageModule)
  },
  {
    path: 'main-admin',
    loadChildren: () => import('./main-admin/main-admin.module').then( m => m.MainAdminPageModule)
  },
  {
    path: 'main-estudiante',
    loadChildren: () => import('./main-estudiante/main-estudiante.module').then( m => m.MainEstudiantePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

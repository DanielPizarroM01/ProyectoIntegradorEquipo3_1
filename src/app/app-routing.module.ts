import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConversorUnidadesComponent } from './conversor-unidades/conversor-unidades.component';
import { InicioPage } from './inicio/inicio.page';  // Asegúrate de que la ruta sea correcta





const routes: Routes = [
 {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
  },
  {
    path: 'preguntasres',
    loadChildren: () => import('./preguntasres/preguntasres.module').then( m => m.PreguntasresPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./citas/citas.module').then( m => m.CitasPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoPageModule) },
  { path: 'carrito', loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoPageModule) },

  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfile.module').then(m => m.PerfilPageModule)
  },
  { path: '', component: InicioPage },
  {
    path: 'conversor-unidades',
    loadChildren: () => import('./conversor-unidades/conversor-unidades.component').then(m => m.ConversorUnidadesComponent)
  },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

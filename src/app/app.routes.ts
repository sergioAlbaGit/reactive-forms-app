import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.routes').then((m) => m.reactiveRoutes)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes')  // funciona sin then porque es un default export
    },
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.routes') .then((m) => m.countryRoutes)
    },
  {
    path: '**',
    redirectTo: 'reactive' // se redirige a la ruta por defecto de reactive, que es la de basic
    },
];

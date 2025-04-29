import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { PainelPage } from './pages/painel/painel.page';
import { TotemPage } from './pages/totem/totem.page';
import { GuichePage } from './pages/guiche/guiche.page';
import { RelatoriosPage } from './pages/relatorios/relatorios.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/painel',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'painel',
        loadComponent: () => import('./pages/painel/painel.page').then(m => m.PainelPage),
      },
      {
        path: 'totem',
        loadComponent: () => import('./pages/totem/totem.page').then(m => m.TotemPage),
      },
      {
        path: 'guiche',
        loadComponent: () => import('./pages/guiche/guiche.page').then(m => m.GuichePage),
      },
      {
        path: 'relatorios',
        loadComponent: () => import('./pages/relatorios/relatorios.page').then(m => m.RelatoriosPage),
      },
    ],
  },
];

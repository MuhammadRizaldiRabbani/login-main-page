import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('../main/main.module').then(m => m.MainPageModule),
      },
      {
        path: 'helper',
        loadChildren: () =>
          import('../helper/helper.module').then(m => m.HelperPageModule),
      },
      {
        path: 'inbox',
        loadChildren: () =>
          import('../inbox/inbox.module').then(m => m.InboxPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

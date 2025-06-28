import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { TrackerPage } from './tracker/tracker.page';

const routes: Routes = [

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
  },
  {
    path: 'tracker',
    component: TrackerPage,
      children: [
        {
            path: 'tracker',
            loadChildren: () => import('./tracker/tracker.module').then( m => m.TrackerPageModule)
        }
      ]
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    component: TabsPage, // Halaman utama container
    children: [
      {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(m => m.MainPageModule),
      },
      {
        path: 'helper',
        loadChildren: () => import('./helper/helper.module').then(m => m.HelperPageModule),
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
      },
      {
        path: 'inbox',
        loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
      },
    ]
  },
  {
    path: 'mobil-a',
    loadChildren: () => import('./mobil-a/mobil-a.module').then( m => m.MobilAPageModule)
  },
  {
    path: 'tracking',
    loadChildren: () => import('./tracking/tracking.module').then( m => m.TrackingPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

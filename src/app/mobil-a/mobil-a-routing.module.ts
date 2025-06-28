import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilAPage } from './mobil-a.page';

const routes: Routes = [
  {
    path: '',
    component: MobilAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilAPageRoutingModule {}

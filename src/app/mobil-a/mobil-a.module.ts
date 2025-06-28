import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilAPageRoutingModule } from './mobil-a-routing.module';

import { MobilAPage } from './mobil-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilAPageRoutingModule
  ],
  declarations: [MobilAPage]
})
export class MobilAPageModule {}

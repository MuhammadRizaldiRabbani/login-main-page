import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerPage } from './tracker.page';
import { ReactiveFormsModule } from '@angular/forms'; // Untuk Reactive Form
import { IonicModule } from '@ionic/angular'; // Pastikan IonicModule diimpor di sini

@NgModule({
  declarations: [TrackerPage],  // Deklarasikan TrackerPage di sini
  imports: [
    CommonModule,
    ReactiveFormsModule, // Jika menggunakan form reaktif
    IonicModule, // Impor IonicModule untuk menggunakan komponen-komponen Ionic
  ],
  exports: [TrackerPage],  // TrackerPage diexport jika dibutuhkan oleh modul lain
})
export class TrackerPageModule {}

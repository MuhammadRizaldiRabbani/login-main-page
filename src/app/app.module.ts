import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Untuk akses API
import { ReactiveFormsModule } from '@angular/forms'; // Tambahkan ini untuk form reaktif
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';  // Pastikan IonicModule ada di sini
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Jangan deklarasikan TrackerPage di sini jika sudah ada di TrackerPageModule
// import { TrackerPage } from './tracker/tracker.page';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),  // Pastikan IonicModule terpasang
    AppRoutingModule,
    HttpClientModule, // Untuk HTTP request
    ReactiveFormsModule, // Tambahkan ini untuk mendukung form reaktif
  ],
  providers: [Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

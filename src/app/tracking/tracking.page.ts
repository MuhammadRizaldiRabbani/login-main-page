import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; // Mengimpor Leaflet
import 'leaflet-routing-machine'; // Mengimpor Leaflet Routing Machine

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
  standalone: false,
})
export class TrackingPage implements OnInit {
  map: any;
  routingControl: any;
  tujuanLatLng = { lat: -6.32, lng: 107.30 }; // Lokasi tujuan
  currentLocation = { lat: -6.30, lng: 107.25 }; // Lokasi saat ini (misalnya)
  estimatedTime: string = ''; // Estimasi waktu dinamis
  loading: boolean = false; // Loading state untuk tombol
  errorMessage: string = ''; // Pesan error

  constructor() {}

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    // Inisialisasi peta
    this.map = L.map('map').setView([this.currentLocation.lat, this.currentLocation.lng], 13);

    // Tambahkan tile layer dari OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // Routing control
    this.routingControl = L.Routing.control({
      waypoints: [
        L.latLng(this.currentLocation.lat, this.currentLocation.lng), // Lokasi saat ini
        L.latLng(this.tujuanLatLng.lat, this.tujuanLatLng.lng), // Lokasi tujuan
      ],
      routeWhileDragging: true,
    })
      .on('routesfound', (e) => {
        // Hitung estimasi waktu dari rute pertama
        const route = e.routes[0];
        const durationInSeconds = route.summary.totalTime;
        this.estimatedTime = this.formatTime(durationInSeconds);
      })
      .on('routingerror', () => {
        this.errorMessage = 'Gagal menghitung rute.';
      })
      .addTo(this.map);

    // Sesuaikan tampilan peta dengan rute
    this.map.fitBounds(this.routingControl.getBounds());
  }

  // Format waktu estimasi
  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} jam ${minutes} menit`;
  }

  // Fungsi untuk menyelesaikan pengiriman
  completeDelivery() {
    this.errorMessage = ''; // Reset pesan error
    this.loading = true; // Tampilkan loading state

    // Simulasi penyelesaian pengiriman
    setTimeout(() => {
      this.loading = false; // Selesai loading
      alert('Pengiriman selesai!'); // Tampilkan pesan sukses
    }, 2000);

    // Jika terhubung ke backend, gunakan HTTP request:
    /*
    const deliveryId = 1; // Ganti dengan ID pengiriman yang relevan
    const apiUrl = `http://safera.my.id/api/pengiriman/${deliveryId}`;

    this.http.put(apiUrl, { status: 'Selesai' }).subscribe(
      (response) => {
        console.log('Pengiriman selesai:', response);
        this.loading = false;
        alert('Pengiriman selesai!');
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Gagal menyelesaikan pengiriman.';
        console.error('Error:', error);
      }
    );
    */
  }
}

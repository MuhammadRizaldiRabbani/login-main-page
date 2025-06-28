import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';  // Pastikan API Service sudah dibuat
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
  standalone: false,
})
export class TrackerPage implements OnInit {

  form!: FormGroup;
  kendaraan: any = [];  // Menampung data kendaraan
  drivers: any = [];    // Menampung data driver
  rutes: any = [];      // Menampung data rute
  loading: boolean = false;  // Untuk menangani state loading
  errorMessage: string = ''; // Untuk menampilkan pesan error

  constructor(private apiService: ApiService, private fb: FormBuilder, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    // Inisialisasi form dengan validasi
    this.form = this.fb.group({
      kendaraan: ['', Validators.required],   // Menambahkan validasi required
      driver: ['', Validators.required],
      rute: ['', Validators.required],
      status: ['', Validators.required],
      deskripsiBarang: ['', Validators.required],
      estimasiKedatangan: ['', Validators.required]
    });

    // Mengambil data untuk dropdown
    this.fetchDropdownData();
  }

  // Fungsi untuk mengambil data dropdown
  fetchDropdownData() {
    this.apiService.getKendaraans().subscribe(
      data => {
        console.log('Data Kendaraan:', data);  // Cek data kendaraan
        this.kendaraan = data;
      },
      error => this.handleError(error)
    );

    this.apiService.getDrivers().subscribe(
      data => {
        console.log('Data Driver:', data);  // Cek data driver
        this.drivers = data;
      },
      error => this.handleError(error)
    );

    this.apiService.getRutes().subscribe(
      data => {
        console.log('Data Rute:', data);  // Cek data rute
        this.rutes = data;
      },
      error => this.handleError(error)
    );
  }

  // Fungsi untuk submit form
  onSubmit() {
    this.router.navigate(['/tracking']);
    if (this.form.invalid) {
      this.errorMessage = 'Harap lengkapi semua kolom yang diperlukan';
      return;
    }
  
    const formData = this.form.value;
  
    // Pastikan Anda mengirimkan ID kendaraan, driver, dan rute
    const requestData = {
      kendaraan_id: formData.kendaraan,  // Menggunakan ID kendaraan
      driver_id: formData.driver,        // Menggunakan ID driver
      rute_id: formData.rute,            // Menggunakan ID rute
      status: formData.status,
      deskripsi_barang: formData.deskripsiBarang,
      estimasi_kedatangan: formData.estimasiKedatangan
    };
  
    // Mulai loading
    this.loading = true;
  
    // Kirim data ke API Laravel (menggunakan createTracker)
    this.apiService.createTracker(requestData).subscribe(
      (response: any) => {
        this.loading = false;  // Berhenti loading
        console.log('Data tracker berhasil disimpan', response);
        this.navCtrl.navigateBack('/dashboard');  // Kembali ke halaman sebelumnya
      },
      (error: any) => {
        this.loading = false;  // Berhenti loading
        this.handleError(error);
      }
    );
  }
  

  // Menangani error dan menampilkan pesan
  private handleError(error: any) {
    this.errorMessage = 'Terjadi kesalahan, silakan coba lagi.';
    console.error('Error:', error);
  }
}

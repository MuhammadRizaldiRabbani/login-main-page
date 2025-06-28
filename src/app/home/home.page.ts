import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  username: string = ''; // Akan berisi email
  password: string = ''; // Akan berisi password

  constructor(private router: Router, private http: HttpClient) {}

  doSubmit() {
    if (this.username && this.password) {
      const apiUrl = 'https://safera.my.id/api/login'; // Endpoint API Laravel
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });

      const body = {
        email: this.username, // Username menjadi email
        password: this.password,
      };

      // Kirim permintaan POST ke API Laravel
      this.http.post(apiUrl, body, { headers }).subscribe(
        (response: any) => {
          console.log('Login berhasil:', response);

          // Pastikan token ada dalam response
          if (response.token) {
            // Simpan token ke localStorage
            localStorage.setItem('token', response.token);

            // Simpan informasi pengguna
            localStorage.setItem('username', response.user.name);

            // Arahkan ke halaman utama setelah login sukses
            this.router.navigateByUrl('/tabs/main');
          } else {
            console.error('Token tidak ditemukan dalam respons');
            alert('Login gagal, token tidak ditemukan.');
          }
        },
        (error) => {
          console.error('Login gagal:', error);
          alert('Login gagal. Periksa email dan password Anda.');
        }
      );
    } else {
      alert('Harap masukkan email dan password.');
    }
  }
}

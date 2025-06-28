import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://safera.my.id/api/';  // URL dasar untuk API Anda

  constructor(private http: HttpClient) { }

  // Mengambil token dari localStorage
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Mengambil data kendaraan
  getKendaraans(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}kendaraan`, { headers });
  }

  // Mengambil data driver
  getDrivers(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}driver`, { headers });
  }

  // Mengambil data rute
  getRutes(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}rute`, { headers });
  }

  // Mengirimkan data tracker ke API
  createTracker(data: any): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}pengiriman`, data, { headers });
  }
}

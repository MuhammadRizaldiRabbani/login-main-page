import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  outputtext : any ; 

  constructor(private router: Router) { }

  ngOnInit() {
    this.outputtext = localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('username');  // Pastikan 'user' adalah kunci yang digunakan untuk menyimpan sesi pengguna

    // Mengarahkan pengguna ke halaman login setelah logout
    this.router.navigate(['/home']); 
}
}
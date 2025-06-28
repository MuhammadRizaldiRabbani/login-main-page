import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: false,
})
export class MainPage implements OnInit {

  outputtext : any;

  constructor(private router: Router) { }

  ngOnInit() {

    this.outputtext = localStorage.getItem('username');
    console.log("ini hasil dari data localstorage =>" + this.outputtext);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToTracker() {
    this.router.navigate(['/tracker']);
  }

  navigateToReport() {
    this.router.navigate(['/report']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobil-a',
  templateUrl: './mobil-a.page.html',
  styleUrls: ['./mobil-a.page.scss'],
  standalone: false,
})
export class MobilAPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mulaiPengiriman() {
    this.router.navigate(['/tracking']);
  }

}

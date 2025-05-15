import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: false,
})
export class MainPage implements OnInit {

  outputtext : any;

  constructor() { }

  ngOnInit() {

    this.outputtext = localStorage.getItem('username');
    console.log("ini hasil dari data localstorage =>" + this.outputtext);
  }

}

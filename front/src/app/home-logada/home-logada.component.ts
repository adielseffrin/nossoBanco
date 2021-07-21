import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css'],
})
export default class HomeLogadaComponent implements OnInit {
  ngOnInit(): void {
    console.log(this);
  }
}

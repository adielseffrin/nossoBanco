import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export default class FooterComponent implements OnInit {
  ngOnInit(): void {
    console.log(this);
  }
}

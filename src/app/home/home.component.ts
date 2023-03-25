import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = '';
  public age = 17;
  public traiCay = ['Táo', 'Nho', 'Cam'];
  public traiCay2 = [
    { ten: 'Tao', gia: 12, haGia: true },
    { ten: 'Nho', gia: 3, haGia: false },
    { ten: 'Cam', gia: -18, haGia: true }
  ];
  constructor() {

  }
  ngOnInit(): void {
    console.log('Trai cay = ', this.traiCay);
  }
  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }
}

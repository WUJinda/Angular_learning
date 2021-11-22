import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  title: string = 'Counter';
  num:any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onCount(){
    this.num++;
  }
}

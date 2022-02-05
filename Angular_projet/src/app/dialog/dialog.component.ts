import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  // receive the value of parent component
  @Input() 
  dialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

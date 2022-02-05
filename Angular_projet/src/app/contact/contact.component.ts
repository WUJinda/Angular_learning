import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // receive the value of parent component
  @Input()
  contact: boolean = false;
  // emit fonction
  @Output() 
  contactChange = new EventEmitter<boolean>();

  // Initialize the form.
  contactForm = this.formBuilder.group({
    email: '',
    message: ''
  });

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: '',
      message: ''
    });
  }
  // submit fonction
  onSubmit(): void {
    
    if (this.contactForm.status !== 'VALID') {
      alert('Invalid form: email and message are required')
    } else {
      alert(`Email: ${this.contactForm.value.email} \nMessage: ${this.contactForm.value.message} \nYour message has been sent!`)
      this.contactForm.reset();
      this.contactChange.emit(false);
    }
  }
}

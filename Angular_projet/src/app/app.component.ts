import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-angular';
  needContact: boolean = false;

  // Initialize the form.
  contactForm= this.formBuilder.group({
    email: '',
    message: '',
  });
  // import formBuilder instead of formGroup and formControl
  constructor(public formBuilder: FormBuilder) {}

  onSubmit(): void {
    // if the form has not been filled in, then alert box appears and ask user for email and message. or give user good news.
    if (this.contactForm.status !== 'VALID') {
      alert('Invalid form: email and message are required')
    } else {
      alert('Your message has been sent!')
      this.contactForm.reset();
      this.needContact = false;
    }
  }
}

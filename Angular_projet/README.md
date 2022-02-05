# ProjetAngular
Author：WU Jinda
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

# Subject

The project is to develop a front-end app that displays :
- a navigation bar with 
  - a link to products list
  - a link to users list
  - a link to orders list
  - a contact form

List are loaded from static json files stored in the backend.
Each list enables a click to a detail screen, showing the details of :
- a product
- a user
- an order

Contact form enables to enter an email and a message, with a button to send the message (an alert or a modal will be displayed with the content entered).

## Screenshots

![Products](screenshot/products.jpg)
![Product dialog](screenshot/product.jpg)
![Users](screenshot/users.jpg)
![User dialog](screenshot/user.jpg)
![Orders](screenshot/orders.jpg)
![Order dialog](screenshot/order.jpg)
![Contact form](screenshot/contact.jpg)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

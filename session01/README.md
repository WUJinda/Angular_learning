# Angulardemo01

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

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



## Tips

1. Make better use of the CSS cascade

2. Use more specific rules. By indicating one or more elements before the element you're selecting, the rule becomes more specific and gets higher priority:

   ```
   <div id="test">
     <span>Text</span>
   </div>
   ```

   Copy to Clipboard

   ```
   div#test span { color: green; }
   div span { color: blue; }
   span { color: red; }
   ```

   Copy to Clipboard

   No matter the order, text will be green because that rule is most specific. (Also, the rule for blue overwrites the rule for red, notwithstanding the order of the rules)

3. As a nonsense special case for (2), duplicate simple selectors to increase specificity when you have nothing more to specify.

   ```
   #myId#myId span { color: yellow; }
   .myClass.myClass span { color: orange; }
   ```
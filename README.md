# LicifyFrank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Notas personales

En concordancia con las mejores prácticas en Angular, he implementado un sistema de inicio de sesión donde la persistencia de la sesión depende del almacenamiento local (LocalStorage). Además, he integrado la librería SweetAlert2 para mejorar la interactividad de la aplicación y he empleado Bootstrap para el diseño.

En el archivo .env, se ha definido una variable que almacena el endpoint para el backend local desarrollado en Express. Para estructurar la aplicación de manera eficiente, se han utilizado servicios, interfaces y guards en Angular. Los servicios permiten encapsular la lógica del negocio y centralizar la gestión de datos, mejorando la modularidad del código.

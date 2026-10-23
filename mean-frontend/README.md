# MeanCourse

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

# Install angular material:
Angular Material is an official UI component library developed by Google that implements the Material Design specification for Angular applications.

## angular < 6 
npm install --save @angular/material

npm install --save @angular/animations@22.2.3


# downgrade to angular version 8
npm install --save @angular/material@8 --save-exact


## angular >= 6
ng add @angular/material

included: 
 "@angular/cdk": "^22.2.4",
 "@angular/material": "^22.2.4",

## angular material doc
https://material.angular.dev/components/categories

# find and kill process

kill 95010; sleep 1; lsof -nP -iTCP:4200 -sTCP:LISTEN

lsof -nP -iTCP:4200 -sTCP:LISTEN




# relationship between html, css and ts: 

HTML → Defines the structure and content.
CSS → Controls the appearance and layout.
TypeScript → Controls the behavior and logic.

## A practical example
Suppose you're building a webpage with a button that increases a counter.
Live example — click the button
Counter: 0
Click Me

Here's how the three technologies would implement this.
HTML — Structure
<h1 id="counter">Counter: 0</h1>
<button id="myButton">Click Me</button>


HTML tells the browser to display a heading and a button.
CSS — Appearance
button {
  background-color: blue;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
}


CSS makes the button blue, adds spacing, and rounds its corners.
TypeScript — Behavior
const button = document.getElementById(
  "myButton"
) as HTMLButtonElement;

const counter = document.getElementById(
  "counter"
) as HTMLHeadingElement;

let count: number = 0;

button.addEventListener("click", () => {
  count++;
  counter.textContent = `Counter: ${count}`;
});


TypeScript listens for button clicks, increments the counter, and updates the HTML.

Important: Browsers execute JavaScript, not TypeScript directly in the usual production workflow. TypeScript is compiled (or transpiled) into JavaScript before the browser executes it.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

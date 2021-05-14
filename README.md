# ExtendedMatTable


## Install

Using npm:
```
$ npm i --save extended-mat-table
```

## How to use

Import ExtendedMatTableModule and BrowserAnimationsModule:
```
import { ExtendedMatTableModule } from 'extended-mat-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ExtendedMatTableModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Add material theme:

[Add your theme file to the styles array of your project's angular.json file](https://angular.io/guide/workspace-config#styles-and-scripts-configuration)
```
    "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "styles": [
            "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
            "src/styles.scss"
          ],
          "scripts": []
          }

```

```
<app-extended-mat-table [data]="data" [columns]="column"></app-extended-mat-table>
```

## Demo

[Demo](https://codesandbox.io/s/unruffled-glitter-z1xve?file=/src/app/app.component.html)




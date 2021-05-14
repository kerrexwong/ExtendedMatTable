A simple and powerful Datatable for Angular based on Angular Mat Table with some additional features
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

[https://codesandbox.io/s/unruffled-glitter-z1xve?file=/src/app/app.component.html](https://codesandbox.io/s/unruffled-glitter-z1xve?file=/src/app/app.component.html)

![Image of Demo](https://github.com/kerrexwong/ExtendedMatTable/raw/main/src/assets/screenshot.png)



## Available Options


| Variable           | Default Value |
|--------------------|---------------|
| buttonColor        | #23758e       |
| exportPrefix       | ex_           |
| enableButton       | true          |
| enableFilter       | true          |
| enableColumnFilter | true          |
| hiddenColumnsIndex | number[]      |


```
import { Options } from 'extended-mat-table';


public options:Options = {
    hiddenColumnsIndex:[5]
  }
```

```
<app-extended-mat-table [data]="data" [columns]="column" [options]="options"></app-extended-mat-table>
```
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

[https://codesandbox.io/s/unruffled-glitter-z1xve](https://codesandbox.io/s/unruffled-glitter-z1xve?file=/src/app/app.component.ts)

![Image of Demo](https://github.com/kerrexwong/ExtendedMatTable/raw/main/src/assets/screenshot.png)

<br>

## Available Input
| Variable           | Description |
|--------------------|---------------|
| data        | table data      |
| columns       | table columns           |
| options       | see belows           |
| fetching       | see belows           |

<br>
<br>

## Available Options


| Variable           | Default Value |
|--------------------|---------------|
| buttonColor        | #23758e       |
| exportPrefix       | ex_           |
| enableButton       | true          |
| enableFilter       | true          |
| enableColumnFilter | true          |
| hiddenColumnsIndex | number[]      |
| allowMultiSelection| false         |
| enableRowSelection | false         |
| selectedRowCallback| function      |
| returnColumnsOrderCallback| function      |
| fetching_text| fetching data ...|
| lineClamp | 4 |
<br>

```
import { Options } from 'extended-mat-table';


public options:Options = {
    hiddenColumnsIndex:[5],
    selectedRowCallback:({tableId, selected})=>{
    },
    returnColumnsOrderCallback:({tableId, displayedColumns, availableColumns})=>{
    }
  }
```

```
<app-extended-mat-table [data]="data" [columns]="column" [options]="options"></app-extended-mat-table>
```
<br>

## Fetching

![fetching](https://github.com/kerrexwong/ExtendedMatTable/raw/main/src/assets/fetching.gif)

the text can be modified by options **fetching_text**

this one can be used together with **addRows** function

```
<app-extended-mat-table [data]="data" [columns]="column" [options]="options" [fetching]="true"></app-extended-mat-table>
```

<br>

## Add Rows
You can append data to table after initial

```
<app-extended-mat-table #dataTable [data]="data" [columns]="column" [options]="options"></app-extended-mat-table>
```

```
import { Options, Column, ExtendedMatTable} from 'extended-mat-table';

@ViewChild('dataTable') dataTable:ExtendedMatTable;

this.dataTable.addRows([{}])

```

<br>

## Actions
Add button in row
<br>

![Image of Demo](https://github.com/kerrexwong/ExtendedMatTable/raw/main/src/assets/actions.png)
<br>

```
<app-extended-mat-table #dataTable [data]="data" [columns]="column" [actions]="actions"></app-extended-mat-table>
```
```
public actions = [
    {title:"Edit", action:(row)=>{
      console.log(row)
    }},
    {title:"Delete", action:(row)=>{
      console.log(row)
    }}
  ]
```
<br>

## Wrap Text
![Image of Wrap Text Demo](https://github.com/kerrexwong/ExtendedMatTable/raw/main/src/assets/wrap_text.png)

use column **wrap_text** option to wrap text in a cell, specific number of lines by options **lineClamp**

```
  public column:Column[] = [
    {title:'Code',data:'Code'},
    {title:'Description',data:'Description', wrap_text:true}
  ]

```

```
public options:Options = {
    lineClamp:4
  }
```
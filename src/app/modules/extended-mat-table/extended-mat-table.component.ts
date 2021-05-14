import { Component, OnInit, ViewChild, Input, AfterViewInit, OnChanges } from '@angular/core';
import { SelectionModel} from '@angular/cdk/collections';
import { MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { utils, writeFile } from 'xlsx';
import { findIndex, filter, includes, pick, remove, size } from "lodash";
import * as moment from 'moment';

interface Column {
  title: string;
  data: string;
}
interface Options {
  tableId?: string;
  pageIndex?: number;
  pageSize?: number;
  hiddenColumnsIndex?: number[];
  htmlColumns?:any[];
  buttonColor?: string;
  exportPrefix?: string;
  allowMultiSelection?: boolean;
  enableRowSelection?: boolean;
  enableBulkEdit?: boolean;
  removeHTMLBeforeExport?: boolean;
  enableClickOnDetail?: boolean;
  enableButton?: boolean;
  enableFilter?: boolean;
}

@Component({
  selector: 'app-extended-mat-table',
  templateUrl: './extended-mat-table.component.html',
  styleUrls: ['./extended-mat-table.component.scss']
})
export class ExtendedMatTableComponent implements OnInit, AfterViewInit {

  @Input() options:Options = {};
  @Input() data:any[] = [];
  @Input() columns:Column[] = [];
  @Input() fetching:boolean = false;
  @Input() actions:any[] = [];
  @Input() returnNewColumnsOrder:any;
  @Input() cellOnClickFunction:any;
  @Input() bulkEditFunction:any;

  public displayedColumns: string[] = [];
  public availableColumns: string[] = [];
  public dataSource:any;
  public length:number = 0;
  public goTo: number = 0;
  public pageSizeOptions:any[] = ['5','10','20','100'];
  public showColumns:boolean = false;
  public tableMinHeight:number = 0;
  public rowActions:any[] = [];
  public columnFilter:boolean = false;

  private pageNumbers: number[] = [];
  public _options:any = {
    tableId: 'DEFAULT_TABLE',
    pageIndex: 0,
    pageSize: 10,
    hiddenColumnsIndex: [],
    htmlColumns: [],
    buttonColor: "#23758e",
    exportPrefix: "ex_",
    allowMultiSelection: false,
    enableRowSelection: false,
    enableBulkEdit: false,
    removeHTMLBeforeExport: false,
    enableClickOnDetail: false,
    enableButton: true,
    enableFilter: true
  };
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection:any = new SelectionModel(this._options.allowMultiSelection, []);
  ngOnInit() {
    this._options = {...this._options, ...this.options};
    if(size(this._options.hiddenColumnsIndex)!=0)
    this.displayedColumns = this.columns.filter((t,i)=>{
      return !includes(this._options.hiddenColumnsIndex,i);
    }).map(c=>c.data);
   
    this.availableColumns = this.columns.map(c=>c.data);
    this.dataSource = new MatTableDataSource(this.data);

    this.rowActions = this.actions.filter(a=>{
      return(typeof a.action == "function")
    })
    if(this.rowActions.length > 0)this.displayedColumns.push('actions');
    if(this._options.enableRowSelection)this.displayedColumns.unshift('select');
    this.updateGoto(); 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    if(this.dataSource){
      this.dataSource.data = this.data;
      this.dataSource._updateChangeSubscription();
    }
  }

  checkIsColumnsDisplayed (c:string){
    return (this.displayedColumns.indexOf(c) !== -1)
  }

  addRows(rows){
      this.dataSource.data.push(...rows);
      this.dataSource._updateChangeSubscription();
  }

  removeRow(row,idField){
    let index = findIndex(this.dataSource.data,((x:any)=>x[idField] == row[idField]));
    if(index !== -1){
      this.dataSource.data.splice(index,1)
      this.dataSource._updateChangeSubscription();
    }
  }

  public updateDisplayColumn(displayedColumns){
    this.displayedColumns = filter(this.availableColumns,(f)=>includes(displayedColumns,f));
  }

  public render = (data, renderer, row) : void => {
    if (!renderer)
      return data;
    return renderer(data,row);
  }

  updateGoto() {
    this.length = this.data.length;
    this.goTo = (this._options.pageIndex || 0) + 1;
    this.pageNumbers = [];
    for (let i = 1; i <= this.length / this._options.pageSize; i++) {
      this.pageNumbers.push(i);
    }
  }

  paginationChange(pageEvt: PageEvent) {
    this._options.pageIndex = pageEvt.pageIndex;
    this._options.pageSize = pageEvt.pageSize;
    this.updateGoto();
  }

  goToChange() {
    this.paginator.pageIndex = this.goTo - 1;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  exportDocument(type = 'xlsx') {
    let export_data = this.dataSource.filteredData.map(d=>{
      if(this._options.removeHTMLBeforeExport && Array.isArray(this._options.htmlColumns)){
        this._options.htmlColumns.map(column=>{
          var regex = /<[a-zA-Z][^>]*>(.*?)<\/[a-zA-Z]>/gm;
          var strToMatch =  d[column];
          var results:any[] = [],match;
          if(strToMatch){
            do {
              match = regex.exec(strToMatch);
              if (match)
                  results.push(match[1]);
            } while (match);
            d[column] = results.join(',');
          }

         
        })
      }
      return pick(d,this.displayedColumns);
    })
    var ws = utils.json_to_sheet(export_data);
    var wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Summary");
    let options = {};
    switch(type){
      case 'xlsx':
        options = { bookSST: true, bookType: 'xlsx' };
        break;
      case 'csv':
        options = { bookSST: true, bookType: 'csv' };
        break;
      default:
        options = { bookSST: true, bookType: 'xlsx' };
    }
    // writeFile(wb,`${moment().format('YYYY-MM-DD')} - GCR Risk #${this.risk.id} details.xlsx`, { bookSST: true, bookType: 'xlsx' });  
    writeFile(wb,`${this._options.exportPrefix}-${moment().format('YYYYMMDD')}.${type}`, options);  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyColumnFilter(event: Event, column) {
    if(!column || !column.data)return;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: any, filter: string): boolean => {
      if(!data[column.data])return false;
      return data[column.data].toLowerCase().indexOf(filter) !== -1;
    };
  }

  triggerColumnFilter(){
    this.columnFilter = !this.columnFilter;
    if(!this.columnFilter){
      this.dataSource.filter = "";
    }
  }

  onToggleChange(event: MatButtonToggleChange) {
    this.displayedColumns = filter(this.availableColumns,(f)=>includes(event.value,f));
    if(this.rowActions.length > 0)this.displayedColumns.push('actions');
    if(this._options.enableRowSelection)this.displayedColumns.unshift('select');
    if(this.returnNewColumnsOrder && typeof this.returnNewColumnsOrder == 'function'){
      this.returnNewColumnsOrder({tableId:this._options.tableId, displayedColumns:this.displayedColumns,availableColumns:this.availableColumns});
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.availableColumns, event.previousIndex, event.currentIndex);
    this.displayedColumns = filter(this.availableColumns,(f)=>includes(this.displayedColumns,f));
    if(this.rowActions.length > 0)this.displayedColumns.push('actions');
    if(this._options.enableRowSelection)this.displayedColumns.unshift('select');
    if(this.returnNewColumnsOrder && typeof this.returnNewColumnsOrder == 'function'){
      this.returnNewColumnsOrder({tableId:this._options.tableId, displayedColumns:this.displayedColumns,availableColumns:this.availableColumns});
    }
  }

  toggleRowSelect(row) {
    if(this._options.enableRowSelection){
      this.selection.toggle(row);
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?:any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  toggleBulkEdit() {
    this._options.allowMultiSelection = !this._options.allowMultiSelection;this._options.enableRowSelection = !this._options.enableRowSelection;
    this.selection = new SelectionModel(this._options.allowMultiSelection, []);
    if(this._options.enableRowSelection){
      this.displayedColumns.unshift('select')
    }else{
      remove(this.displayedColumns,(x=>x=='select'));
    };
  }

  toggleBulkUpdate() {
    if(this.bulkEditFunction && typeof this.bulkEditFunction == "function"){
      this.bulkEditFunction(this._options.tableId, this.selection.selected);
    }
  }

  onClickFunc(row,column){
    if(typeof this.cellOnClickFunction !== "function")return;
    this.cellOnClickFunction(row,column, this.pageSizeOptions);
  }

  toggleColumnSelectBoxAndCalculateTableMinHeight(){
    let minHeight = this.availableColumns.length * 48;
    this.tableMinHeight = (this.showColumns)?(minHeight > 400)?400:minHeight:0;
  }

}
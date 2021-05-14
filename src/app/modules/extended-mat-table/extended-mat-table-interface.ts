export interface Column {
    title: string;
    data: string;
    wrap_text?: boolean;
    render?: any;
  }
  export interface Options {
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
    enableColumnFilter?: boolean;
  }
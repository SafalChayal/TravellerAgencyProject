declare module 'pdfmake/build/pdfmake' {
    export interface TCreatedPdf {
      download?(defaultFileName?: string): void;
    }
  
    export interface TDocumentDefinitions {
      content: any[];
      styles?: any;
    }
  
    export interface TFontFamilyTypes {
      [fontName: string]: string;
    }
  
    export var vfs: TFontFamilyTypes;
  }
  
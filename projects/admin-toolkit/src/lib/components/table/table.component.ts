import { Component, OnInit, Input } from '@angular/core';

type mapFn = (row: any) => string;

interface Column {
  name: string;
  type: string;
  map: string | mapFn;
}

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() addSerial = true;
  @Input() columns: Column[];
  @Input() data: any[];

  constructor() { }

  ngOnInit() {}

  getColumnType(index): string {
    return this.columns[index].type;
  }

  getColValue(row: any, index): any {
    const { map } = this.columns[index];

    switch (typeof map) {
      case 'string':
        return row[map];

      case 'function':
        return map(row);
    }
  }

  colIndices(): number[] {
    const indices: number[] = [];
    for (let i = 0; i < this.columns.length; i++) {
      indices.push(i);
    }

    return indices;
  }

}

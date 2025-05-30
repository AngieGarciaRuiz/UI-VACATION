import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-add-remove-array-based-datasource-table',
    imports: [MatTableModule, MatButtonModule],
    templateUrl: './add-remove-array-based-datasource-table.component.html',
    styleUrls: ['./add-remove-array-based-datasource-table.component.scss']
})
export class AddRemoveArrayBasedDatasourceTableComponent {

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = [...ELEMENT_DATA];

    @ViewChild(MatTable) table: MatTable<PeriodicElement>;

    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
        this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
        this.table.renderRows();
    }

    removeData() {
        this.dataSource.pop();
        this.table.renderRows();
    }

}
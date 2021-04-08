import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  date: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Pedro Silva', date: 'Adicionado em: 03/02/2021', email: 'email1@email.com'},
  {name: 'Angélica Santos', date: 'Adicionado em: 12/01/2021', email: 'email2@email.com'},
  {name: 'Larissa Lima', date: 'Adicionado em: 22/05/2019', email: 'email3@email.com'},
  {name: 'Felipe Pereira', date: 'Adicionado em: 15/04/2019', email: 'email4@email.com'},
  {name: 'Bruno Andrade', date: 'Adicionado em: 11/07/2018', email: 'email5@email.com'},
];


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  displayedColumns: string[] = ['select', 'name', 'editar', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  


  ngOnInit(): void {
    
  }

}
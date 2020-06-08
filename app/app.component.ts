import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { FormSelectionComponent } from './form-selection/form-selection.component';

export interface PeriodicElement {
  name: string;
  position: string;
  attributes: string;
  group: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'crop_square', name: 'Test 1', attributes: 'Land; Low Complexity', group: 'Pending'},
  {position: 'crop_square', name: 'Test 2', attributes: 'Land; Low Complexity', group: 'Draft'},
  {position: 'crop_square', name: 'Test 3', attributes: 'Land; Low Complexity', group: 'Draft'},
  {position: 'crop_square', name: 'Test 4', attributes: 'Land; Low Complexity', group: 'Draft'},
  {position: 'crop_square', name: 'Test 5', attributes: 'Land; Low Complexity', group: 'Pending'},
  {position: 'crop_square', name: 'Test 6', attributes: 'Land; Low Complexity', group: 'Pending'},
  {position: 'crop_square', name: 'Test 7', attributes: 'Land; Low Complexity', group: 'Draft'},
  {position: 'crop_square', name: 'Test 8', attributes: 'Land; Low Complexity', group: 'Pending'},
  {position: 'crop_square', name: 'Test 9', attributes: 'Land; Low Complexity', group: 'Draft'},
  {position: 'crop_square', name: 'Test 10', attributes: 'Land; Low Complexity', group: 'Pending'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chevron';
  displayedColumns: string[] = ['position', 'name', 'attributes', 'group'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog){}
  openDialog(){
    this.dialog.open(FormSelectionComponent);
  }
}

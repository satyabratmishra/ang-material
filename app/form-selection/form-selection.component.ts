import { Component, OnInit } from '@angular/core';


export interface LeftSearchElement {
  name: string;
  attributes: string;
  group: string;
}

const ELEMENT_DATA: LeftSearchElement[] = [
  {name: 'Test 1', attributes: 'Land; Low Complexity', group: 'Pending'},
  {name: 'Test 2', attributes: 'Land; Low Complexity', group: 'Draft'},
  {name: 'Test 3', attributes: 'Land; Low Complexity', group: 'Draft'},
  {name: 'Test 4', attributes: 'Land; Low Complexity', group: 'Draft'},
  {name: 'Test 5', attributes: 'Land; Low Complexity', group: 'Pending'},
  {name: 'Test 6', attributes: 'Land; Low Complexity', group: 'Pending'},
  {name: 'Test 7', attributes: 'Land; Low Complexity', group: 'Draft'},
  {name: 'Test 8', attributes: 'Land; Low Complexity', group: 'Pending'},
  {name: 'Test 9', attributes: 'Land; Low Complexity', group: 'Draft'},
  {name: 'Test 10', attributes: 'Land; Low Complexity', group: 'Pending'},
];
@Component({
  selector: 'app-form-selection',
  templateUrl: './form-selection.component.html',
  styleUrls: ['./form-selection.component.css']
})
export class FormSelectionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'attributes', 'group'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

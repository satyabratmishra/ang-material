import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  selector: 'tab-nav-bar',
  templateUrl: './tab-nav-bar-basic.html',
  styleUrls: ['./tab-nav-bar-basic.css'],
})
export class TabNavBar {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
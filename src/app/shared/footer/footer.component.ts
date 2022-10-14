import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  today: number = Date.now();
  currentVersion = `Angular version ${VERSION.full}`

}

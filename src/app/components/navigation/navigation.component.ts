import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() currentPage: number = 1;
  @Output() page = new EventEmitter<number>();
  @Input() totalPages: number = 0;
  @Input() listPage: number[] = [];
  @Input() limitPage: any = null
  
  constructor() {
  }

  ngOnInit() {
  }

  @Input() clickPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.page.emit(this.currentPage);
    }
  }


}

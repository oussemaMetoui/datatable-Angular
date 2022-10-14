import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  order: number = 1;
  @Output() onChangeOrder = new EventEmitter<Object>();
  @Input() list: any;
  @Input() headers: any[] = []

  faArrowUp = faArrowUp
  faArrowDown = faArrowDown

  constructor() { }

  ngOnInit(): void {
  }

  @Input() onChangeSort(data: any) {
    this.headers[data.index].order = data.order
    this.onChangeOrder.emit({ key: data.key, order: data.order });
  }
}

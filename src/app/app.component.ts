import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { sort } from './utils/sortUril';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  headers = [{ key: 'id', order: 1 }, { key: 'employee_name', order: 1 }, { key: 'employee_salary', order: 1 }, { key: 'employee_age', order: 1 }]
  title = 'datatable-app';
  employees: any;
  pagination: number = 1
  pagesCount: number = 0;
  currentPage: number = 1



  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe((response: any) => {
      this.employees = response.data;
      this.pagesCount = Math.ceil(this.employees.length / 10)
    });
  }

  getListPagination(p: number) {
    if (this.employees !== undefined) {
      return this.employees.slice((p - 1) * 10, p * 10);
    }
  }

  clickPage(page: number) {
    this.currentPage = page;
  }

  onSort(data: any) {
    this.employees = sort(data.key, data.order, this.employees)
  }
}
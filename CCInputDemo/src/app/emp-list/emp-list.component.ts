import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  empList : Employee[] = [];
  columnList : string[] = ["name","salary","dept"];
  headerList : string[] = ["Name","Salary","Dept"];
  constructor() { }

  ngOnInit() {
    let emp1 = new Employee(27,"keyur",11111,"IT");
    let emp2 = new Employee(44,"vinit",21111,"SALES");
    let emp3 = new Employee(26,"denish",31111,"MKT");
    this.empList.push(emp1);
    this.empList.push(emp2);
    this.empList.push(emp3);
  }

}

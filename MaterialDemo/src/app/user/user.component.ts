import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { UserModel } from './user-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: UserModel[] = [];

  displayedColumns: string[] = ['id', 'username', 'email', 'mobileNo','gender','age'];
  dataSource: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers():void{
    this.userService.getUsers().subscribe(
      (data)=>{
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

import { Injectable } from '@angular/core';
import { Student } from '../model/student.mode';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {



  constructor() { }

  getStudentList() : Observable<Student[]> {
    let stud1 = new Student(27,"keyur");
    let stud2 = new Student(26,"denish");
    let stud3 = new Student(44,"vinit");

    let studList : Student[] = [stud1,stud2,stud3];
    return of(studList);
  }

  getStudentNames() : Observable<String[]> {
    return this.getStudentList().pipe(
      map(students=>{
        let names: String[] = [];
        let i = 0;
        for(let s of students){
          names[i++] = s.name;
        }
        return names;
      })
    )
  }
}

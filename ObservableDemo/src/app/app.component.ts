import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, of, pipe } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { StudentService } from './service/student.service';
import { Student } from './model/student.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  
  title = 'ObservableDemo';

  numberObservable: Observable<number> = interval(1000)

  num : number = 0;

  subscription : Subscription;

  studentList : Student[] = [];

  constructor(private studentService : StudentService){}

  ngOnInit(): void {
    //this.studentList = this.studentService.getStudentList();
    this.studentService.getStudentList().subscribe(
      (data)=>{
        this.studentList = data;
      },
      (error)=>{

      }
    )

    this.studentService.getStudentNames().subscribe(
      (names)=>{
        console.log(names) 
      },
      (error)=>{

      }
    )  
    let nObs:Observable<number> = of(1,2,3,4)

    nObs.pipe(
      filter(num => num%2 == 0),
      map(data => data*2)
    ).subscribe(
      (data)=>{
        console.log(data)
      }
    )
      
    
    
  }

  subscribe() : void {
    this.subscription = this.numberObservable.subscribe(
      (data : number)=>{
        this.num = data;
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("Completed");
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  start() : void {
    this.subscribe();
  }

  stop() : void {
    this.subscription.unsubscribe()
  }

}

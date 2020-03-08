import { Student } from './student.model';

export class Batch{
    constructor(public id ? : number,public batchName ?: string, public courseName ?: string, public students ?: Student[]){}
}
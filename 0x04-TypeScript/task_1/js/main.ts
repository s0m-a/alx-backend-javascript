export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [index:string]: any;
  }
  
  export interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }
  
  export interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
  }
  
  export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  export class StudentClass implements IStudentClass {
    private firstName!: string;
    private lastName!: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework() {
      return 'Currently working';
    }
  
    displayName() {
      return this._firstName;
    }
  }
  
  export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
    return new ctor(firstName, lastName);
  }

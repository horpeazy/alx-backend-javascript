export interface Teacher = {
  readonly firstName: string;
  readonly lastName : string;
  fullTimeEmployee : boolean;
  yearsOfExperience? : number;
  location : string;
  [key: string]: any;
}

export Directors extends Teacher = {
  numberOfReports : number;
}

export function printTeacher(firstName, lastName): printTeacherFunction {
  return `${firstName[0]}. ${lastName}`;
}

export interface printTeacherFunction = {
  (firstName: string, lastName: string): string;
};

export interface StudentClassInterface = {
  workOnHomework(): string;
  displayName(): string;
};

export interface StudentClassConstructor = {
  new (firstName: string, lastName: string): StudentClassInterface;
};

export class StudentClass implements StudentClassInterface {
  private _firstName!: string;
  private _lastName!: string;
	
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  };

  workOnHomework() {
    return "Currently working";
  };

  displayName() {
    return this._firstName;
  };
};


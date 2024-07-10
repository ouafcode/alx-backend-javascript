interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
  }
  
interface Directors extends Teacher {
  numberOfReports: number,
} 

const printTeacher = (firstName: string, lastName: string) : string => `${firstName.charAt(0)}. ${lastName}`;

interface StudentInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string,
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

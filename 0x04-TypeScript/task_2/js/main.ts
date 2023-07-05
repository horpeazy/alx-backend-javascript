
export interface DirectorInterface = {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface = {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

export class Teacher impements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === number && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

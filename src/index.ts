type Lecturer = {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string[];
  contacts: string[];
};

enum Status {
  Inactive,
  Active,
}

class School {
  private _areas: Area[] = [];
  private _lecturers: Lecturer[] = [];

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addArea(area: Area): void {
    this._areas.push(area);
  }

  removeArea(areaName: string): void {
    this._areas = this._areas.filter((area: Area) => area.name !== areaName);
  }

  addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturerName: string): void {
    this._lecturers = this._lecturers.filter(
      (lecturer: Lecturer) => lecturer.name !== lecturerName
    );
  }
}

class Area {
  private _levels: Level[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get levels(): Level[] {
    return this._levels;
  }

  addLevel(level: Level): void {
    this._levels.push(level);
  }

  removeLevel(levelName: string): void {
    this._levels = this._levels.filter(
      (level: Level) => level.name !== levelName
    );
  }
}
class Level {
  private _groups: Group[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get groups(): Group[] {
    return this._groups;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  addGroup(group: Group): void {
    this._groups.push(group);
  }

  removeGroup(groupName: string): void {
    this._groups = this._groups.filter(
      (group) => group.directionName !== groupName
    );
  }
}

class Group {
  private _students: Student[] = [];
  private _directionName: string;
  private _levelName: string;
  private _area: string;
  private _status: Status = Status.Inactive;

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  get students(): Student[] {
    return this._students;
  }

  get area(): string {
    return this._area;
  }

  get status(): Status {
    return this._status;
  }

  get directionName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(fullName: string): void {
    this._students = this._students.filter(
      (student: Student) => student.fullName !== fullName
    );
  }

  showPerformance(): Student[] {
    return this._students.sort(
      (a: Student, b: Student) =>
        b.getPerformanceRating() - a.getPerformanceRating()
    );
  }
}

class Student {
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: { workName: string; mark: number }[];
  private _visits: boolean[];

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
    this._grades = [];
    this._visits = [];
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(value: string) {
    const [firstName, lastName] = value.split(" ");
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }
  get grades(): { workName: string; mark: number }[] {
    return this._grades;
  }

  get visits(): boolean[] {
    return this._visits;
  }

  setGrade(workName: string, mark: number): void {
    this._grades.push({ workName, mark });
  }

  setVisit(present: boolean): void {
    this._visits.push(present);
  }

  getPerformanceRating(): number {
    if (this._grades.length === 0) return 0;

    const averageGrade =
      this._grades.reduce((sum, grade) => sum + grade.mark, 0) /
      this._grades.length;
    const attendanceCount = this._visits.filter((present) => present).length;
    const attendancePercentage = (attendanceCount / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

// const studentA = new Student("Max", "Rozh", 1997);
// studentA.setGrade("Math", 90);
// studentA.setGrade("English", 90);
// studentA.setVisit(true);

// const studentB = new Student("Ivan", "Ivanov", 1998);
// studentB.setGrade("Math", 100);
// studentB.setGrade("English", 100);
// studentB.setVisit(false);

// const group = new Group("Web", "Level 1");

// [studentA, studentB].forEach((student) => group.addStudent(student));
// console.log(group.showPerformance());

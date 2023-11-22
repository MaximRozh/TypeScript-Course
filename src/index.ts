class School {
  directions: any[] = []; // 'any' used as you mentioned. But 'Direction' should be used

  addDirection(direction: Direction): void {
    this.directions.push(direction);
  }
}

class Direction {
  levels: any[] = []; // 'any' used as you mentioned

  private _name: string; // added private access modifier
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: Level): void {
    this.levels.push(level);
  }
}

class Level {
  groups: any[] = []; // 'any' used as you mentioned
  private _name: string; // added private access modifier
  private _program: unknown; // 'unknown' is used for '_program'

  constructor(name: string, program: unknown) {
    // 'unknown' is used for 'program'
    this._name = name; // added private access modifier
    this._program = program;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  // GET Program
  // const level = new Level("Level 1", "Program 1");
  // const program = level.program.toUpperCase(); -- ERROR
  get program(): unknown {
    // 'unknown' is used for the return type of 'program'
    return this._program;
  }
  set program(value: unknown) {
    this._program = value;
  }

  addGroup(group: Group): void {
    //'Group' should be used
    this.groups.push(group);
  }
}

class Group {
  private _students: any[] = [];
  //'Students' should be used
  get students(): any[] {
    return this._students;
  }

  constructor(public directionName: string, public levelName: string) {}

  addStudent(student: Student): void {
    this._students.push(student);
  }

  showPerformance(): Student[] {
    const sortedStudents = this.students.sort(
      (a: Student, b: Student) =>
        b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades: { [key: string]: number } = {};
  attendance: boolean[] = [];

  constructor(
    public firstName: string,
    public lastName: string,
    public birthYear: number
  ) {}

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }
  set age(value: number) {
    this.birthYear = new Date().getFullYear() - value;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    let attendancePercentage: number = 0;
    if (this.attendance.length > 0) {
      attendancePercentage =
        (this.attendance.filter((present) => present).length /
          this.attendance.length) *
        100;
    }

    return (averageGrade + attendancePercentage) / 2;
  }
}

// const studentA = new Student("Max", "Rozh", 1997);
// studentA.setGrade("Math", 90);
// studentA.setGrade("English", 90);
// studentA.markAttendance(true);

// const studentB = new Student("Ivan", "Ivanov", 1998);
// studentB.setGrade("Math", 100);
// studentB.setGrade("English", 100);
// studentB.markAttendance(false);

// const group = new Group("Web", "Level 1");

// [studentA, studentB].forEach((student) => group.addStudent(student));
// console.log(group.showPerformance());

// const level = new Level("Level 1", "Program 1");
// group.addStudent(level); -- ERROR

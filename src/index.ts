type Grade = {
  workName: string;
  mark: boolean;
};

type Visit = {
  lesson: string;
  present: boolean;
};

const BadgeSize: {
  single: string;
  double: string;
} = {
  single: "4x3",
  double: "4x6",
};

const Print: {
  standart: string;
  fast: string;
} = {
  standart: "color",
  fast: "zpl",
};

enum BadgeTypesEnum {
  COLOR = "color",
  MONO = "mono",
}

type BadgeSizeType = keyof typeof BadgeSize;
type PrintType = keyof typeof Print;

type BadgeTypeKey = `${BadgeSizeType}_${PrintType}`;

class Student {
  badgeTypeMap = new Map<BadgeTypeKey, BadgeTypesEnum>([
    ["single_fast", BadgeTypesEnum.COLOR],
    ["single_standart", BadgeTypesEnum.COLOR],
    ["double_fast", BadgeTypesEnum.MONO],
    ["double_standart", BadgeTypesEnum.MONO],
  ]);

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: Grade[] = []; // Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
  private _visits: Visit[] = []; // Опишите, как объект у которого есть поле lesson (любое имя) и present

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  setGrade(grade: Grade): void {
    this._grades.push(grade);
  }

  setVisit(visit: Visit): void {
    this._visits.push(visit);
  }

  getPerformanceRating(): number {
    const gradeValues = this._grades.map((grade) => (grade.mark ? 1 : 0));

    if (!gradeValues.length) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage =
      this._visits.length > 0
        ? (this._visits.filter((visit) => visit.present).length /
            this._visits.length) *
          100
        : 0;

    return (averageGrade + attendancePercentage) / 2;
  }
}

const s = new Student("John", "Doe", 2000);
s.setGrade({ workName: "hw3", mark: true });
// s.fullName;
// s.badgeTypeMap;

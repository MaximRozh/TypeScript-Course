var School = /** @class */ (function () {
    function School() {
        this.directions = []; // 'any' used as you mentioned. But 'Direction' should be used
    }
    School.prototype.addDirection = function (direction) {
        this.directions.push(direction);
    };
    return School;
}());
var Direction = /** @class */ (function () {
    function Direction(name) {
        this.levels = []; // 'any' used as you mentioned
        this._name = name;
    }
    Object.defineProperty(Direction.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Direction.prototype.addLevel = function (level) {
        this.levels.push(level);
    };
    return Direction;
}());
var Level = /** @class */ (function () {
    function Level(name, program) {
        this.groups = []; // 'any' used as you mentioned
        // 'unknown' is used for 'program'
        this._name = name; // added private access modifier
        this._program = program;
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "program", {
        // GET Program
        // const level = new Level("Level 1", "Program 1");
        // const program = level.program.toUpperCase(); -- ERROR
        get: function () {
            // 'unknown' is used for the return type of 'program'
            return this._program;
        },
        set: function (value) {
            this._program = value;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        //'Group' should be used
        this.groups.push(group);
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this.directionName = directionName;
        this.levelName = levelName;
        this._students = [];
    }
    Object.defineProperty(Group.prototype, "students", {
        //'Students' should be used
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.showPerformance = function () {
        var sortedStudents = this.students.sort(function (a, b) {
            return b.getPerformanceRating() - a.getPerformanceRating();
        });
        return sortedStudents;
    };
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = {};
        this.attendance = [];
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this.lastName, " ").concat(this.firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(" "), this.lastName = _a[0], this.firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this.birthYear;
        },
        set: function (value) {
            this.birthYear = new Date().getFullYear() - value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (subject, grade) {
        this.grades[subject] = grade;
    };
    Student.prototype.markAttendance = function (present) {
        this.attendance.push(present);
    };
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this.grades);
        if (gradeValues.length === 0)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = 0;
        if (this.attendance.length > 0) {
            attendancePercentage =
                (this.attendance.filter(function (present) { return present; }).length /
                    this.attendance.length) *
                    100;
        }
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
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

var Status;
(function (Status) {
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Active"] = 1] = "Active";
})(Status || (Status = {}));
var School = /** @class */ (function () {
    function School() {
        this._areas = [];
        this._lecturers = [];
    }
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    School.prototype.removeArea = function (areaName) {
        this._areas = this._areas.filter(function (area) { return area.name !== areaName; });
    };
    School.prototype.addLecturer = function (lecturer) {
        this._lecturers.push(lecturer);
    };
    School.prototype.removeLecturer = function (lecturerName) {
        this._lecturers = this._lecturers.filter(function (lecturer) { return lecturer.name !== lecturerName; });
    };
    return School;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (level) {
        this._levels.push(level);
    };
    Area.prototype.removeLevel = function (levelName) {
        this._levels = this._levels.filter(function (level) { return level.name !== levelName; });
    };
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroup = function (groupName) {
        this._groups = this._groups.filter(function (group) { return group.directionName !== groupName; });
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = [];
        this._status = Status.Inactive;
        this._directionName = directionName;
        this._levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "directionName", {
        get: function () {
            return this._directionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "levelName", {
        get: function () {
            return this._levelName;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.removeStudent = function (fullName) {
        this._students = this._students.filter(function (student) { return student.fullName !== fullName; });
    };
    Group.prototype.showPerformance = function () {
        return this._students.sort(function (a, b) {
            return b.getPerformanceRating() - a.getPerformanceRating();
        });
    };
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
        this._grades = [];
        this._visits = [];
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        set: function (value) {
            var _a = value.split(" "), firstName = _a[0], lastName = _a[1];
            this._firstName = firstName;
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "grades", {
        get: function () {
            return this._grades;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "visits", {
        get: function () {
            return this._visits;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (workName, mark) {
        this._grades.push({ workName: workName, mark: mark });
    };
    Student.prototype.setVisit = function (present) {
        this._visits.push(present);
    };
    Student.prototype.getPerformanceRating = function () {
        if (this._grades.length === 0)
            return 0;
        var averageGrade = this._grades.reduce(function (sum, grade) { return sum + grade.mark; }, 0) /
            this._grades.length;
        var attendanceCount = this._visits.filter(function (present) { return present; }).length;
        var attendancePercentage = (attendanceCount / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
var studentA = new Student("Max", "Rozh", 1997);
studentA.setGrade("Math", 90);
studentA.setGrade("English", 90);
studentA.setVisit(true);
var studentB = new Student("Ivan", "Ivanov", 1998);
studentB.setGrade("Math", 100);
studentB.setGrade("English", 100);
studentB.setVisit(false);
var group = new Group("Web", "Level 1");
[studentA, studentB].forEach(function (student) { return group.addStudent(student); });
console.log(group.showPerformance());

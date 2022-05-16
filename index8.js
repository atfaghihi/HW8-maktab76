function Student(name, gender) {
    this._name = name;
    this._gender = gender;
}

let studObj = new Student();
Student.prototype.age = 29;

alert(studObj.age);

let studObj2 = new Student();
let studObj1 = Object.getPrototypeOf(studObj2);
Student.prototype.age = 20;

alert(studObj1.age);
function Student(name,subject,age) {
    this.name = name;
    this.subject = subject;
    this.age = age;
    this.grade = 0.0;
    this.yearInCollege = 3;
    this.hasDegree = false;
    this.money = 0.0;
}
Student.prototype.upYear = function() {
    if(this.hasDegree == false && (this.yearInCollege >=1 && this.yearInCollege < 4) ) {
        this.yearInCollege++;
        if(this.yearInCollege == 4) {
            this.hasDegree = true;
            console.log("Studenta zavarshi!!");
        }
    }
}
Student.prototype.receiveScholarship = function(min,amount) {
    if(this.grade >= min && this.age < 30) {
        return this.money += amount;
    } else {        
         console.log("Nqmash stipendiq");
    }
}
function StudentGroup(groupSubject) {
    this.groupSubject = groupSubject;
    this.students = [];
    this.freePlaces = 5;
} 
StudentGroup.prototype.addStudent = function(student) {
    if(this.groupSubject == student.subject && this.freePlaces > 0) {
        this.freePlaces--;
        this.students.push(student);
    }
}
StudentGroup.prototype.emptyGroup = function() {
    this.freePlaces = 5;
    this.students = [];
}
StudentGroup.prototype.theBestStudentName = function() {
    var maxGrade = this.students[0].grade;
    for(var index = 0; index < this.students.length; index++) {
        if(this.students[index].grade > maxGrade) {
            maxGrade = this.students[index].grade;
            var studentName = this.students[index].name; 
        }
    }
    return studentName;
}
var grupa1 = new StudentGroup('JS2');
var student1 = new Student('Pencho','JS2',22);
var student2 = new Student('Gosho','JS2',30);
grupa1.addStudent(student1);
grupa1.addStudent(student2);
student1.grade = 5.00;
student2.grade = 5.10;
console.log(grupa1.theBestStudentName());

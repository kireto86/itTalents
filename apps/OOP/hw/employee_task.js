function Task(name,workingHours) {
    this.name = name;
    this.workingHours = workingHours;
}
function Employee(name) {
    this.name = name;
    this.currentTask = null;
    this.hoursLeft = 0;
}
Employee.prototype.work = function() {
    if(this.currentTask !== null) {
        if(this.hoursLeft >= this.currentTask.workingHours) {
            this.hoursLeft -= this.currentTask.workingHours;
            this.currentTask.workingHours = 0;
            this.showReport();
        } else {
            this.currentTask.workingHours -= this.hoursLeft;
            this.hoursLeft = 0;
            this.showReport();
        }
    }
}
Employee.prototype.showReport = function() {
    console.log(`Kazvam se ${this.name}, zadachatata mi e: ${this.currentTask.name} i chasovete koito mi stavat sa: ${this.hoursLeft} `);
    console.log("Po zadachata ostava: " + this.currentTask.workingHours);
}

var zadacha1 = new Task('reji',29);
var rabotnik1 = new Employee('penka');
rabotnik1.currentTask = zadacha1;
rabotnik1.hoursLeft = 19;
rabotnik1.work();
console.log(zadacha1.workingHours);
console.log(rabotnik1.hoursLeft);


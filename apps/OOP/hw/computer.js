function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
    this.year = year;
    this.price = price;
    this.isNotebook = isNotebook;
    this.hardDiskMemory = hardDiskMemory;
    this.freeMemory = freeMemory;
    this.operationSystem = operationSystem;

    this.changeOperationSystem = function (newOperationSystem) {
        this.operationSystem = newOperationSystem;
    }
    this.useMemory = function (memory) {
        if (this.freeMemory > memory) {
            this.freeMemory -= memory;
        } else {
            console.log("Not enough memory!");
        }
    }
}
Computer.prototype.comparePrice = function (computer) {
    if(this.price > computer.price) {
        return -1;
    } else  if(this.price < computer.price) {
        return 1;
    } else return 0;

}


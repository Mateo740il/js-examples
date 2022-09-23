function Cylinder(cylHeight, cylRadius) {
    this.cylHeight = cylHeight;
    this.cylRadius = cylRadius;
}

Cylinder.prototype.Volume = function () {
    return this.cylHeight * Math.PI * this.cylRadius * this.cylRadius;
};

let cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(2));
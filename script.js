var Triangle = /** @class */ (function () {
    function Triangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Triangle.prototype.getFuncArea = function () {
        return (1 / 2) * this.width * this.height;
    };
    Triangle.prototype.getFuncPerimeter = function () {
        var hypotenuse = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
        return this.width + this.height + hypotenuse;
    };
    return Triangle;
}());
var btnArea = document.getElementById("getArea");
var btnPerimeter = document.getElementById("getPerimeter");
btnArea.addEventListener('click', function () {
    var target_height = document.getElementById("height");
    var height = parseFloat(target_height.value);
    var target_width = document.getElementById("width");
    var width = parseFloat(target_width.value);
    var setArea = document.getElementById("area");
    var triangle = new Triangle(height, width);
    var resultArea = triangle.getFuncArea();
    setArea.value = resultArea.toString();
});
btnPerimeter.addEventListener('click', function () {
    var target_height = document.getElementById("height");
    var height = parseFloat(target_height.value);
    var target_width = document.getElementById("width");
    var width = parseFloat(target_width.value);
    var setPerimeter = document.getElementById("perimeter");
    var triangle = new Triangle(height, width);
    var resultPerimeter = triangle.getFuncPerimeter();
    setPerimeter.value = resultPerimeter.toString();
});

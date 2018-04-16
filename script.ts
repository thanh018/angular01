class Triangle {
    width: number;
    height: number;
    
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    public getFuncArea() {
        return (1/2)*this.width*this.height;
    }

    public getFuncPerimeter() {
        var hypotenuse = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
        return this.width + this.height + hypotenuse;
    }
}



var btnArea = document.getElementById("getArea");
var btnPerimeter = document.getElementById("getPerimeter");

btnArea.addEventListener('click', function() {
    var target_height = <HTMLInputElement>document.getElementById("height");
    var height = parseFloat(target_height.value);
    var target_width = <HTMLInputElement>document.getElementById("width");
    var width = parseFloat(target_width.value);

    var setArea = <HTMLInputElement>document.getElementById("area");
    var triangle = new Triangle(height, width);
    var resultArea = triangle.getFuncArea();
    setArea.value = resultArea.toString();
    
});

btnPerimeter.addEventListener('click', function() {
    var target_height = <HTMLInputElement>document.getElementById("height");
    var height = parseFloat(target_height.value);
    var target_width = <HTMLInputElement>document.getElementById("width");
    var width = parseFloat(target_width.value);

    var setPerimeter = <HTMLInputElement>document.getElementById("perimeter");
    var triangle = new Triangle(height, width);
    var resultPerimeter = triangle.getFuncPerimeter();
    setPerimeter.value = resultPerimeter.toString();
});


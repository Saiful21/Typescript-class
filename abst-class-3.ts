/***********************example 3 visibility*****************************/

abstract class Shape {
    private shapeName: string;

    constructor(name: string) {
        this.shapeName = name;
    }

    public draw(): void {
        console.log("pre drawing " + this.shapeName);
        this.drawShape();
    }
   //abstract method
    protected abstract drawShape();
}

class Square extends Shape {
    private _length: number;

    constructor(name: string, length: number) {
        super(name);
        this._length = length;
    }

    //super class abstract methods
    protected drawShape() {
        console.log("drawing square with length "+this._length);
    }
}

let shape: Shape = new Square("saure", 5 );
shape.draw();
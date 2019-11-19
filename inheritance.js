class Shape{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    area(){
        return this.width * this.height;
    }
}

class Square extends Shape{
    constructor(height, width){
        super(height, width);
    }

    isSquare(){
        return this.height === this.width;
    }
}

let sq = new Square(10, 10);
console.log(sq);
console.log(sq.isSquare());
console.log(sq.area());

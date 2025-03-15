class Rectangle001 {
    constructor(
        protected width: number,
        protected height: number
    ) {}

    public setWidth(width: number) {
        this.width = width;
    }

    public setHeight(height: number) {
        this.height = height;
    }

    public area(): number {
        return this.width * this.height;
    }
}

class Square001 extends Rectangle001 {
    public setWidth(width: number) {
        this.height = width;
        this.width = width;
    }

    public setHeight(height: number) {
        this.width = height;
        this.height = height;
    }
}

function resizeRectangle(rect: Rectangle001) {
    rect.setWidth(5);
    rect.setHeight(5);
    console.log(rect.area());
}

const rect001 = new Rectangle001(2, 3);
const square001 = new Square001(4, 4);

resizeRectangle(rect001);
resizeRectangle(square001);
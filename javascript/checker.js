class Checker {
    constructor(color) {
        this.color = color;
        this.king = false;
    }

    becomeKing() {
        this.king = true;
    }

    moveForward(direction) {

    }

    moveBackward(direction) {
        if(this.king) {
            
        }
    }

}

export default Checker;
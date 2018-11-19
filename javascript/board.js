class Board {

    constructor() {
        this.createGrid();

    }

    createGrid() {
        let a = [];
        for (let i=0; i<10; i++) {
            a.push(new Array(10).fill(0))
        }

        this.grid = a;
    }
}
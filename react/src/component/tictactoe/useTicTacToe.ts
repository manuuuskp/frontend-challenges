function useTicTacToe() {
    const winArr = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    function checkWin(checkdArr: number[]): boolean {
        return winArr.some(arr => arr.every(item => checkdArr.includes(item)));
    }

    function checkDraw(circleArr: number[], crossArr: number[]) :boolean {
        return circleArr.length + crossArr.length === 9;
    }

    return {
        checkWin,
        checkDraw
    }
}

export { useTicTacToe };
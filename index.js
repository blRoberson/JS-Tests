function main() {
    console.log(`Hello, write in the console "traingle()" if you want to see a triangle. Write "fizzBuzz()" if you want to see fizz and Buzz every 3 and 5 spots respectively.`)
    console.log(`If you want to show the chess board. Type in the cmd line "chessBoard()" with whatever number of cols and rows you want in the ().`);
    console.log(`Sad part is, it only shows the first row and places the number of rows on the left in a circle...`)
}

main();

function fizzBuzz() {
    for(let count = 0; count <= 100; count++) {
        if (count % 3 == 0 && count % 5 != 0) {
            console.log("Fizz");
        }
        else if (count % 5 == 0 && count % 3 != 0) {
            console.log("Buzz");
        }
        else if (count % 5 == 0 && count % 3 == 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log(count);
        }
    }
}

function triangle(){
    let text = '';
    for (let count = 0; count <= 7; count++) {
        text += "#";
        console.log(text);
    }
}


function chessBoard(numPerLine) {
    let fullChessBoard = ''; // Reset for each row
    for(let i = 0; i < numPerLine; i++) {
        let chessColIndex = 0; // Reset for each row
        while(chessColIndex < numPerLine) {
            if (chessColIndex % 2 == 0) {
                fullChessBoard += '#';
            }
            else if (chessColIndex % 2 != 0) {
                fullChessBoard += ' ';
            }
            chessColIndex += 1;
        }
        fullChessBoard += "\n";
    }
    console.log(fullChessBoard);
}


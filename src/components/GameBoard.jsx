const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export function Gameboard () {
    return <ol id="game-board">

            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSimbol, colIndex) => (
                            <li key={colIndex}>
                                <button>{playerSimbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}


    </ol>
}
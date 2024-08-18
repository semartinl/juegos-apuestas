
const funciones = {
    crearTableroAleatorio: function(rows, columns, numMines){
        let tablero = new Array(rows).fill(Array(columns).fill(0))
        console.log(`Minas a poner en el tablero: ${numMines}`)
        for(let i= 0; i< numMines;i++){
            let x = Math.round(Math.random() * (rows-1))
            let y = Math.round(Math.random() * (columns-1))
            // do {
            //      x = Math.round(Math.random() * (rows-1))
            //      y = Math.round(Math.random() * (columns-1))
            //     console.log(tablero[x][y] )
            //     console.log(tablero)
            //     console.log(i)
            //     console.log(`VARIABLE X: ${x}`)
            //     console.log(`VARIABLE Y: ${y}`)
                
            // } while (tablero[x][y]==1);

            tablero[x][y] = 1
        }
        console.log(tablero)
        return tablero
    }
}
export default funciones;
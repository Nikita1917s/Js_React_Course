import Observable from "./Observer"
import Place from "./Place"

const observable = new Observable();
const cinemaInner = document.querySelector('.cinema__inner');
const purchaseBtn = document.querySelector('.purchase');

// Set correct row numeration 
let rowsNumber = 0;

class CinemaHall {
    constructor() {
        this.cart = [];
    }

    render({
        type,
        rows,
        places,
        priceList
    }) {

        // Crate rows
        for (let i = 1; i < rows + 1; i++) {
            let nodeRow = document.createElement('ul')
            nodeRow.classList.add("seats__list")
            rowsNumber++

            //Create places
            for (let j = 0; j < places; j++) {
                const place = new Place(type, rowsNumber, j + 1, nodeRow, priceList)
                place.render()
            }
            cinemaInner.appendChild(nodeRow)
        }
    }
}

export default new CinemaHall()


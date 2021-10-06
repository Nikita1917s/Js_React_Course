import Observable from "./Observer"
import Place from "./Place"
// let observable = new Observable();
// let addToCart = new Observer( ({cart, item}) => {
// });
//observable.addObserver(addToCart);

const cinemaInner = document.querySelector('.cinema__inner')
// Set correct row numeration 
let rowsNumber = 0;

export default class CinemaHall {
    constructor({
        type,
        rows,
        places,
        priceList
    }) {
        this.type = type;
        this.rows = rows;
        this.places = places;
        this.priceList = priceList;
        this.cart = [];
        this.ordered = [];
    }

    render() {

        // Crate rows
        for (let i = 1; i < this.rows + 1; i++) {
            let nodeRow = document.createElement('ul')
            nodeRow.classList.add("seats__list")
            rowsNumber++

            //Create places
            for (let j = 0; j < this.places; j++) {
                const place = new Place(this.type, rowsNumber, j+1, nodeRow, this.priceList)
                place.render()
                console.log(place)
            }
            cinemaInner.appendChild(nodeRow)
        }
    }
}
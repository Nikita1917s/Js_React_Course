// import Observable from "./Observer"
import {Observable, Observer} from "./Observer"
import Ticket from "./Ticket"

let observable = new Observable();
let addToCart = new Observer( ({cart, item}) => {
});

const purchase = document.querySelector('.purchase')
export let selectedTickets = []
export let totalPrice = 0;

export default class Place {
    constructor(type, row, number, parentNode, price) {
        this.type = type;
        this.row = row;
        this.number = number;
        this.parentNode = parentNode;
        this.price = price;
    }
    render() {

        // Render the Ticket
        let node = document.createElement('li');
        node.classList.add('seat', `${this.type}`)
        node.setAttribute('id', `${this.row}-${this.number}`)
        this.parentNode.appendChild(node)
        node.addEventListener('click', (() => {
            // Add to observer 
            observable.addObserver(`${this.row}-${this.number}`);

            // Check if the Ticket is available
                        if (this.isCheckCard(`${this.row}-${this.number}`)) {
                            this.checkIsActive(`${this.row}-${this.number}`)
                            new Ticket(this.type, this.row, this.number, this.price, this).render()
                            node.classList.toggle('booked')
                        } 
                    
        }))
    }

    //Set Total price of the tickets
    setPrices(block, Plus) {
        (Plus) ? totalPrice += this.price: totalPrice -= this.price
        if (totalPrice > 0) {
            block.innerHTML = `Buy Ticket ||  Total price is: ${totalPrice}$`
        } else {
            block.innerHTML = `Please select a ticket`
        }
    }

    //Check if Elemnt exists 
    isCheckCard(id) {
        return selectedTickets.findIndex((element) => {
            return (id == element.id)
        })
    }

    //Add or Remove ticket
    checkIsActive(id) {
        if (this.isCheckCard(id) === -1 ) {
            this.addToCard(id);
        } else {
            this.removeToCard(this.isCheckCard(id));
        }
    }

    //Add ticker to array
    addToCard(id) {
        if (this.isCheckCard(id)) {
            selectedTickets.push({
                id: `${this.row}-${this.number}`,
                row: this.row,
                number: this.number,
                price: this.price
            })
            this.setPrices(purchase, true)
        }
    }

    //Remove ticker to array
    removeToCard(beAddedIndex) {
        selectedTickets.splice(beAddedIndex, 1)
        this.setPrices(purchase, false)
    }
}
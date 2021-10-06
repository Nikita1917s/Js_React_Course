const infoList = document.querySelector('.info__list')
import {Place, selectedTickets}  from "./Place"
import totalPrice from "./Place"

export default class Ticket {
    constructor(type, row, number, price, Place) {
        this.type = type;
        this.row = row;
        this.number = number;
        this.price = price;
        this.outerPlace = Place;
    }

    render() {

        // Crate a ticket
        let node = document.createElement('li');
        node.classList.add(`${this.type}`)
        node.setAttribute("id", `${this.row}-${this.number}`)
        node.innerHTML = `
        <div class = "row">Row ${this.row}</div> 
        <div class = "place">Seat ${this.number}</div> 
        <div class = "price">Price ${this.price}</div> 
        <div class = "close"></div> `
        infoList.appendChild(node)

        // Delete the ticket from list + Make available
        let closeBtn = node.querySelector('.close')
        closeBtn.addEventListener('click', (() => {
            document.querySelector(`.cinema__inner [id = '${this.row}-${this.number}']`).classList.remove('booked')
            this.outerPlace.checkAll(`${this.row}-${this.number}`)
            node.remove();
        }))
    }
}
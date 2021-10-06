const infoList = document.querySelector('.info__list')
import {observable}  from "./Place"

export default class Ticket {
    constructor({id, type, row, number, price}) {
        this.id = id;
        this.type = type;
        this.row = row;
        this.number = number;
        this.price = price;
    }

    render() {

        // Crate a ticket
        let node = document.createElement('li');
        node.classList.add(`${this.type}`)
        node.setAttribute("id", this.id)
        node.innerHTML = `
        <div class = "row">Row ${this.row}</div> 
        <div class = "place">Seat ${this.number}</div> 
        <div class = "price">Price ${this.price}</div> 
        <div class = "close"></div>`
        infoList.appendChild(node)

        // Delete the ticket from list + Make available
        let closeBtn = node.querySelector('.close')
        closeBtn.addEventListener('click', (() => {
            document.querySelector(`.cinema__inner [id = '${this.id}']`).classList.remove('booked')
            observable.checkIsActive(this)
            node.remove();
        }))
    }
}
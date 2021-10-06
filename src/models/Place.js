import Observable from "./Observer"
import Ticket from "./Ticket"

let observable = new Observable();
export {
    observable
}
const purchaseBtn = document.querySelector('.purchase')

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
            let ticketObj = {
                id: `${this.row}-${this.number}`,
                type: this.type,
                row: this.row,
                number: this.number,
                price: this.price,
            }

            // Check if the Ticket is available
            if (observable.isCheckCard(ticketObj.id) == -1) {
                observable.checkIsActive(ticketObj)

                // Add ticket to the list
                new Ticket(ticketObj).render()
                node.classList.toggle('booked')
            }
        }))
    }
}

purchaseBtn.addEventListener('click', (() => (
    alert(`Total Price is: ${observable.getPrice()} $`)
)))

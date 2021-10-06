import CinemaHall from "./CinemaHall"
const purchaseBtn = document.querySelector('.purchase')
function Observable() {

    //Save array of tickets
    const observers = [];
    let totalPrice = 0;

    //Check if Elemnt exists 
    this.isCheckCard = function (id) {
        return observers.findIndex((element) => {
            return (id == element)
        })
    };

    //Add or Remove ticket
    this.checkIsActive = function (obj) {
        if (this.isCheckCard(obj.id) == -1) {
            this.addToCard(obj);
        } else {
            this.removeToCard(this.isCheckCard(obj.id), obj.price);
        }
    }

    //Add ticker to array
    this.addToCard = function (obj) {
        observers.push(obj.id)
        CinemaHall.cart.push(obj)

        //Share price
        this.setPrices(obj.price, true)
    }

    //Remove ticker to array
    this.removeToCard = function (beRemovedIndex, price) {
        observers.splice(beRemovedIndex, 1)
        CinemaHall.cart.splice(beRemovedIndex, 1)

        //Share price
        this.setPrices(price, false)
    }

    //Set Total price of tickets
    this.setPrices = function (sum, addition) {
        (addition) ? totalPrice += sum: totalPrice -= sum

        //Set price
        if (totalPrice > 0) {
            purchaseBtn.innerHTML = `Buy Ticket ||  Total price is: ${totalPrice}$`
        } else {
            purchaseBtn.innerHTML = `Please select a ticket`
        }
    };

    // Get Total price
    this.getPrice = () => totalPrice;
}

export default Observable;
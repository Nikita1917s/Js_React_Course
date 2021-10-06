import CinemaHall from "./CinemaHall"
const init = () => {
fetch("https://api.json-generator.com/templates/qfcdy9PY6BXg/data", {
    headers: {
        "Authorization": "Bearer l1737urprsaipr94vveqst9hilomyn2vdo4y8g1d"
    }
    })
    .then(res => res.json())
    .then( data => data.forEach(elem => new CinemaHall(elem).render()))
}
export default init;

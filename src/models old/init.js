import CinemaHall from "./CinemaHall"
const init = () => {
fetch("https://api.json-generator.com/templates/qfcdy9PY6BXg/data", {
    headers: {
        "Authorization": "Bearer 1c3c65oqasxfmgg0jpzoyn2pbxpdxk43ui60pfpc"
    }
    })
    .then(res => res.json())
    .then(data => data.forEach(elem => new CinemaHall(elem).render()))
}
export default init;
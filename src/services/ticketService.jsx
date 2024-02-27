export const getAllTickets = () => {
    return fetch("http://localhost:1338/serviceTickets")
    .then((response) => response.json())

}
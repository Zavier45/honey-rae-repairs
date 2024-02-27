import { useEffect, useState } from "react"
import {getAllTickets} from "./services/ticketService.jsx"
import "./index.css"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
    })
  }, [])

  
  return (
    <div className="tickets-container">
    <h2>Tickets</h2>
    <div>
      <button className="filter-btn btn-primary" onClick={() => {
        setShowEmergencyOnly(true)
      }}>Emergency</button>
    </div>
    <div>
      <button className="filter-btn btn-secondary" onClick={() => {
        setShowEmergencyOnly(false)
      }}>Show All</button>
    </div>
    <article className="tickets">
      {allTickets.map(ticket => {
        return (
          <section className="ticket" key={ticket.id}>
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>
          </section>
        )
      })}
    </article>
  </div>
  )
}
  


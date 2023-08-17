import { useState, useEffect } from 'react';
import Navbar from '../Components/navbar';
import Title from '../Components/title';
import '../styles/inbox.css';

function TicketInbox() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:4000/home');
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  return (
    <div className="ticket-inbox">
      <Navbar />
      <Title />
      <h1>Ticket Inbox</h1>
      <h2>Unread Messages</h2>
      <ul className="ticket-list">
        {tickets.map((ticket) => (
          ticket.unread && (
            <li key={ticket.id} className="ticket">
              <div className="ticket-title">{ticket.title}</div>
              <div className="ticket-status">{ticket.status}</div>
            </li>
          )
        ))}
      </ul>
      <h2>All Messages</h2>
      <ul className="ticket-list">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="ticket">
            <div className="ticket-title">{ticket.title}</div>
            <div className="ticket-status">{ticket.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketInbox;

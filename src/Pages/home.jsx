import Navbar from "../Components/navbar";
import Title from "../Components/title";
import '../styles/home.css'
import TicketCount from "../Components/ticketCount";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { useEffect, useState } from "react";

function Home() {
    const [tickets, setTickets] = useState([]);

    const fetchTickets = async () => {
        try {
            const response = await fetch("http://localhost:4000/home");
            const data = await response.json();
            setTickets(data);
        }
        catch (error) {
            console.log(error);
        }
    };

    const CountByStatus = {
        "Initiated": 0,
        "In Progress": 0,
        "Pending": 0,
        "Forwarded": 0,
        "Rejected": 0,
        "Closed": 0,
        "Inbox": 0,
    };


    tickets.forEach((ticket) => {
        CountByStatus[ticket.status] += 1;
    });

    useEffect(() => {
        fetchTickets();
    }, []);

    return (
        <>
        <Navbar />
        <Title/>
        <h1>Welcome to Tracking Management System</h1>
        <div className="ticket-count-section">
            {
                Object.keys(CountByStatus).map((status) => (
                    <TicketCount key={status} status={status} count={CountByStatus[status]} />
                ))
            }
        
        </div>
        <h2>Detailed Status of Tickets</h2>
        <div className="ticket-details-section">
                <h3>Ticket Details</h3>
                <TableContainer component={Paper}>
                    <Table className="ticket-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Initiated By</TableCell>
                                <TableCell>Forwarded To</TableCell>
                                <TableCell>Due Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tickets.map((ticket) => (
                                <TableRow key={ticket.ticket_id}>
                                    <TableCell>{ticket.title}</TableCell>
                                    <TableCell>{ticket.description}</TableCell>
                                    <TableCell>{ticket.status}</TableCell>
                                    <TableCell>{ticket.initiated_by}</TableCell>
                                    <TableCell>{ticket.Forwarded_To}</TableCell>
                                    <TableCell>{ticket.due_date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
    }

export default Home;
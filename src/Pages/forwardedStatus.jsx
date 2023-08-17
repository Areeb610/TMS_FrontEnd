import { Box, Typography, List, ListItem, ListItemText, Button, Collapse, Paper } from '@mui/material';
import { styled } from '@mui/system'; // Use @mui/system
import Navbar from '../Components/navbar';
import Title from '../Components/title';
import { useState, useEffect } from 'react';

const DetailedText = styled(Paper)({
  marginTop: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
});

function InitiateStatus() {
  const [initiatedTickets, setInitiatedTickets] = useState([]);
  const [expandedTicketId, setExpandedTicketId] = useState(null);

  useEffect(() => {
    fetchInitiatedTickets();
  }, []);

  const fetchInitiatedTickets = async () => {
    try {
      const response = await fetch('http://localhost:4000/forwardedTicket');
      const data = await response.json();
      console.log('Initiated tickets:', data);
      setInitiatedTickets(data);
    } catch (error) {
      console.error('Error fetching initiated tickets:', error);
    }
  };

  const handleDetailsClick = (ticketId) => {
    setExpandedTicketId(ticketId === expandedTicketId ? null : ticketId);
  };

  return (
    <div>
      <Navbar />
      <Title />
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Forwarded Tickets
        </Typography>
        <List>
          {initiatedTickets.map((ticket) => (
            <div key={ticket.id}>
              <ListItem>
                <ListItemText primary={ticket.title} secondary={`Forward To: ${ticket.Forwarded_To}`} />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDetailsClick(ticket.id)}
                >
                  Details
                </Button>
              </ListItem>
              <Collapse in={expandedTicketId === ticket.id}>
                <DetailedText>
                  <Typography variant="subtitle1"><strong>Title:</strong></Typography>
                  <Typography>{ticket.title}</Typography>
                  <Typography variant="subtitle1"><strong>Description:</strong></Typography>
                  <Typography>{ticket.description}</Typography>
                  <Typography variant="subtitle1"><strong>Forwarded To:</strong></Typography>
                  <Typography>{ticket.Forwarded_To}</Typography>
                  <Typography variant="subtitle1"><strong>Status:</strong></Typography>
                  <Typography>{ticket.status}</Typography>
                  <Typography variant="subtitle1"><strong>Due Date:</strong></Typography>
                  <Typography>{ticket.due_date}</Typography>
                </DetailedText>
              </Collapse>
            </div>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default InitiateStatus;

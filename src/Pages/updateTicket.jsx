import { useState, useEffect } from 'react';
import Navbar from '../Components/navbar';
import Title from '../Components/title';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  TextField,
    MenuItem,
} from '@mui/material';

function UpdateTicketPage() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [forwardedTo, setForwardedTo] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');
  const [ticketId, setTicketId] = useState('');
    const [isLoading, setIsLoading] = useState(false);


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

  const handleOpenDialog = (ticket) => {
    setSelectedTicket(ticket);
    setOpenDialog(true);
    setForwardedTo(ticket.Forwarded_To);
    setComment('');
    setStatus(ticket.status);
    setTicketId(ticket.ticket_id);
  };
  

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdateTicket = async () => {
    try {
      setIsLoading(true); 
  
      const updateData = {
        ticketId, 
        forwardedTo,
        comment,
        status,
      };
  
      // Make PUT request to update ticket
      const response = await fetch('http://localhost:4000/updateTicket', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
  
      if (response.status === 200) {
        console.log('Ticket updated successfully');
        setOpenDialog(false);
        fetchTickets(); 
      } else {
        console.error('Error updating ticket');
      }
    } catch (error) {
      console.error('Error updating ticket:', error);
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  };
  
  return (
    <div>
    <Navbar />
    <Title />
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Initiated By</TableCell>
            <TableCell>Forwarded To</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.ticket_id}>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleOpenDialog(ticket)}>
                  Update
                </Button>
              </TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>{ticket.initiated_by}</TableCell>
              <TableCell>{ticket.Forwarded_To}</TableCell>
              <TableCell>{ticket.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
      <DialogTitle>Update Ticket</DialogTitle>
      <DialogContent>
        <Select
          label="Forwarded To"
          value={forwardedTo}
          onChange={(e) => setForwardedTo(e.target.value)}
          fullWidth
          margin="dense"
        >
         <MenuItem value="">Select Department</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Store">Store</MenuItem>
            <MenuItem value="TST">TST</MenuItem>
            <MenuItem value="NFC">NFC</MenuItem>


          
        </Select>
        <TextField
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          margin="dense"
        />
        <Select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          fullWidth
          margin="dense"
        >
          {/* Dropdown options for Status */}
            <MenuItem value="">Select Status</MenuItem>
            <MenuItem value="Initiated">Initiated</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Forwarded">Forwarded</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
            
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleUpdateTicket} color="primary" disabled={!forwardedTo || !status}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}

export default UpdateTicketPage;

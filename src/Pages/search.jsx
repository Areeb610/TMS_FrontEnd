import { TextField, Button, Typography, Box, Select, MenuItem, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import Navbar from '../Components/navbar';
import Title from '../Components/title';
import '../styles/search.css'; // Import your custom CSS for styling

function SearchPage() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('title'); // Default filter category
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:4000/home');
      const data = await response.json();
      setTickets(data);
      setFilteredTickets(data); // Initially, show all tickets
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleSearch = async () => {
    setIsLoading(true); // Set loading state to true
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = tickets.filter((ticket) => {
      const value = ticket[searchCategory].toLowerCase();
      return value.startsWith(lowerCaseSearchTerm);
    });
    setFilteredTickets(filtered);
    setIsLoading(false); // Set loading state back to false
  };

  return (
    <div className="search-page">
      <Navbar />
      <Title />
      <Box sx={{ textAlign: 'center', margin: '20px' }}>
        <Typography variant="h4">Search Tickets</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
          <TextField
            id="search-ticket"
            label="Search Ticket"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginRight: '10px' }}
          />
          <Select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="initiated_by">Name</MenuItem>
            <MenuItem value="Forwarded_To">Department</MenuItem>
            <MenuItem value="status">Status</MenuItem>
          </Select>
          <Button variant="contained" color="primary" onClick={handleSearch} style={
            {
              marginLeft: '10px',
            }
          }>
            Search
          </Button>
        </Box>
      </Box>
      <div className="ticket-results">
        {filteredTickets.length === 0 && isLoading && (
          <div className="loading-spinner">
            <CircularProgress size={40} style={{ color: 'blue' }} />
          </div>
        )}
        {filteredTickets.map((ticket) => (
          <div key={ticket.ticket_id} className="ticket-item">
            <Typography variant="body1" className="ticket-details">
              <strong>Title:</strong> {ticket.title} <br />
              <strong>Name:</strong> {ticket.initiated_by} <br />
              <strong>Department:</strong> {ticket.Forwarded_To} <br />
              <strong>Status:</strong> {ticket.status} <br />
              <strong>Due Date:</strong> {ticket.due_date}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;

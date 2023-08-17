import { useState } from 'react';
import Navbar from '../Components/navbar';
import Title from '../Components/title';
import '../styles/initiateTicket.css';

function InitiateTicket() {
  const [ticketName, setTicketName] = useState('');
  const [comments, setComments] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Initiated');
  const [forwardTo, setForwardTo] = useState('');
  const [duedate, setDuedate] = useState('');

  const handleTicketSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/newTicket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: ticketName,
          description: comments,
          status: selectedStatus,
          initiated_by: "Operations",
          due_date: duedate,
          department: selectedDepartment,
          forwardedTo: forwardTo,
        }),

      });

      const data = await response.json();
      console.log(data.message); // This will show the success/error message
    } catch (error) {
      console.error('Error submitting ticket:', error);
    }

    setTicketName('');
    setComments('');
    setSelectedDepartment('');
    setSelectedStatus('Initiated');
    setForwardTo('');
    setDuedate('');


  };

  return (
    <>
      <Navbar />
      <Title />
      <div className="initiate-ticket">
        <h2>Initiate New Ticket</h2>
        <form>
          <div className="form-group">
            <label>Ticket Name:</label>
            <input
              type="text"
              value={ticketName}
              onChange={(e) => setTicketName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Comments:</label>
            <input
              type="text"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value="Operations">Operations</option>
              <option value="NFC">NFC</option>
              <option value="TST">TST</option>
              <option value="HR">HR</option>
              <option value="Admin">Admin</option>
              <option value="Store">Store</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="Initiated">Initiated</option>
              <option value="Pending">Pending</option>
              <option value="Forwarded">Forwarded</option>
              <option value="Rejected">Rejected</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="form-group">
            <label>Forwarded To:</label>
            <select
              value={forwardTo}
              onChange={(e) => setForwardTo(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value ="Operations">Operations</option>
              <option value="NFC">NFC</option>  
              <option value="TST">TST</option>
              <option value="HR">HR</option>
              <option value="Admin">Admin</option>
              <option value="Store">Store</option>
            </select>
          </div>
          <div className="form-group">
            <label>Due Date:</label>
            <input
              type="date"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
            />
          </div>

          <button type="button" onClick={handleTicketSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default InitiateTicket;

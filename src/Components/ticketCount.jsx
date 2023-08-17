import '../styles/ticketCount.css'
import PropTypes from 'prop-types';
function TicketCount({ status, count }) {
  var color = status === 'Pending' ? '#FFD700' : status === 'Forwarded' ? '#008000' :  status === 'In Progress' ? '#FFA500' : status === 'Rejected' ? '#FF0000' : status === 'Initiated' ? '#FF0000' : status === 'Closed' ? '#AA3222' : '#FF2122';
  return (
    <div className="ticket-count-box" style={{ backgroundColor: color }}>
      <div className="count">{count}</div>
      <div className="status">{status}</div>
    </div>
  );
}
TicketCount.propTypes = { 
    status: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    };

TicketCount.defaultProps = {
  count : 0,
};

export default TicketCount;

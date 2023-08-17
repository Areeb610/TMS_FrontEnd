import '../styles/title.css'
import { Link } from 'react-router-dom';
function Title() {
    return (
      <div>
        <nav className="secondary-navbar">
          <ul className="status-links">
            <Link to = "/initiateTicket" className = "status-link">New</Link>
            <Link to = "/initiateStatus" className = "status-link">Initiated</Link>
            <Link to = "/pendingStatus" className = "status-link">Pending</Link>
            <Link to = "/forwardStatus" className = "status-link">Forwarded</Link>
            <Link to = "/rejectStatus" className = "status-link">Rejected</Link>
            <Link to = "/closeStatus" className = "status-link">Closed</Link>
            <Link to = "/inbox" className = "status-link">Inbox</Link>
            <Link to= "/search" className = "status-link">Search</Link>
            <Link to = "/updateTicket" className = "status-link">Update</Link>



          </ul>
        </nav>
      </div>
    );
  }

export default Title;
  
import Login from "./Pages/login"
import Home from "./Pages/home"
import InitiateTicket from "./Pages/initiateTicket"
import InitiateStatus from "./Pages/initiateStatus"
import ForwardStatus from "./Pages/forwardedStatus"
import RejectedStatus from "./Pages/rejectedStatus"
import ClosedStatus from "./Pages/closedStatus"
import PendingStatus from "./Pages/pendingStatus"
import TicketInbox from "./Pages/inbox"
import SearchPage from "./Pages/search"
import UpdateTicketPage from "./Pages/updateTicket"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home}/>
        <Route exact path="/initiateTicket" component={InitiateTicket}/>
        <Route exact path="/initiateStatus" component={InitiateStatus}/>
        <Route exact path="/forwardStatus" component={ForwardStatus}/>
        <Route exact path="/rejectStatus" component={RejectedStatus}/>
        <Route exact path="/closeStatus" component={ClosedStatus}/>
        <Route exact path="/pendingStatus" component={PendingStatus}/>
        <Route exact path="/inbox" component={TicketInbox}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/updateTicket" component={UpdateTicketPage}/>
      </Switch>
    </Router>
  )
}

export default App

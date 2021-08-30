import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, StreamingHistory } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/streaminghistory" exact component={() => <StreamingHistory />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

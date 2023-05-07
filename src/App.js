import './App.css';
import Nav from './components/Nav'
import Intro from './components/Intro';
import Pricing from './components/Pricing';
import Glance from './components/Glance';
import Reviews_list from './components/Reviews_list';
import Contact_form from './components/Contact_form';
function App() {
  return (
    <div className="App">
<Nav></Nav>
<Intro/>
<Pricing></Pricing>
<Glance></Glance>
<Reviews_list></Reviews_list>
<Contact_form></Contact_form>
    </div>
  );
}

export default App;

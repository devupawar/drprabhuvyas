
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'; 
import Treatment from './Treatment';
import ContactUs from './ContactUs';
import Languageselector from './LanguageSelector'
import './i18n';
import Certificate from './Certificate';

function App() {

  return (
    <div className="App">
      <Languageselector/>
     <Home/>
     <Treatment/>
     <Certificate/>
     <ContactUs/>
    </div>
  );
}

export default App;

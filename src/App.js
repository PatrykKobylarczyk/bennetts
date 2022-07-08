import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app w-full">
      <Header/>
      <Main/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

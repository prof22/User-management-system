import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import HomePage from './component/pages/HomePage';
import AboutUsPage from './component/pages/AboutUsPage';
import ContactUsPage from './component/pages/ContactUsPage';
import NavBar from './component/layout/Navbar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <HomePage />
      <AboutUsPage />
      <ContactUsPage />
    </div>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { getI18n } from 'react-i18next';
import Pages from './Pages/Content';
const renderLoader = () => <p>Loading</p>;
function App() {
  const i18n = getI18n();
  return (
    <Suspense fallback={renderLoader()}>
      <Router>
        <Navbar />
      </Router>
    </Suspense>
  );
}

export default App;

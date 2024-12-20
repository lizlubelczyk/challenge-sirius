import './App.css';
import Home from "./pages/Home/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import TweetDetail from "./pages/TweetDetail/TweetDetail";
import {useState} from "react";
import LargeSidebar from "./components/navigation/Sidebar/LargeSidebar";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const changeMode = () => {
        setDarkMode(!darkMode);
    }
  return (
    <Router>
      <div className={`content ${darkMode ? 'dark-mode' : ''}`} >
          <div className="sidebar">
              <LargeSidebar changeMode={changeMode} darkMode={darkMode}/>
          </div>
        <Routes>
          <Route path="/" exact element={<Home darkMode={darkMode} changeMode={changeMode}/>} />
          <Route path="/tweetDetail/:tweetId" element={<TweetDetail darkMode={darkMode} changeMode={changeMode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

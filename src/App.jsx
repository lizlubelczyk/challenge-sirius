import './App.css';
import Home from "./screens/Home/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import TweetDetail from "./screens/tweetDetail/TweetDetail";
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const changeMode = () => {
        setDarkMode(!darkMode);
    }
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home darkMode={darkMode} changeMode={changeMode}/>} />
          <Route path="/tweetDetail/:tweetId" element={<TweetDetail darkMode={darkMode} changeMode={changeMode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

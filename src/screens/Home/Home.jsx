import LargeSidebar from "../../Components/Navigation/Sidebar/LargeSidebar/LargeSidebar";
import Tab from "../../Components/Navigation/Tab/Tab";
import "./Home.scss"
import tweets from '../../resources/tweets (2).json';
import Tweet from "../../Components/Tweet/Tweet/Tweet";
import { useNavigate } from "react-router-dom";

export default function Home({darkMode, changeMode}){
    const navigate = useNavigate();

    const handleClickTweet = (tweet) => {
        navigate(`/tweetDetail/${tweet.id}`);
    }

    return(
        <div className={`home-page ${darkMode ? 'dark-mode' : ''}`}>
            <div className="sidebar-container">
                <LargeSidebar  changeMode={changeMode} darkMode={darkMode}/>
            </div>
            <div className="feed-container">
                <div className="title">
                    Home
                </div>
                <div className="tabs">
                    <Tab title={"For you"} active={true} darkMode={darkMode}/>
                    <Tab title={"Following"} active={false} darkMode={darkMode}/>
                </div>
                <div className="feed">
                    {tweets.map(tweet => (
                        <Tweet key={tweet.id} tweet={tweet} onClick={() => handleClickTweet(tweet)} darkMode={darkMode}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
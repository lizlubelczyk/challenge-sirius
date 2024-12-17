import LargeSidebar from "../Components/Navigation/Sidebar/LargeSidebar/LargeSidebar";
import Tab from "../Components/Navigation/Tab/Tab";
import "./Home.scss"
import tweets from '../resources/tweets (2).json';
import Tweet from "../Components/Tweet/Tweet/Tweet";

export default function Home(){

    return(
        <div className="home-page">
            <div className="sidebar-container">
                <LargeSidebar />
            </div>
            <div className="feed-container">
                <div className="title">
                    Home
                </div>
                <div className="tabs">
                    <Tab title={"For you"} active={true}/>
                    <Tab title={"Following"} active={false}/>
                </div>
                <div className="feed">
                    {tweets.map(tweet => (
                        <Tweet key={tweet.id} tweet={tweet}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
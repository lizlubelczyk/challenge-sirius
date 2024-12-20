import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../../components/navigation/Tabs/Tabs';
import Tweet from '../../components/tweet/Tweet/Tweet';
import Suggestions from '../../components/suggestions/Suggestions/Suggestions';
import SearchBar from '../../components/input/textfield/Search/SearchBar';
import { fetchTweets } from '../../services/TweetService';
import { fetchUsers } from '../../services/UserService';
import './Home.scss';

export default function Home({ darkMode }) {
    const navigate = useNavigate();
    const [tweets, setTweets] = useState([]);
    const [users, setUsers] = useState([]);
    const [activeTab, setActiveTab] = useState('For you');

    useEffect(() => {
        const getTweets = async () => {
            const response = await fetchTweets();
            if (response.success) {
                setTweets(response.data);
            }
        };
        getTweets();
    }, []);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetchUsers();
            if (response.success) {
                setUsers(response.data);
            }
        };
        getUsers();
    }, []);

    const handleClickTweet = (tweet) => {
        navigate(`/tweetDetail/${tweet.id}`);
    };

    return (
        <div className={`home-page ${darkMode ? 'dark-mode' : ''}`}>
            <div className="feed-container">
                <div className="title">Home</div>
                <Tabs darkMode={darkMode} activeTab={activeTab} onTabClick={setActiveTab} />
                <div className="feed">
                    {tweets.map((tweet) => (
                        <Tweet key={tweet.id} tweet={tweet} onClick={() => handleClickTweet(tweet)} darkMode={darkMode} />
                    ))}
                </div>
            </div>
            <div className="suggestions-container">
                <SearchBar mode="enabled" darkMode={darkMode} />
                <Suggestions darkMode={darkMode} users={users} />
            </div>
        </div>
    );
}
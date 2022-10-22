import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from './Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const AllNews = useLoaderData()
    return (
        <div>
            <h1>All News in Home: {AllNews.length}</h1>
            {
                AllNews.map(news => <NewsSummaryCard
                key ={news._id}
                news = {news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;
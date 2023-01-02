import React from 'react'
import { useParams } from 'react-router-dom';

const Home = () => {
    const { username } = useParams()
    return (
        <div>I am a {username} Component!</div>
    )
}

export default Home;
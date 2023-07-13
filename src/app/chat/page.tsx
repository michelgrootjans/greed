'use client'

import React, {useEffect} from "react";

let socket;

const Home = () => {
    useEffect(() => {
        console.log('useEffect')
        socketInitializer();

        return () => {
            console.log('socket.disconnect()')
            socket.disconnect();
        };
    }, []);

    async function socketInitializer() {
        console.log('socketInitializer')
    }

    function handleSubmit(e) {
        console.log('handleSubmit')
    }

    return (
        <div>
            <h1>Chat app</h1>
        </div>
    );
};

export default Home;
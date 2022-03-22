import React from 'react';

export default function Home() {
    return (
        <div className="">
            C'est le component Home
            <button onClick={() => {history.goBack()}}>Go back</button>
        </div>
    );
}

import React from 'react';
import '../App.css';
import YouTube from 'react-youtube';

class Home extends React.Component {
    render() {
        const opts = {
            height: '450',
            width: '550',
            playerVars: {
                autoplay: 1
            }
        };
        return (
            <div>
                <h4>
                    Shark week is truly the most wonderful time of the year!
                </h4>
                <p>
                    Let's celebrate it with cooking tacos and learning facts about sharks!
                </p>
                <YouTube
                    videoId="Ytjlns9zpo8"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
}

export default Home;

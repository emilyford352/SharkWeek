import React from 'react';
import '../App.css';
import YouTube from 'react-youtube';

class Home extends React.Component {
    render() {
        const opts = {
            height: '400',
            width: '550',
            playerVars: {
                autoplay: 1
            }
        };
        return (
            <div>
                <h4>
                    Shark week begins Sunday, July 28th
                </h4>
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

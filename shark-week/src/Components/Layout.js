import React from 'react';
import '../App.css';

import SharkAttackMap from './SharkAttackMap';
import Home from './Home'
import PinnedSharkData from './PinnedSharkData';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div className="header">
                            <h1>
                                Sharks, Sharks, Sharks!
                            </h1>
                        </div>
                        <ButtonGroup>
                            <Button>
                                <NavLink className="navLink" exact={true} to="/" activeClassName="selected" >Home</NavLink>
                            </Button>
                            <Button>
                                <NavLink className="navLink" exact={true} to="/sharkAttacks" activeClassName="selected" >Shark Attacks</NavLink>
                            </Button>
                        </ButtonGroup>
                        <Route exact={true} path="/" component={ Home } />
                        <Route exact={true} path="/sharkAttacks" component={ SharkAttackMap } />
                    </div>
                </Router>
                <div className="twitter-meta side-bar-menus">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="SharkWeek"
                    />
                </div>
                <div className="shark-sightings side-bar-menus">
                    <PinnedSharkData/>
                </div>
                <div  id="contentFooter">
                    <Button color="primary">
                        <a href="https://go.discovery.com/tv-shows/shark-week/" target="_blank" className="shark-week-link">
                            Go to Shark Week Website
                        </a>
                    </Button>
                    <div>
                        <small>
                            Created by Emily Ford, no affiliation with Discovery Channel or Shark Week, just a fan!
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;

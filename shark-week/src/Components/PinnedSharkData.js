import React from 'react';
import '../App.css';
import SharkAttack from './SharkAttack';
import List from '@material-ui/core/List';

class PinnedSharkData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sharkData: null
            , error: null
            , isLoaded: false
        };
    }

    componentDidMount() {
        //fetch('https://data.opendatasoft.com/api/records/1.0/search/?dataset=global-shark-attack%40public-us&facet=date&facet=type&facet=country&facet=activity&facet=sex&facet=age&facet=fatal_y_n&facet=time&facet=species')
        fetch('https://data.opendatasoft.com/api/records/1.0/search/?dataset=global-shark-attack%40public-us&lang=en&rows=10&sort=date&refine.date=2018')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        sharkData: result
                        , isLoaded: true
                    });
                }
                , (error) => {
                    this.setState({
                        error
                        , isLoaded: true
                    });
                }
            );
    }

    render() {
        return (
            <div className="shark-attacks">
                <h3>
                    2018 Shark Attacks
                </h3>
                <List>
                    {this.state.sharkData && this.state.sharkData.records.map((record) => <SharkAttack sharkAttack={record}/>)}
                </List>
            </div>
        );
    }
}

export default PinnedSharkData;

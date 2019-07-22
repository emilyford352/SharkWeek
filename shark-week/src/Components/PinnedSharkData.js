import React from 'react';
import '../App.css';
import SharkAttack from './SharkAttack';
import List from '@material-ui/core/List';
import Error from './Error';
import Loading from './Loading';

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
        fetch('https://data.opendatasoft.com/api/records/1.0/search/?dataset=global-shark-attack%40public-us&lang=en&rows=100&sort=date&refine.date=2018')
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
        const { isLoaded, sharkData, error } = this.state;
        return (
            <div className="shark-attacks">
                <h3>
                    2018 Shark Attacks
                </h3>
                <List>
                    { isLoaded && sharkData &&
                      sharkData.records.map((record) => <SharkAttack sharkAttack={record}/>)}
                </List>
                { error && <Error error={error}/>}
                { !isLoaded && <Loading/> }
            </div>
        );
    }
}

export default PinnedSharkData;

import React from 'react';
import '../App.css';
import Taco from './Taco';

class Cats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taco: null
            , error: null
            , isLoaded: false
        };
    }

    componentDidMount() {
        fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        taco: result
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
        const { taco, error, isLoaded } = this.state;
        return (
            <React.Fragment>
                <div className="data">
                    { !isLoaded && <div> Loading... </div> }
                    { error && <div> error </div> }
                    { isLoaded && <Taco taco={ taco } /> }
                </div>
            </React.Fragment>
        );
    }
}

export default Cats;

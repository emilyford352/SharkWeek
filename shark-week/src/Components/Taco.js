import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Taco extends React.Component {
    render() {
        const taco = this.props.taco;
        return (
            <div>
                <h3>
                    { taco.name }
                </h3>
                <p style={{whiteSpace: 'pre-line'}}>
                    { taco.recipe }
                </p>
            </div>
        );
    }
}

Taco.propTypes = {
    taco: PropTypes.object
};

export default Taco;

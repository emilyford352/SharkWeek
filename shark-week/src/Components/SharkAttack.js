import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import ListItem from '@material-ui/core/ListItem';
import Moment from 'react-moment';
import moment from 'moment';

//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
//import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

class SharkAttack extends React.Component {
    render() {
        const sharkAttack = this.props.sharkAttack;
        const date = sharkAttack.fields.date;
        const momentDate = new moment(date).format("MMM Do");

        return (
            <ListItem className="shark-attack">
                <div>
                    <a href={sharkAttack.fields.href} target="_blank" >
                        <b>
                            { momentDate }
                        </b>
                    </a>
                </div>
                <div className="attack-location">
                    <small>
                        {sharkAttack.fields.location}
                    </small>
                </div>
            </ListItem>
        );
    }
}

SharkAttack.propTypes = {
    sharkAttack: PropTypes.object
};

export default SharkAttack;

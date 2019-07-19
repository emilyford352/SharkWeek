import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import ListItem from '@material-ui/core/ListItem';
import Moment from 'react-moment';
import moment from 'moment';

class SharkAttack extends React.Component {
    render() {
        const sharkAttack = this.props.sharkAttack;
        //console.log(sharkAttack);
        debugger
        const date = sharkAttack.fields.date;

        return (
            <ListItem style={{pull: 'right'}}>
                <a href={sharkAttack.fields.href} target="_blank" >
                    <b>
                        { sharkAttack.fields.date }
                    </b>
                </a>
                <div>
                    {sharkAttack.fields.location}
                </div>
            </ListItem>
        );
    }
}

SharkAttack.propTypes = {
    sharkAttack: PropTypes.object
};

export default SharkAttack;

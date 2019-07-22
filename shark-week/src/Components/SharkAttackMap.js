import React from 'react';
import '../App.css';
import BarChart from './BarChart';
import Error from './Error';
import Loading from './Loading';

class SharkAttackMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            byCountryAttack: null
            , error: null
            , isLoaded: false
        };
    }

    componentDidMount() {
        fetch('https://data.opendatasoft.com/api/records/1.0/search/?dataset=global-shark-attack%40public-us&rows=2000&facet=country&refine.fatal_y_n=Y')
            .then(res => res.json())
            .then(
                (result) => {
                    const facets = result.facet_groups[1].facets;
                    //format data for bar chart
                    const byCountryAttack = Object.keys(facets).map((key, index) => {
                          return {
                              y: facets[index].count
                              , x: facets[index].name
                          }
                    }).filter((facet) => facet.y > 20);

                    this.setState({
                        byCountryAttack
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
        const { byCountryAttack, error, isLoaded } = this.state;
        
        return (
            <div>
                { isLoaded && byCountryAttack &&  <BarChart sharkData={ byCountryAttack }/> }
                { error && <Error error={error}/> }
                { !isLoaded && <Loading/>}
            </div>
        );
    }
}

export default SharkAttackMap;

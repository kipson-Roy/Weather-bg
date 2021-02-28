import React from 'react';

const seasonconfig = {
    summer: {
        text: "sunny",
        iconName:'sun'
    },
    winter: {
        text: 'chill bill',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
    };

    const SeasonDisplay = props => {
        const season = getSeason(props.lat, new Date().getMonth());
        const {text, iconName } = seasonconfig[season];

        return (
            <div className={`season-display ${season}`}>
            <h1>{text}</h1>
            </div>
           
        );
    };

    export default SeasonDisplay;

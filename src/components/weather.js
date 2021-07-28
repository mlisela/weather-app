import React from 'react';
// import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({ weatherData }) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">{weatherData.name}</Card.Header>
            <p>Temperature: {weatherData.main.temp}</p>
            <p></p>
        </Card.Content>
    </Card>
);

export default CardExampleCard;
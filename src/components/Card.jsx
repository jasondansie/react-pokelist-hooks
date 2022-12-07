import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

const Card = ({ image, name }) => {
    return (
        <div className={classes.card}>
            <h2>{name}</h2>
            <Link to={`${name}`}><img src={image} alt="pokemon" /></Link>
            <Link to={`${name}`}>See more</Link>
        </div>
    );
};

export default Card;
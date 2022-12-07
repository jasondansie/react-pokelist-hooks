import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from './Card';
import classes from './Pokelist.module.css';


const PokeSingle = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log(params);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <p>Loading... </p>
    }

    return (
        <div className={classes.bg} >
            <div className={classes.cards}>
                <Card
                    name={data.name}
                    key={data.id}
                    image={data.sprites?.other.dream_world.front_default}
                />
            </div>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default PokeSingle;
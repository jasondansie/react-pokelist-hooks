import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import classes from './Pokelist.module.css';


const Pokelist = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limt=151&offset=0')
            .then((res) => {
                const fetches = res.data.results.map(p => {
                    return axios.get(p.url).then(res => res.data)
                });

                Promise.all(fetches).then((res) => {
                    setData(res);
                    setIsLoading(true);
                })
            });
    }, [])

    return (
        <div className={classes.bg} >
            <h1>The Pokelist</h1>
            <div className={classes.cards}>
                {data.map((card) => (
                    <Card
                        name={card.name}
                        key={card.id}
                        image={card.sprites.other["official-artwork"].front_default}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pokelist;
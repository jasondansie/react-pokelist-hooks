import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './Main.module.css';

const Main = () => {
    return (
        <main className={classes.Main}>
            <Outlet />
        </main>
    );
};

export default Main;
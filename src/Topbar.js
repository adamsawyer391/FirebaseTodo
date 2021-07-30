import React from 'react'
import BigBoyAppbar from '@material-ui/core/AppBar'
import { Typography } from '@material-ui/core';
import './App.css';

function Topbar() {
    return (
        <div>
            <BigBoyAppbar position="static">
                <Typography variant='h3'>
                    Firebase TODO App
                </Typography>
            </BigBoyAppbar>
        </div>
    )
}

export default Topbar

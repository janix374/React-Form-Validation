import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

const NotFoundPage = () => {
    return (
        <Grid 
            container
        >
            <Typography variant="h1" component="p" className="not-page-found">     
                Page Not Found
            </Typography>
        </Grid>
    )
}

export default NotFoundPage

import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

const NotFoundPage = () => {
    return (
        <Grid container>
              <Box>
                    <Typography variant="h6" component="p" className="not-page-found">     
                        Page Not Found
                    </Typography>
              </Box>
        </Grid>
    )
}

export default NotFoundPage

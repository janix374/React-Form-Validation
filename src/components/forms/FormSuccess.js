import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';

function FormSuccess(props) {
    const { match, location, history } = props;
    const formState = history.location.state;

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '50vh' }}>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h3" component="p">
                        Your request!
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    {Object.keys(formState).map((keyName, keyIndex) => {
                        return (
                            <Typography variant="body1" component="p" key={keyIndex}>
                                {keyName}:{formState[keyName]}
                            </Typography>
                        );
                    })}
                </Box>
            </Grid>
        </Grid>
    );
}

export default withRouter(FormSuccess);

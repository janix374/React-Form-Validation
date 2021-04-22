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
                        All fields have passed validation
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    {Object.keys(formState).map((keyName, keyIndex) => {
                        if (typeof formState[keyName] === 'object') {
                            return (
                                <Typography variant="body1" component="p" key={keyName}>
                                    {keyName}:'File'
                                </Typography>
                            );
                        }
                        return (
                            <Typography variant="body1" component="p" key={keyName}>
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

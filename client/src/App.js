 import React from "react";
 import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
 import memories from './images/memories.png'
 import books from './images/books.jpeg'
 import Posts from "./components/Posts/Posts";
 import Form from "./components/Form/Form";
 import useStyles from "./styles"
 import { useDispatch } from "react-redux";
 import { useEffect } from 'react';
 import { getPosts } from './actions/posts'

 const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> Univeristy Social Media </Typography>    
                <img className={classes.image} src = {books} alt="books" height="60" />
            </AppBar>
            <Grow in> 
                <Container>
                    <Grid justifyContent="space-between" alignItems="stretch" spacing="3">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
 }

 export default App;
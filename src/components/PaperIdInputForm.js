import React, {useState} from 'react';
import {Button, TextField, Container, Grid, GridList} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        fontSize: '62.5%'
    },
    h3: {
      color: 'black',
      fontSize: '1.8rem',
      marginRight: '20px' 
    },
    searchTitle: {
        display: 'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    img: {
        height: '50px',
        marginleft: '20px'
    },
    h4: {
        fontSize: '1.6rem' 
    },
    div: {
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '20px'
    },
    li: {
        fontSize: '1.6rem',
        marginBottom: '10px'
    }
  });

export default function PaperIdInputForm(props){
    const {handleChangeId, papers} = props;
    const [searchId, setSearchId] = useState('');
    const classes = useStyles();

   
    return(
        <div>
            <Grid 
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start">
                <h3 className={classes.h3}>Enter Paper ID to Search Using</h3>
                <a href='https://api.semanticscholar.org'><img className={classes.img}src="https://cdn-images-1.medium.com/max/1200/1*uJJgPvoOHW7BmvcV2m7L6w@2x.png" alt="semantic scholar logo" /></a>
            </Grid>
            <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center' >
                <div className={classes.div}>
                    <TextField
                        id="outlined-secondary"
                        label="enter a paper id"
                        variant="outlined"
                        color="primary"
                        fullWidth='true'
                        type="text"
                        placeholder="enter id to search"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            handleChangeId(searchId);
                            setSearchId('');
                        }}
                    >Add</Button> 
                </div>
            </Grid>
        </div>
    )
}
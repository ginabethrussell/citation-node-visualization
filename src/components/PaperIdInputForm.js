import React, {useState} from 'react';
import CrossLinkList from './CrossLinkList';
import SharedCitationList from './SharedCitationList';
import {Button, TextField, Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { FullscreenExit } from '@material-ui/icons';


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
        alignItems: 'center'
    },
    img: {
        height: '50px',
        marginleft: '20px'
    },
    h4: {
        fontSize: '1.6rem' 
    },
    div: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    },
    li: {
        fontSize: '1.6rem',
        marginBottom: '10px'
    }
  });

export default function PaperIdInputForm(props){
    const {handleChangeId, papers} = props;
    const [searchId, setSearchId] = useState('');
    const [findCitations, setFindCitations] = useState(false);
    const [findSharedCitations, setSharedCitations] = useState(false);
    const classes = useStyles();

   
    return(
        <div>
            <div className={classes.searchTitle}>
                <h3 className={classes.h3}>Enter Paper ID to Search </h3>
                <img className={classes.img}src="https://cdn-images-1.medium.com/max/1200/1*uJJgPvoOHW7BmvcV2m7L6w@2x.png" alt="semantic scholar logo" />
            </div>
            <Container >
                <div className={classes.div}>
                    <TextField
                        id="outlined-secondary"
                        label="enter a paper id"
                        variant="outlined"
                        color="primary"
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
            </Container>
            { papers.length !== 0 &&
        
                <div>
                    <h4 className={classes.h4}> Added Papers</h4> 
                    {papers.map(paper => (
                        <li className={classes.li} key={paper.title}>{paper.title}</li>
                    ))}
                    {papers.length > 1 &&
                        <Button variant="contained" color="primary" onClick={()=> setFindCitations(true)}>Find Common Citations</Button>
                    } 
                    {findCitations && <CrossLinkList papers={papers} />}
                    {papers.length > 1 &&
                        <Button variant="contained" color="warning" onClick={()=> setSharedCitations(true)}>Find Shared Citations</Button>
                    } 
                    {findSharedCitations && <SharedCitationList papers={papers}/>}
                </div>

           
            } 
        </div>
    )
}
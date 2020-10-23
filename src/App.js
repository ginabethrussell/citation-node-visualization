import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PaperIdInputForm from './components/PaperIdInputForm';


// Paper IDs
// arXiv:1802.05983
// arXiv:1804.00104
// CorpusID:46798026
// arXiv:1606.03657

// Semantic Scholar API info and example api requests
// ArXiv ID : https://api.semanticscholar.org/v1/paper/arXiv:1705.10311
// Corpus ID : https://api.semanticscholar.org/v1/paper/CorpusID:37220927

// To receive extracted references even if Semantic Scholar doesn't have the paper
// Add the query ?include_unknown_references=true
const sampleId = 'arXiv:1802.05983';

const useStyles = makeStyles({
  root: {
    fontSize: '62.5%',
    boxSizing: 'border-box'
  },
  h1: {
    color: '#4050b5',
    fontSize: '2.2rem'
  }
})

function App() {
  const [id, setId] = useState('');
  const [papers, setPapers] = useState([]);
  const classes = useStyles();
  
  const handleChangeId = (newId) => {
    setId(newId);
  };

  const updateData = function(searchResult){
    console.log(searchResult);
    setPapers([...papers, searchResult]);
  };
  
  useEffect(()=>{
    if (!id){
      return;
    }
    axios.get(`https://api.semanticscholar.org/v1/paper/${id}`)
    .then(response => {
      return response.data;
    }).then(result => {
      updateData(result);
    })
    .catch(err => console.log(err))
  }, [id]);

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <h1 className={classes.h1}>Research Paper Citation Node Visualization</h1>
        <PaperIdInputForm handleChangeId={handleChangeId} papers={papers}/>
      </div>
    </Container>
  );
}

export default App;

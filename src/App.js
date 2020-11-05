import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PaperIdInputForm from './components/PaperIdInputForm';
import PaperTitleList from './components/PaperTitleList';
import PaperNodes from './components/PaperNodes';


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
    boxSizing: 'border-box',
    width: '75%',
    margin: '0 auto'
  },
  h1: {
    color: '#4050b5',
    fontSize: '2.2rem'
  }
})

// Starter paper ids
const testIds = ['arXiv:1802.05983','arXiv:1804.00104','CorpusID:46798026', 'arXiv:1606.03657'];
  
function App() {
  const [id, setId] = useState('');
  const [papers, setPapers] = useState([]);
  const classes = useStyles();
  const testPapers = [];

  //get initial data on load
  useEffect(() => {
    testIds.forEach(id => {
      getSeedPaper(id); 
    }) 
  }, [])

  // Get starter paper data on load
  const getSeedPaper = (id) => {
    axios.get(`https://api.semanticscholar.org/v1/paper/${id}`)
      .then(response => {
        return response.data;
      }).then(result => {
       return cleanData(result);
      }).then(paperData => {
        testPapers.push(paperData);
        setPapers([...papers,...testPapers]);
      })
      .catch(err => console.log(err))
  }

  const handleChangeId = (newId) => {
    setId(newId);
  };

  const cleanData = (apiResponse) => {
    const references = apiResponse.references.map(paper => paper.paperId);
    return {
      title: apiResponse.title,
      authors: apiResponse.authors,
      citations: references,
      year: apiResponse.year,
      paperId: apiResponse.paperId
    }
  }

  const updateData = function(paperData){
    setPapers([...papers, paperData]);
  };
  
  // useEffect(()=>{
  //     if (!id){
  //       return;
  //     }
  //     axios.get(`https://api.semanticscholar.org/v1/paper/${id}`)
  //     .then(response => {
  //       return response.data;
  //     }).then(result => {
  //       const paperData = cleanData(result);
  //       updateData(paperData);
  //     })
  //     .catch(err => console.log(err))
  // }, [id]);

  
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <h1 className={classes.h1}>Research Paper Citation Node Visualization</h1>
        <PaperIdInputForm handleChangeId={handleChangeId} papers={papers}/>
        <PaperTitleList papers={papers} />
        <PaperNodes papers={papers} />
      </div>
    </Container>
  );
}

export default App;

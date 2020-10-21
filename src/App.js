import React from 'react';
import axios from 'axios';

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

function App() {
  return (
    <div className="App">
      Research Paper Citation Node Visualization
    </div>
  );
}

export default App;

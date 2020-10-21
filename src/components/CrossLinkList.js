import React from 'react';
import Citations from './Citations';

export default function CrossLinkList(props){
    const {papers} = props;
    
    return (
        <div>
            <hr />
            { papers.map(paper => (
                <div key={paper.title}>
                    <h3>{paper.title}</h3>
                    {paper['arxivId']?
                    <p>{`arxivId: ${paper['arxivId']}`}</p>
                    : <p>{`corpusId: ${paper['corpusId']}`}</p>
                    }
                    <Citations title={paper.title} citations={paper.citations} papers={papers}/>
                </div>
                ))
            }        
        </div>
         
    )
}
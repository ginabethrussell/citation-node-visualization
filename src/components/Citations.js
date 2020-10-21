import React from "react";

export default function Citations(props){
    const {title, citations, papers} = props;
    const citedPapers = [];

    const findCitations = () => {
        const citationNames = citations.map(citation => citation.title);

        papers.forEach(paper => {
           if (citationNames.includes(paper.title)){
               citedPapers.push(paper)
           }
        });
        return citedPapers;
    }

    return (
        <div>
             <h4>Cited Papers</h4>
            <ul>
                { 
                    findCitations()
                    .map(citedPaper => (
                        <li key={citedPaper.title}>{citedPaper.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}
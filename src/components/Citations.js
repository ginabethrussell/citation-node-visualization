import React from "react";

export default function Citations(props){
    const {title, citations, papers} = props;
    const citedPapers = [];

    const findCitations = () => {
        citations.forEach(citation => {
            for (let i = 0; i < papers.length; i++){
                if (title === papers[i].title){
                    continue;
                }else {
                    if (citation.title === papers[i].title){
                        citedPapers.push(papers[i].title);
                    }
                }
                
            }   
        });
        return citedPapers;
    }

    return (
        <div>
             <h4>{title}</h4>
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
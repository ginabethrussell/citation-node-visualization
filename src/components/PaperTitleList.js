import React from 'react';

export default function PaperTitleList (props) {
    const {papers} = props;
    console.log(papers);
    return (
        <div className="paper-list">
            <h3>Added Papers: </h3>
            {papers.length > 0 && (
                <ul>
                    {papers.map(paper => (
                        <li key={paper.paperId}>{paper.title}</li>
                    ))}  
                </ul>
            )}
        </div>
    )
}
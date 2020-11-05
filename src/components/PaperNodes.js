import React from 'react';
import BasicGraph from './BasicGraph';

export default function PaperNodes(props) {
    const {papers} = props;
    const nodeSourceData = [...papers];

    // assign nodes
    nodeSourceData.forEach(paper => {
        console.log(paper.title);
        let node = 0;
        let citedBy = [];
        for (let i = 0; i < papers.length; i++){
            if (papers[i].citations.includes(paper.paperId)){
                console.log('cited by:', papers[i].title)
                citedBy.push(papers[i]);
                node ++;
            }
        }
        paper.node = node;
        paper.citedBy = citedBy;
    })
    console.log(nodeSourceData);

    return(
       <BasicGraph papers={nodeSourceData} />
    )
}
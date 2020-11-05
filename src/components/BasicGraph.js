import React from 'react';
import ReactFlow from 'react-flow-renderer';


const graphStyles = { width: '100%', height: '500px', border: '2px solid black' };

export default function BasicGraph(props) {
  const {papers} = props;
  const paperTitles = papers.map(paper => paper.title);
  console.log(paperTitles);

  let xPos = 100;
  const nodes = papers.map((paper, idx) => {
      const yPos = 300 - 50 * Number(paper.node);
      xPos += 50;
      return {
        id: idx + 1,
        data: { label: `${paper.title}`}, position: { x: xPos, y: yPos}
      }
  });
  console.log(nodes);

  const edges = []; 
  papers.forEach((paper, idx) => {
    if (paper.citedBy.length > 0) {
      let sources = [...paper.citedBy];
      // console.log(paper.title);
      let targetIdx = idx + 1;
      console.log("cited by", sources);
      sources.forEach(source => {
        console.log(source.title)
        let srcIdx = (paperTitles.indexOf(source.title)) + 1;
        console.log(targetIdx, srcIdx);
        edges.push(
          {
            id: `e${srcIdx}-${targetIdx}`,
            source: `${srcIdx}`,
            target: `${targetIdx}`,
            animated: true
          }
        )
      })
    }
  });
  console.log(edges);
  const elements = [ ...nodes, ...edges];

  // const elements = [
  //   { id: '1', data: { label: `${papers[0].title}` }, position: { x: 250, y: 5 } },
  //   { id: '2', data: { label: `${papers[1].title}` }, position: { x: 100, y: 100 } },
  //   { id: '3', data: { label: `${papers[2].title}` }, position: { x: 250, y: 200 } },
  //   { id: '4', data: { label: `${papers[3].title}` }, position: { x: 100, y: 300 } },
  //   { id: 'e1-2', source: '1', target: '2', animated: true },
  //   { id: 'e3-1', source: '3', target: '1', animated: true },
  //   { id: 'e3-2', source: '3', target: '2', animated: true },
  //   { id: 'e4-1', source: '4', target: '1', animated: true },
  //   { id: 'e4-2', source: '4', target: '2', animated: true },
  // ];

  return (
    <ReactFlow elements={elements} style={graphStyles} />
    
  )
}


import React from 'react';
import ReactFlow from 'react-flow-renderer';

// const elements = [
//   { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
//   { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
//   { id: 'e1-2', source: '1', target: '2', animated: true },
// ];


const graphStyles = { width: '100%', height: '500px' };


const BasicGraph = (props) => {
  const {papers} = props;

  const elements = [
    { id: '1', data: { label: `${papers[0].title}` }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: `${papers[1].title}` }, position: { x: 100, y: 100 } },
    { id: '3', data: { label: `${papers[2].title}` }, position: { x: 250, y: 200 } },
    { id: '4', data: { label: `${papers[3].title}` }, position: { x: 100, y: 300 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e3-1', source: '3', target: '1', animated: true },
    { id: 'e3-2', source: '3', target: '2', animated: true },
    { id: 'e4-1', source: '4', target: '1', animated: true },
    { id: 'e4-2', source: '4', target: '2', animated: true },
  ];

  return (
    <ReactFlow elements={elements} style={graphStyles} />
  )
}

export default BasicGraph;
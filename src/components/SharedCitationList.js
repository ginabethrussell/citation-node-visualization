import React from 'react';
import BasicGraph from './BasicGraph'

export default function SharedCitationList(props) {
    const {papers} = props;
    const allCitations = [];
    papers.forEach(paper => {
        paper.citations.forEach(citation => {
            allCitations.push(citation.title);
        })
    })
    console.log(allCitations);
    var compressed = [];
	// make a copy of the input array
	var copy = [...allCitations];
 
	// first loop goes over every element
	for (var i = 0; i < allCitations.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (allCitations[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = allCitations[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
    //console.log(compressed);
    compressed.sort((a,b) => (a.count > b.count )? -1: 1);
    console.log(compressed);
    const topTen = compressed.slice(0,10);
    console.log(topTen);

    return (
        <div>
            <h2> Top Ten Papers Cited By Papers Given</h2>
            <ul>
                {topTen.map(item => (
                    <li key={item.value}>{item.value}</li>
                ))}
            </ul>
            <BasicGraph papers={papers}/>
        </div>
    )

}
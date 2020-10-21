import React, {useState} from 'react';
import CrossLinkList from './CrossLinkList';
import SharedCitationList from './SharedCitationList';

export default function PaperIdInputForm(props){
    const {handleChangeId, papers} = props;
    const [searchId, setSearchId] = useState('');
    const [findCitations, setFindCitations] = useState(false);
    const [findSharedCitations, setSharedCitations] = useState(false);

   
    return(
        <div>
            <h3>Enter Paper ID to Add to Visualization: </h3>
            <input
                type="text"
                placeholder="enter id to search"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <input type="submit"
                onClick={() => {
                    handleChangeId(searchId);
                    setSearchId('');
                }}
            />
            { papers.length !== 0 &&
        
                <div>
                    <h3> Added Papers</h3> 
                    {papers.map(paper => (
                        <li key={paper.title}>{paper.title}</li>
                    ))}
                    {papers.length > 1 &&
                        <button onClick={()=> setFindCitations(true)}>Find Common Citations</button>
                    } 
                    {findCitations && <CrossLinkList papers={papers} />}
                    {papers.length > 1 &&
                        <button onClick={()=> setSharedCitations(true)}>Find Shared Citations</button>
                    } 
                    {findSharedCitations && <SharedCitationList papers={papers}/>}
                </div>

           
            } 
        </div>
    )
}
import React from 'react';
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function filterResults (results) {
    let filteredResults = [];
    for (var i = 0; i < results.length; ++i) {
        if (i === 0) {
            filteredResults.push(results[i]);
            continue;
        }

        if (results[i].decodedText !== results[i - 1].decodedText) {
            filteredResults.push(results[i]);
        }
    }
    return filteredResults;
}

const ResultContainerTable = ({ data }) => {

    const [copied, setCopied] = useState(false)

    const results = filterResults(data);
    
    return (
        <table className={'Qrcode-result-table'}>
            <thead>
                <tr>
                    {/* <td>#</td> */}
                    {/* <td>Decoded Text</td> */}
                    {/* <td>Format</td> */}
                </tr>
            </thead>
            <tbody>
                {
                    results.map((result, i) => {
                        // console.log(result);
                        return (<tr key={i}>
                            {/* <td>{i}</td> */}
                            {/* <td>{result.decodedText}</td> */}
                            {/* <td>{result.result.format.formatName}</td> */}
                            <td>
                                <div className="input-group mb-3 mt-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Recipient's username" 
                                        aria-label="Recipient's username" 
                                        aria-describedby="basic-addon2" 
                                        defaultValue={result.decodedText}
                                    />
                                    <div className="input-group-append">
                                        <CopyToClipboard
                                            text={result.decodedText}
                                            onCopy={ () => setCopied(true) }                                    >

                                        <button className={`btn ${ copied ? 'btn-primary' : 'btn-outline-secondary' }`} type="button">
                                            { copied ? 'Copied' : 'Copy' }
                                        </button>

                                        </CopyToClipboard>
                                    </div>
                                </div>

                            </td>

                        </tr>);
                    })
                }
            </tbody>
        </table>
    );
};

export const ResultContainerPlugin = (props) => {
    const results = filterResults(props.results);
    return (
        <div className='Result-container'>
            {/* <div className='Result-header'>Scanned results ({results.length})</div> */}
            <div className='Result-header'><ResultContainerTable data={results} /></div>
            {/* <div className='Result-section'>
                <ResultContainerTable data={results} />
            </div> */}
            
        </div>
    );
};

import React from 'react';
import kyunhihorhipadhai from './assets/abc.mkv';

function Results({ result }) {
    const data = [
        { attribute: 'CGPA', value: Number(result.pointer).toPrecision(4) },
        { attribute: 'Rank', value: result.rank === -1 ? '-' : result.rank },
        { attribute: 'Math', value: result.math },
        { attribute: 'CPPS theory', value: result.cppsth },
        { attribute: 'CPPS lab', value: result.cppslab },
        { attribute: 'Em theory', value: result.emth },
        { attribute: 'Em lab', value: result.emlab },
        { attribute: 'Chem theory', value: result.chemth },
        { attribute: 'Chem lab', value: result.chemlab },
        { attribute: 'IKS', value: result.iks },
        { attribute: 'FRB2', value: result.frb2 },
    ];
    if (localStorage.getItem('views') > 10) {
        return (
            <div style={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'red',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                Stop seeing others results
                <video autoPlay loop style={{ width: '70%', height: '70%' }}>
                    <source src={kyunhihorhipadhai} type="video/mp4" />
                </video>
                <button style={{
                    width: '100px',
                    height: '50px',
                }}
                    onClick={() => {
                        localStorage.setItem('views', 0);
                        window.location.reload();
                    }
                    }
                >Nhi krni padhai</button>
            </div>
        )
    }
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <h1>Results</h1>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ fontWeight: 'bold', padding: '8px', backgroundColor: '#000000', border: '1px solid #ccc' }}>Attribute</th>
                        <th style={{ fontWeight: 'bold', padding: '8px', backgroundColor: '#000000', border: '1px solid #ccc' }}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ padding: '8px', backgroundColor: '#000000', border: '1px solid #ccc' }}>{item.attribute}</td>
                            <td style={{ padding: '8px', backgroundColor: '#000000', border: '1px solid #ccc' }}>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{
                width: '100px',
                height: '50px',
                marginTop: '10px',
            }}
                onClick={() => {
                    window.location.reload();
                }
                }
                
            >See another result</button>
            <div style={{
                borderTop: '1px solid #fff',
                bottom: '0',
                position: 'fixed',
                width: '100vw',
                textAlign: 'center',
                fontWeight: '300',
                padding: '8px',
            }}>
                Made by <b>Abhay Upadhyay</b> and <b>Zoher Vohra</b>. Contact Zoher for any privacy breach concerns. Contact Abhay if you want to appreciate the site.
            </div>
        </div>
    );
}

export default Results;

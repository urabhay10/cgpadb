import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Results() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roll = queryParams.get('roll');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state
    const navigate = useNavigate();

   
    useEffect(() => {
        async function getResult() {
            const res = await fetch('http://localhost:8000/get-res?roll=' + roll);
            const data = await res.json();
            return data;
        }
        
        async function fetchData() {
            const result = await getResult();

            const subjectScores = result.scores.flatMap((score) =>
                score.subjects.map((subject) => ({
                    attribute: subject.name,
                    value: subject.score
                }))
            );

            const processedData = [
                { attribute: 'CGPA', value: Number(result.cgpa).toPrecision(4) },
                { attribute: 'Rank', value: result.rank === -1 ? '-' : result.rank },
                ...subjectScores
            ];

            setData(processedData);
            setLoading(false); // Set loading to false after data is fetched
        }

        fetchData();
    }, [roll]);

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    }

    return (
        <div className="text-center">
            <div className="">Results</div>
            <div className="overflow-x-auto">
                <table className="table-lg table-auto table-zebra border-collapse mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Attribute</th>
                            <th className="border px-4 py-2">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.attribute}</td>
                                <td className="border px-4 py-2">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="text-white font-bold py-2 px-4" onClick={() => {
                    navigate('/')
                }}>
                    Check another result
                </button>
            </div>
        </div>
    );
}

export default Results;
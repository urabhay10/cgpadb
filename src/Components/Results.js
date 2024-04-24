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
            <div className="font-bold text-2xl text-red-500 flex flex-col justify-center items-center">
                Stop seeing others results
                <video autoPlay loop className="w-3/4 h-3/4">
                    <source src={kyunhihorhipadhai} type="video/mp4" />
                </video>
                <button className="w-32 h-16" onClick={() => {
                    localStorage.setItem('views', 0);
                    window.location.reload();
                }}>
                    Nhi krni padhai
                </button>
            </div>
        )
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
            </div>
        </div>
    );
}

export default Results;

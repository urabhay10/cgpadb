import React, { useEffect, useState } from 'react'

export default function Leaderboard({ setleaderboard }) {
    function getGrade(num) {
        num = Number(num);
        if (num === 10) {
            return "AA";
        } else if (num === 9) {
            return "AB";
        } else if (num === 8) {
            return "BB";
        } else if (num === 7) {
            return "BC";
        } else if (num === 6) {
            return "CC";
        } else if (num === 5) {
            return "CD";
        } else if (num === 4) {
            return "DD";
        } else if (num === 0) {
            return "FF";
        }
    }
    const [data, setData] = useState([]);
    const load = async () => {
        const res = await fetch('https://cgpa-server-4aef3303c3a7.herokuapp.com/get-leaderboard');
        const data = await res.json();
        console.log(data);
        setData(data);
    }
    useEffect(() => {
        load();
    }, [])
    return (
        <>
            <button className="ext-white font-bold py-2 px-4" onClick={() => {
                setleaderboard(false)
            }}>
                Back
            </button>
            <div className="text-center">
                <div className="font-bold title">LeaderBoard</div>
                <div className="overflow-x-auto">
                    <table className="table-lg table-auto table-zebra border-collapse mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Rank</th>
                                <th className="border px-4 py-2">Roll no.</th>
                                <th className="border px-4 py-2">Pointer</th>
                                <th className='border px-4 py-2'>Math</th>
                                <th className='border px-4 py-2'>CPPSth</th>
                                <th className='border px-4 py-2'>CPPSlab</th>
                                <th className='border px-4 py-2'>EMTH</th>
                                <th className='border px-4 py-2'>EMlab</th>
                                <th className='border px-4 py-2'>ChemTH</th>
                                <th className='border px-4 py-2'>ChemLab</th>
                                <th className='border px-4 py-2'>FRB1</th>
                                <th className='border px-4 py-2'>FRB2</th>
                                <th className='border px-4 py-2'>IKS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className={index >= 3 ? '' : "font-bold"} style={{
                                    color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                }}>
                                    <td className="border px-4 py-2">{item.rank === -1 ? '-' : item.rank}</td>
                                    <td className="border px-4 py-2">
                                        {item.roll==="72"?<a href="https://urabhay10.github.io/myportfolio/" className='font-bold underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>{item.roll}</a>:item.roll}
                                    </td>
                                    <td className="border px-4 py-2">{item.pointer.toPrecision(2)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.math)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.cppsth)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.cppslab)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.emth)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.emlab)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.chemth)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.chemlab)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.frb1)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.frb2)}</td>
                                    <td className="border px-4 py-2">{getGrade(item.iks)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div></>
    )
}

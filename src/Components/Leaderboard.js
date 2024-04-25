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
    function getColor(grade) {
        if (grade === 'AA') {
            return '#00FF00';
        } else if (grade === 'AB') {
            return '#90EE90';
        } else if (grade === 'BB') {
            return '#FFFF00';
        } else if (grade === 'BC') {
            return '#FFA500';
        } else if (grade === 'CC') {
            return '#FFD700';
        } else if (grade === 'CD') {
            return '#FF7F50';
        } else if (grade === 'DD') {
            return '#FF0000';
        } else if (grade === 'FF') {
            return '#8B0000';
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
                    <table className="table-lg table-auto table-zebra border-collapse mx-auto table-pin-rows table-pin-cols">
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
                                <th className='border px-4 py-2'>DSW</th>
                                <th className='border px-4 py-2'>CC</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className={index >= 3 ? '' : ""}>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                    }}>{item.rank === -1 ? '-' : item.rank}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                    }}>
                                        {item.roll}
                                    </td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                    }}>{item.pointer.toPrecision(2)}</td>

                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.math))
                                    }}>{getGrade(item.math)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.cppsth))
                                    }}>{getGrade(item.cppsth)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.cppslab))
                                    }}>{getGrade(item.cppslab)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.emth))
                                    }}>{getGrade(item.emth)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.emlab))
                                    }}>{getGrade(item.emlab)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.chemth))
                                    }}>{getGrade(item.chemth)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.chemlab))
                                    }}>{getGrade(item.chemlab)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.frb1))
                                    }}>{getGrade(item.frb1)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.frb2))
                                    }}>{getGrade(item.frb2)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.iks))
                                    }}>{getGrade(item.iks)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.dsw))
                                    }}>{getGrade(item.dsw)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: getColor(getGrade(item.cc))
                                    }}>{getGrade(item.cc)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div></>
    )
}

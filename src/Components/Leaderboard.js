import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Leaderboard({ setleaderboard }) {
    const studentsData = [
        { roll: "03", name: "ACHARYA TEJAS JITENDRA" },
        { roll: "04", name: "PAWAR ADITYA RAJESH" },
        { roll: "05", name: "AMBULGEKAR AYUSH UDHAVRAO" },
        { roll: "06", name: "AMIN MANAV KIRANKUMAR" },
        { roll: "07", name: "ABHIMANYU ANAND" },
        { roll: "09", name: "SHAIKH AYAAN ABDUL HAMID" },
        { roll: "10", name: "BADODE PIYUSH PRAMOD" },
        { roll: "11", name: "BANGE TANMAY TUKARAM" },
        { roll: "12", name: "BHAMARE PRATHAM GORAKH" },
        { roll: "13", name: "BHAMARE TANISH NARENDRA" },
        { roll: "14", name: "BHAT SHRIVARA UDAYASHANKAR" },
        { roll: "15", name: "BHIMANI NEVIL BIRENKUMAR" },
        { roll: "16", name: "BORADIA DHARMIL HIREN" },
        { roll: "17", name: "CHATTOPADHYAY ADITYA SAURAV" },
        { roll: "19", name: "CHAVAN ADITYA VIDYASAGAR" },
        { roll: "20", name: "DHEER RAJESH JOISHER" },
        { roll: "22", name: "GADHIYA NISARG RAJESHKUMAR" },
        { roll: "24", name: "GAUR GAURAV DINESH" },
        { roll: "26", name: "GHORPADE JAY MILIND" },
        { roll: "27", name: "GOHIL DAKSH DHARMESH" },
        { roll: "28", name: "GUPTA RUPAK RAJESH" },
        { roll: "29", name: "INGALE ARYAN VIDYADHAR" },
        { roll: "30", name: "JADHAV PRANAV PRATAP" },
        { roll: "31", name: "JAIN SADHYA AMAN" },
        { roll: "32", name: "JAYDEEP SANJAY KAMBLE" },
        { roll: "33", name: "JOIL AADITYA VIKAS" },
        { roll: "35", name: "KAMBLE HARSHAL AJIT" },
        { roll: "36", name: "KOKUDE KHUMESH SANJIV" },
        { roll: "38", name: "KOTHARE GHRUANK PRANEEL" },
        { roll: "39", name: "LANGHE SAHIL VIJAY" },
        { roll: "40", name: "MARGAJ SOHAM SUNIL" },
        { roll: "41", name: "NAGARGOJE ADITYA NAMDEV" },
        { roll: "43", name: "NARKE AADIT AMIT" },
        { roll: "44", name: "PACHADE ADITYA SHIVAJI" },
        { roll: "45", name: "PAGNIS VEDAANG DEVENDRA" },
        { roll: "46", name: "PANCHAL DEVANSH DEVENDRA" },
        { roll: "47", name: "PANDEY ATHARV SANDEEP" },
        { roll: "48", name: "PANDEY KARTIKAY NANDKISHOR" },
        { roll: "49", name: "PATEL RAGHUNANDAN JITESH" },
        { roll: "50", name: "PATIL YADNYESH NITIN" },
        { roll: "51", name: "PAWARA TANMAY SAYASING" },
        { roll: "52", name: "RAJ KHARKWAL" },
        { roll: "53", name: "RAJMANE SHIVKUMAR SHIVLING" },
        { roll: "54", name: "RAJPUT SHAURYA JAYDEEP" },
        { roll: "55", name: "RANAWAT HRIDAY VIKAS" },
        { roll: "56", name: "RANE SOHAM SANJIV" },
        { roll: "59", name: "SANGHVI DAKSH VIPUL" },
        { roll: "60", name: "SANGNALE LAXMIKANT ROHIDAS" },
        { roll: "61", name: "SANKHE PRATHAMESH MILIND" },
        { roll: "62", name: "SHAH DARSH KETAN" },
        { roll: "63", name: "SHAH SOHAM BIMAL" },
        { roll: "64", name: "SHIRSATH ABHIMAN AVINASH" },
        { roll: "65", name: "SHIVAM HEMNANI" },
        { roll: "66", name: "SHUBH KAUSHIK SARVAIYA" },
        { roll: "68", name: "SIRSATH PRAMOD ZUMBAR" },
        { roll: "72", name: "UPADHYAY ABHAY RAJESH" },
        { roll: "75", name: "VEDANG MAHESH MORE" },
        { roll: "76", name: "VERMA AMAL BHARAT" },
        { roll: "77", name: "VOHRA ZOHER TAHERI" },
        { roll: "78", name: "WAGHMARE UDAY MADHUKAR" },
        { roll: "79", name: "WAJE SAHIL TATYABHAU" },
        { roll: "01", name: "DIVA SHARMA" },
        { roll: "02", name: "ARUSHI RAJPUT" },
        { roll: "08", name: "ANANYA PREMAN" },
        { roll: "18", name: "CHAUDHARI KHUSHBU VINAY" },
        { roll: "21", name: "DHANMANE DIKSHA NANDKISHOR" },
        { roll: "23", name: "GANDHI ANGELL JAYESH" },
        { roll: "25", name: "GHODESWAR SHREYA JOHN" },
        { roll: "34", name: "KAJAL KUMARI" },
        { roll: "37", name: "KORE SAKSHI VIPUL" },
        { roll: "42", name: "NAHAR PAANCHI SANJAY" },
        { roll: "57", name: "RAVAL RAJEE JAY" },
        { roll: "58", name: "RITHE VAISHNAVI NAMDEV" },
        { roll: "67", name: "SINGH SNEHA MUNESHWAR" },
        { roll: "69", name: "SONI JANVI PARAS" },
        { roll: "70", name: "SUTRAVE NANDINI NAGESH" },
        { roll: "71", name: "SWARALI PRAVIN BHUYAR" },
        { roll: "73", name: "UPASE TITHEE VIKAS" },
        { roll: "74", name: "VAISHVI KHANDELWAL" }
    ];
    const navigate = useNavigate();
    function getname(lastTwoDigits) {
        // console.log(lastTwoDigits)
        const student = studentsData.find(student => student.roll === lastTwoDigits.toString().padStart(2, '0'));
        return student ? student.name : "Student not found";
    }

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
        const dat = await res.json();
        console.log(dat);
        setData(dat);
        // console.log(data.length);
    }
    useEffect(() => {
        load();
        // setTimeout(() => {
        //     // setleaderboard(false);
        //     console.log('this',data)
        // }, 3000);
    }, [data])
    {if(data.length) return (
        <>
            <button className="ext-white font-bold py-2 px-4" onClick={() => {
                navigate('/')
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
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Roll no.</th>
                                <th className="border px-4 py-2">CGPA</th>
                                <th className='border px-4 py-2'>{"SGPA(sem1)"}</th>
                                <th className='border px-4 py-2'>{"SGPA(sem2)"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} style={{
                                    cursor: 'pointer'
                                }} className={index >= 3 ? '' : ""} onClick={()=>{navigate('/res?roll='+item.roll)}}>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#BCC6CC' : index === 2 ? '#cd7f32' : '',
                                        fontWeight: index<3?'bold':'normal'
                                    }}>{item.rank === -1 ? '-' : item.rank}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#BCC6CC' : index === 2 ? '#cd7f32' : '',
                                        fontWeight: index<3?'bold':'normal'
                                    }}>
                                        {getname(item.roll)}
                                    </td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#BCC6CC' : index === 2 ? '#cd7f32' : '',
                                        fontWeight: index<3?'bold':'normal'
                                    }}>
                                        {item.roll}
                                    </td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#BCC6CC' : index === 2 ? '#cd7f32' : '',
                                        fontWeight: index<3?item.rank!==-1?'bold':'normal':'normal'
                                    }}>{item.cgpa.toPrecision(4)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: item.scores[0].rank === 1 ? 'gold' : item.scores[0].rank === 2 ? '#BCC6CC' : item.scores[0].rank === 3 ? '#cd7f32' : '',
                                        fontWeight: item.scores[0].rank<4?item.rank!==-1?'bold':'normal':'normal'
                                    }}>{item.scores[0].sgpa.toPrecision(4)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: item.scores[1].rank === 1 ? 'gold' : item.scores[1].rank === 2 ? '#BCC6CC' : item.scores[1].rank === 3 ? '#cd7f32' : '',
                                        fontWeight: item.scores[1].rank<4?item.rank!==-1?'bold':'normal':'normal'
                                    }}>{item.scores[1].sgpa?item.scores[1].sgpa.toPrecision(4):'-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div></>
    ); else return <div>Loading...</div>
    }
}

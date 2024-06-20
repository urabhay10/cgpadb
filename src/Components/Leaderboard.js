import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Leaderboard({ setleaderboard }) {
    const studentsData = [
        { roll: "231080003", name: "ACHARYA TEJAS JITENDRA" },
        { roll: "231080004", name: "PAWAR ADITYA RAJESH" },
        { roll: "231080005", name: "AMBULGEKAR AYUSH UDHAVRAO" },
        { roll: "231080006", name: "AMIN MANAV KIRANKUMAR" },
        { roll: "231080007", name: "ABHIMANYU ANAND" },
        { roll: "231080009", name: "SHAIKH AYAAN ABDUL HAMID" },
        { roll: "231080010", name: "BADODE PIYUSH PRAMOD" },
        { roll: "231080011", name: "BANGE TANMAY TUKARAM" },
        { roll: "231080012", name: "BHAMARE PRATHAM GORAKH" },
        { roll: "231080013", name: "BHAMARE TANISH NARENDRA" },
        { roll: "231080014", name: "BHAT SHRIVARA UDAYASHANKAR" },
        { roll: "231080015", name: "BHIMANI NEVIL BIRENKUMAR" },
        { roll: "231080016", name: "BORADIA DHARMIL HIREN" },
        { roll: "231080017", name: "CHATTOPADHYAY ADITYA SAURAV" },
        { roll: "231080019", name: "CHAVAN ADITYA VIDYASAGAR" },
        { roll: "231080020", name: "DHEER RAJESH JOISHER" },
        { roll: "231080022", name: "GADHIYA NISARG RAJESHKUMAR" },
        { roll: "231080024", name: "GAUR GAURAV DINESH" },
        { roll: "231080026", name: "GHORPADE JAY MILIND" },
        { roll: "231080027", name: "GOHIL DAKSH DHARMESH" },
        { roll: "231080028", name: "GUPTA RUPAK RAJESH" },
        { roll: "231080029", name: "INGALE ARYAN VIDYADHAR" },
        { roll: "231080030", name: "JADHAV PRANAV PRATAP" },
        { roll: "231080031", name: "JAIN SADHYA AMAN" },
        { roll: "231080032", name: "JAYDEEP SANJAY KAMBLE" },
        { roll: "231080033", name: "JOIL AADITYA VIKAS" },
        { roll: "231080035", name: "KAMBLE HARSHAL AJIT" },
        { roll: "231080036", name: "KOKUDE KHUMESH SANJIV" },
        { roll: "231080038", name: "KOTHARE GHRUANK PRANEEL" },
        { roll: "231080039", name: "LANGHE SAHIL VIJAY" },
        { roll: "231080040", name: "MARGAJ SOHAM SUNIL" },
        { roll: "231080041", name: "NAGARGOJE ADITYA NAMDEV" },
        { roll: "231080043", name: "NARKE AADIT AMIT" },
        { roll: "231080044", name: "PACHADE ADITYA SHIVAJI" },
        { roll: "231080045", name: "PAGNIS VEDAANG DEVENDRA" },
        { roll: "231080046", name: "PANCHAL DEVANSH DEVENDRA" },
        { roll: "231080047", name: "PANDEY ATHARV SANDEEP" },
        { roll: "231080048", name: "PANDEY KARTIKAY NANDKISHOR" },
        { roll: "231080049", name: "PATEL RAGHUNANDAN JITESH" },
        { roll: "231080050", name: "PATIL YADNYESH NITIN" },
        { roll: "231080051", name: "PAWARA TANMAY SAYASING" },
        { roll: "231080052", name: "RAJ KHARKWAL" },
        { roll: "231080053", name: "RAJMANE SHIVKUMAR SHIVLING" },
        { roll: "231080054", name: "RAJPUT SHAURYA JAYDEEP" },
        { roll: "231080055", name: "RANAWAT HRIDAY VIKAS" },
        { roll: "231080056", name: "RANE SOHAM SANJIV" },
        { roll: "231080059", name: "SANGHVI DAKSH VIPUL" },
        { roll: "231080060", name: "SANGNALE LAXMIKANT ROHIDAS" },
        { roll: "231080061", name: "SANKHE PRATHAMESH MILIND" },
        { roll: "231080062", name: "SHAH DARSH KETAN" },
        { roll: "231080063", name: "SHAH SOHAM BIMAL" },
        { roll: "231080064", name: "SHIRSATH ABHIMAN AVINASH" },
        { roll: "231080065", name: "SHIVAM HEMNANI" },
        { roll: "231080066", name: "SHUBH KAUSHIK SARVAIYA" },
        { roll: "231080068", name: "SIRSATH PRAMOD ZUMBAR" },
        { roll: "231080072", name: "UPADHYAY ABHAY RAJESH" },
        { roll: "231080075", name: "VEDANG MAHESH MORE" },
        { roll: "231080076", name: "VERMA AMAL BHARAT" },
        { roll: "231080077", name: "VOHRA ZOHER TAHERI" },
        { roll: "231080078", name: "WAGHMARE UDAY MADHUKAR" },
        { roll: "231080079", name: "WAJE SAHIL TATYABHAU" },
        { roll: "231081001", name: "DIVA SHARMA" },
        { roll: "231081002", name: "ARUSHI RAJPUT" },
        { roll: "231081008", name: "ANANYA PREMAN" },
        { roll: "231081018", name: "CHAUDHARI KHUSHBU VINAY" },
        { roll: "231081021", name: "DHANMANE DIKSHA NANDKISHOR" },
        { roll: "231081023", name: "GANDHI ANGELL JAYESH" },
        { roll: "231081025", name: "GHODESWAR SHREYA JOHN" },
        { roll: "231081034", name: "KAJAL KUMARI" },
        { roll: "231081037", name: "KORE SAKSHI VIPUL" },
        { roll: "231081042", name: "NAHAR PAANCHI SANJAY" },
        { roll: "231081057", name: "RAVAL RAJEE JAY" },
        { roll: "231081058", name: "RITHE VAISHNAVI NAMDEV" },
        { roll: "231081067", name: "SINGH SNEHA MUNESHWAR" },
        { roll: "231081069", name: "SONI JANVI PARAS" },
        { roll: "231081070", name: "SUTRAVE NANDINI NAGESH" },
        { roll: "231081071", name: "SWARALI PRAVIN BHUYAR" },
        { roll: "231081073", name: "UPASE TITHEE VIKAS" },
        { roll: "231081074", name: "VAISHVI KHANDELWAL" }
    ];
    const navigate = useNavigate();
    function getname(lastTwoDigits) {
        const student = studentsData.find(student => student.roll.endsWith(lastTwoDigits));
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
        const res = await fetch('http://localhost:8000/get-leaderboard');
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
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                    }}>{item.rank === -1 ? '-' : item.rank}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                    }}>
                                        {getname(item.roll)}
                                    </td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                    }}>
                                        {item.roll}
                                    </td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                    }}>{item.cgpa.toPrecision(4)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
                                    }}>{item.scores[0].sgpa.toPrecision(4)}</td>
                                    <td className="border px-4 py-2" style={{
                                        color: index === 0 ? 'gold' : index === 1 ? '#C0C0C0' : index === 2 ? '#cd7f32' : ''
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

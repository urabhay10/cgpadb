const { get } = require('http');

const fs = require('fs').promises;

async function getPoints(ch) {
    if (ch == "AA") {
        return 10;
    } else if (ch == "AB") {
        return 9;
    } else if (ch == "BB") {
        return 8;
    } else if (ch == "BC") {
        return 7;
    } else if (ch == "CC") {
        return 6;
    } else if (ch == "CD") {
        return 5;
    } else if (ch == "DD") {
        return 4;
    } else if (ch == "FF") {
        return 0;
    }
}

async function getGrade(filename, roll) {
    try {
        console.log(__dirname + '/marks/' + filename)
        const data = await fs.readFile(__dirname + '/marks/' + filename, 'utf-8');
        console.log(data);
        const result = JSON.parse(data);
        for (let i = 0; i < result.length; i++) {
            if (result[i].hasOwnProperty(roll)) {
                return result[i][roll]; // Access the value associated with the roll number
            }
        }
        console.error('error') // Return null if the roll number is not found
        return "FF"
    } catch (error) {
        console.error('An error occurred:', error);
        return "FF"; // Return a default value in case of an error
    }
}

async function getResult(roll) {
    try {
        console.log(roll);
        //emth
        let emth = await getGrade('emth.json', roll);
        emth = await getPoints(emth);
        // console.log(typeof emth, emth)
        // await new Promise(resolve => setTimeout(resolve, 6000));
        //emlab
        let emlab = await getGrade('emlab.json', roll);
        emlab = await getPoints(emlab);
        //chemlab
        let chemlab = await getGrade('chemlab.json', roll);
        chemlab = await getPoints(chemlab);
        //chemth
        let chemth = await getGrade('chemth.json', roll);
        chemth = await getPoints(chemth);
        //math
        let math = await getGrade('math.json', roll);
        math = await getPoints(math);
        //frb2
        let frb2 = await getGrade('frb2.json', roll);
        frb2 = await getPoints(frb2);
        //iks
        let iks = await getGrade('iks.json', roll);
        iks = await getPoints(iks);
        //cppsth
        let cppsth = await getGrade('cppsth.json', roll);
        cppsth = await getPoints(cppsth);
        //cppslab
        let cppslab = await getGrade('cppslab.json', roll);
        cppslab = await getPoints(cppslab);
        const result = {
            roll: roll,
            emth: emth,
            emlab: emlab,
            chemlab: chemlab,
            chemth: chemth,
            math: math,
            frb2: frb2,
            iks: iks,
            cppsth: cppsth,
            cppslab: cppslab,
            pointer: (emth * 2 + emlab + chemlab * 1 + chemth * 2 + math * 3 + frb2 * 2 + iks * 2 + cppsth * 2 + cppslab) / (2 * Boolean(emth) + Boolean(emlab) + Boolean(chemlab) + Boolean(chemth) * 2 + Boolean(math) * 3 + Boolean(frb2) * 2 + Boolean(iks) * 2 + Boolean(cppsth) * 2 + Boolean(cppslab))
        }
        let data = await fs.readFile(__dirname + '/marks/res.json', 'utf-8');
        let res = JSON.parse(data);
        res.push(result);
        await fs.writeFile(__dirname + '/marks/res.json', JSON.stringify(res));
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function getRank() {
    try {
        let data = await fs.readFile(__dirname + '/marks/res.json', 'utf-8');
        let res = JSON.parse(data);
        res.sort((a, b) => {
            //if a has kt and b doesn't, place a at bottom
            if (a.kt && !b.kt) {
                return 1;
            }
            //if b has kt and a doesn't, place b at bottom
            if (b.kt && !a.kt) {
                return -1;
            }
            //if both have kt, place the one with lower pointer at bottom
            if (a.kt && b.kt) {
                return b.pointer - a.pointer;
            }
            return b.pointer - a.pointer;
        });
        let ptr = 1;
        for (let i = 0; i < res.length; i++) {
            if(res[i].kt) {
                res[i].rank = -1;
                continue;
            }
            res[i].rank = ptr;
            ptr++;
        }
        await fs.writeFile(__dirname + '/marks/res.json', JSON.stringify(res));
    } catch (error) {
        console.error('An error occurred:', error);
    }

}

async function noofkt() {
    let fulldata=[];
    try {
        let data = await fs.readFile(__dirname + '/marks/res.json', 'utf-8');
        let res = JSON.parse(data);
        console.log(res[0].length)
        for (let i = 0; i < res[0].length; i++) {
            let kt = Boolean(!res[0][i].emth)+Boolean(!res[0][i].emlab)+Boolean(!res[0][i].chemlab)+Boolean(!res[0][i].chemth)+Boolean(!res[0][i].math)+Boolean(!res[0][i].frb2)+Boolean(!res[0][i].iks)+Boolean(!res[0][i].cppsth)+Boolean(!res[0][i].cppslab);
            res[0][i]['kt']=kt;
            console.log(res[0][i]);
            fulldata.push(res[0][i]);
        }
        fs.writeFile(__dirname + '/marks/res.json', JSON.stringify(fulldata));
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function blah() {
    try {
        // for (let i = 1; i <= 79; i++) {
        //     await getResult(String(i))
        // }
        await getRank();
        // await noofkt();
    } catch (error) {
        console.error('An error occurred:', error);
    }
    // console.log(await getPoints("BB"));
}

blah();

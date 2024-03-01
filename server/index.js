const express = require('express');
const app = express();
const fs = require('fs').promises;
const cors = require('cors');
app.use(cors());
app.use(express.json());

async function getRes(roll) {
    roll = roll.toString();
    const data = await fs.readFile(__dirname + '/marks/' + 'res.json', 'utf-8');
    const result = JSON.parse(data);
    for (let i = 0; i < result.length; i++) {
        if (result[i].roll === roll) {
            return result[i];
        }
    }
    return null;
}

app.get('/get-res', async (req, res) => {
    console.log(req.query.roll);
    const roll = req.query.roll;
    const result=await getRes(roll)
    console.log(result);
    res.send(result);
});

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`The server is running at ${port}`)
})
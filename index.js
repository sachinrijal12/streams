const express = require("express");
const fs = require("fs");
const zlib = require("zlib");

const app = express();
const PORT = 8000;


fs.createReadStream("./sachin.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sachin.zip"))
);

app.get("/", (req, res) => {
    const stream = fs.createReadStream('./sachin.txt', 'utf-8');
    stream.on('data', (chunk) => res.write(chunk));
    stream.on("end", () => res.end());
});


app.listen(PORT, () =>
    console.log(`server started at the port 8000`));
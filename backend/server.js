const express= require('express');
cnost cors= require('cors');

require('dotenv').config();

const app= express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
})

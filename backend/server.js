import express from "express";
const port = 5000;

const app = express();

app.listen(port, () => console.log(`App is live on port ${port}`));

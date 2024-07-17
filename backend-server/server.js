import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth.js';
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res)=> {
    res.send("Hello, world");
})
app.use('/api/auth', authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));

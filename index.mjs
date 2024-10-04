import express from 'express'
import cors from 'cors'
import { DEFAUL_ITEMS } from './data/items.mjs';
let app = express();
let PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/api/data',(req,res) => {
  res.status(200).json(DEFAUL_ITEMS)
})

app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`);
})
import express from 'express';
import cors from 'cors';
import prRoutes from './routes/prRoutes.js';
import financeRoutes from './routes/financeRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/prs', prRoutes);
app.use('/api/finance', financeRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
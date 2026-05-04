import express from 'express';
import { getVariance, getForecast } from '../services/financeService.js';

const router = express.Router();

router.get('/variance', async (req, res) => {
  res.json(await getVariance());
});

router.get('/forecast', async (req, res) => {
  res.json(await getForecast());
});

export default router;
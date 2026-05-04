import { pool } from '../config/db.js';

export const getPRs = async (req, res) => {
  const result = await pool.query('SELECT * FROM purchase_requests');
  res.json(result.rows);
};

export const createPR = async (req, res) => {
  const { title, vendor, amount, category, region } = req.body;

  const result = await pool.query(
    `INSERT INTO purchase_requests 
    (title, vendor, amount, category, region, status)
    VALUES ($1,$2,$3,$4,$5,'pending') RETURNING *`,
    [title, vendor, amount, category, region]
  );

  res.json(result.rows[0]);
};
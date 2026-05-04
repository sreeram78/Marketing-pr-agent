import { pool } from '../config/db.js';

export const getVariance = async () => {
  const result = await pool.query(`
    SELECT 
      b.category,
      b.allocated_amount,
      COALESCE(SUM(i.amount),0) AS actuals,
      (b.allocated_amount - COALESCE(SUM(i.amount),0)) AS variance
    FROM aop_budget b
    LEFT JOIN purchase_requests p ON p.category = b.category
    LEFT JOIN invoices i ON i.pr_id = p.id
    GROUP BY b.category, b.allocated_amount
  `);

  return result.rows;
};

export const getForecast = async () => {
  const result = await pool.query(`
    SELECT 
      p.category,
      SUM(i.amount) as actuals
    FROM invoices i
    JOIN purchase_requests p ON i.pr_id = p.id
    GROUP BY p.category
  `);

  const currentMonth = new Date().getMonth() + 1;

  return result.rows.map(r => ({
    category: r.category,
    forecast: Math.round((r.actuals / currentMonth) * 12)
  }));
};
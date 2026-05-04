CREATE TABLE purchase_requests (
    id SERIAL PRIMARY KEY,
    pr_code VARCHAR(20),
    title TEXT,
    vendor TEXT,
    amount NUMERIC,
    category TEXT,
    region TEXT,
    status VARCHAR(20)
);

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    pr_id INT,
    amount NUMERIC,
    status VARCHAR(20)
);

CREATE TABLE aop_budget (
    id SERIAL PRIMARY KEY,
    category TEXT,
    allocated_amount NUMERIC
);
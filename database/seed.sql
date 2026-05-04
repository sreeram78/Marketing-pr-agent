INSERT INTO purchase_requests (pr_code, title, vendor, amount, category, region, status)
VALUES
('PR-001','Diwali Campaign','Meta',500000,'Digital Media','India','approved');

INSERT INTO invoices (pr_id, amount, status)
VALUES
(1,250000,'paid');

INSERT INTO aop_budget (category, allocated_amount)
VALUES
('Digital Media',5000000);
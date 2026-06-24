USE arya_db;

INSERT INTO categories (name)
VALUES
('Aromáticas'),
('Decorativas');

INSERT INTO products (name, description, image, aroma, stock, price, category_id)
VALUES
(
'Vela Vainilla',
'Aroma suave y cálido ideal para momentos de relajación.',
'vela-vainilla.png',
'Vainilla',
10,
18500,
1
),

(
'Vela Calma',
'Notas suaves para un ambiente relajante.',
'vela-calma.png',
'Lavanda',
8,
21000,
1
),

(
'Vela Alegría',
'Blend floral con vainilla blanca.',
'vela-alegria.png',
'Flores y vainilla',
12,
22000,
1
);
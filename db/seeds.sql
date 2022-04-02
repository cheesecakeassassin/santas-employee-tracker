INSERT INTO department
    (name)
VALUES
    ('Customer Service'),
    ('Marketing'),
    ('Software Development');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Clerk', 25000, '1'),
    ('Live Chat Representative', 30000, '1'),
    ('Supervisor', 35000, '1'),
    ('Influencer', 40000, '2'),
    ('Graphic Designer', 45000, '2'),
    ('Social Media Manager', 50000, '2'),
    ('Junior Programmer', 60000, '3'),
    ('Database Manager', 100000, '3'),
    ('Senior Software Developer', 120000, '3');

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Kevin', 'Burns', 1, 9),
    ('Sergey', 'Karjakin', 1, 9),
    ('Rameshbabu', 'Pragnanandhaa', 1, 9),
    ('Samuel', 'Shankland', 1, 9),
    ('Hou', 'Yifan', 2, 9),
    ('Amin', 'Tabatabaei', 2, 9),
    ('Bruno', 'Fernandes', 2, 9),
    ('Luis', 'Diaz', 2, 9),
    ('Yaya', 'Toure', 3, NULL),
    ('David', 'De Gea', 4, 18),
    ('Rosa', 'Parks', 4, 18),
    ('Dina', 'Belenkaya', 4, 18),
    ('Anna', 'Rudolf', 4, 18),
    ('Fiona', 'Antoni', 5, 18),
    ('Tony', 'Grayson', 5, 18),
    ('Rory', 'McClroy', 5, 18),
    ('Luke', 'Shaw', 5, 18),
    ('Trent', 'Arnold', 6, NULL),
    ('Anthony', 'Martial', 7, 27),
    ('Magnus', 'Carlsen', 7, 27),
    ('Ian', 'Nepomniatchtchi', 7, 27),
    ('Daniil', 'Dubov', 7, 27),
    ('Vasyl', 'Ivanchuk', 7, 27),
    ('Viswanathan', 'Anand', 7, 27),
    ('Bobby', 'Fischer', 7, 27),
    ('Wayne', 'Rooney', 8, 27),
    ('Hikaru', 'Nakamura', 9, NULL);
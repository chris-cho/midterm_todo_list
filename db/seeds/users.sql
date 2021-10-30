INSERT INTO users (name, email, password)
VALUES
  ('Alice', 'alice@email.com', '1234'),
  ('Kira', 'kira@email.com', '4321');

INSERT INTO lists (user_id, name, active, date_created, due_date)
VALUES
  (1, 'Alices To-Do List!', true, '2021-10-25', '2021-12-31'),
  (2, 'Kiras To-Do List!', true, '2021-10-25', '2021-12-31');

INSERT INTO tasks (user_id, list_id, activity_id, active, date_created, due_date)
VALUES
  (1, 1, 1000, true, '2021-10-25', '2021-12-31'),
  (1, 1, 2000, true, '2021-10-25', '2021-12-31'),
  (1, 1, 3000, true, '2021-10-25', '2021-12-31'),
  (2, 2, 1001, true, '2021-10-25', '2021-12-31'),
  (2, 2, 2001, true, '2021-10-25', '2021-12-31'),
  (2, 2, 3001, true, '2021-10-25', '2021-12-31');

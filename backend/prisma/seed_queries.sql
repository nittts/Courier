INSERT INTO userTypes("type")
VALUES
('Admin'),('Manager'),('Employee'),('Client');

INSERT INTO cities("name", "postcode")
VALUES
('Cidade 1', '12334556789'),
('Cidade 2', '12334556789'),
('Cidade 3', '12334556789'),
('Cidade 4', '12334556789');

INSERT INTO branches("name", "address", "city_id", "branch_lat", "branch_long")
VALUES
('branch-1', 'rua 1', 1, '123466778435'),
('branch-2', 'rua 2', 2, '123466778435'),
('branch-3', 'rua 3', 3, '123466778435'),
('branch-4', 'rua 4', 4, '123466778435');

INSERT INTO users("id", "name", "email", "password", "phone", "userType_id", "branch_id")
VALUES
('0f2196b7-dc8d-4e81-a4c3-34c374fc4e4f', 'Admin', 'sudo@sudo.com','$2y$10$eEndac041EOh8sbwYMdL8OICY0VQVNRUGM2/QgMrOb.RYdWIox18y', '123456', 1, 1);
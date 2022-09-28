INSERT INTO department(name)
VALUES ("Finance"),
       ("IT"),
       ("Customer Service"),
       ("Legal"),
       ("Sales"),
       ("Engineering");


INSERT INTO role (title, salary, department_id)
VALUES ("Financial Analyst", 60000, 1),
       ("CFO", 90000, 1),
       ("IT Support", 50000, 2),
       ("IT Analyst", 53000, 2),
       ("Customer Service Rep", 45000, 3),
       ("Account Manager", 50000, 3),
       ("Lawyer", 70000, 4),
       ("Legal analyst", 65000, 4),
       ("Salesperson", 47500, 5),
       ("Sales Manager", 48000, 5),
       ("Software Engineer", 80000, 6),
       ("DevOps", 85000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Skyla", "Bateman", 1 , 2),
        ("Rogan", "Adam", 2 , NULL),
        ("Ollie", "Penn", 8 , 4),
        ("Harlee", "Sanchez", 7 , NULL),
        ("Alec", "Warren", 9, 6),
        ("Gage", "Grainger", 10, NULL),
        ("Kiana", "Beach", 11 , 8),
        ("Christie", "Michael", 12 , NULL),
        ("Woodrow", "Emery", 3 , 10),
        ("Mikayala", "Meza", 4 , NULL);

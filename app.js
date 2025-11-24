const express = require('express');
const app = express();

// Sample employee data
const employees = [
  { id: 1, name: 'John Doe', position: 'Developer', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Design' },
  { id: 3, name: 'Bob Johnson', position: 'Manager', department: 'Operations' },
  { id: 4, name: 'Alice Brown', position: 'Analyst', department: 'Finance' },
  { id: 5, name: 'Charlie Wilson', position: 'HR Specialist', department: 'Human Resources' }
];

// GET / - sends "Hello employees!"
app.get('/', (req, res) => {
  res.send('Hello employees!');
});

// GET /employees - sends the array of employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// GET /employees/random - sends a random employee
app.get('/employees/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

// GET /employees/:id - sends the employee with the given id
app.get('/employees/:id', (req, res) => {
  const employeeId = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === employeeId);
  
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  
  res.json(employee);
});

module.exports = app;
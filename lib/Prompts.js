const inquirer = require('inquirer');
// Package to facilitate displaying sql tables in the console
const cTable = require('console.table');
const fetch = require('cross-fetch');

//TODO: Figure out how to do api calls to retrieve information outside of Insomnia
const getDepartments = () => {
    fetch('http://localhost:3001/api/department', {
        method: 'GET',
    });
};

const getRoles = () => {
    fetch('http://localhost:3001/api/role', {
        method: 'GET',
    });
};

const getEmployees = () => {
    fetch('http://localhost:3001/api/employee', {
        method: 'GET',
    });
};

const addDepartment = (name) => {
    fetch('http://localhost:3001/api/department', {
        method: 'POST',
        body: `${name}`
    });
};

const addRole = (name) => {
    fetch('http://localhost:3001/api/role', {
        method: 'POST',
        body: `${name}`
    });
};

const addEmployee = (name) => {
    fetch('http://localhost:3001/api/employee', {
        method: 'POST',
        body: `${name}`
    });
};

const updateEmployeeRole = (id, name) => {
    fetch(`http://localhost:3001/api/employee/${id}`, {
        method: 'PUT',
        body: `${name}`
    });
};

// Starts inquirer prompts
function startEmployeeTracker() {
    inquirer
        .prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View departments',
                'View roles',
                'View employees',
                'Add department',
                'Add role',
                'Add employee',
                'Update employee role',
                'Exit'
            ],
        })
        .then(({ action }) => {
            if (action === 'View departments') {
                console.table(getDepartments());
                startEmployeeTracker();
            } else if (action === 'View roles') {
                console.table(getRoles());
                startEmployeeTracker();
            } else if (action === 'View employees') {
                console.table(getEmployees());
                startEmployeeTracker();
            } else if (action === 'Add department') {
                addDepartmentPrompt();
            } else if (action === 'Add role') {
                addRolePrompt();
            } else if (action === 'Add employee') {
                addEmployeePrompt();
            } else if (action === 'Update employee role') {
                updateEmployeeRolePrompt();
            } else {
                console.log("Thank you!");
            }
        });
}

function addDepartmentPrompt() {
    inquirer
        .prompt({
            type: 'input',
            name: 'department',
            message: 'What would you like to name the department?',
        })
        .then(({ department }) => {
            addDepartment(department);
            startEmployeeTracker();
        });
}

function addRolePrompt() {
    inquirer
        .prompt({
            type: 'input',
            name: 'role',
            message: 'What would you like to name the role?',
        })
        .then(({ role }) => {
            addRole(role);
            startEmployeeTracker();
        });
}

function addEmployeePrompt() {
    inquirer
        .prompt({
            type: 'input',
            name: 'employee',
            message: 'What would you like to name the employee?',
        })
        .then(({ employee }) => {
            addEmployee(employee);
            startEmployeeTracker();
        });
}

function updateEmployeeRolePrompt() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'id',
            message: "Which employee's role would you like to change?",
        },
        {
            type: 'input',
            name: 'roleName',
            message: 'What is their new role?'
        }])
        .then(({ id, roleName }) => {
            updateEmployeeRole(id, roleName);
            startEmployeeTracker();
        });
}

module.exports = startEmployeeTracker;

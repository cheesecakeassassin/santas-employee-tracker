const inquirer = require('inquirer');
// Package to facilitate displaying sql tables in the console
const cTable = require('console.table');

//TODO: Figure out how to do api calls to retrieve information outside of Insomnia
const getDepartments = () =>
    fetch('/api/department', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

// Starts inquirer prompts
function startEmployeeTracker() {
    console.log("Welcome to Santa's Employee Tracker!");

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
            ],
        })
        .then(({ action }) => {
            if (action === 'View departments') {
                console.log('Working!')
                console.table(getDepartments);
            }
        });
}

module.exports = startEmployeeTracker;

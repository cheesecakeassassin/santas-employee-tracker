const inquirer = require('inquirer');
// Package to facilitate displaying sql tables in the console
const cTable = require('console.table');


class Prompts {
    // Neatly displays the tables in the console using console.table npm package
    displayNeatly(body) {
        return console.table(body);
    }

    startEmployeeTracker() {
        
    }
}

module.exports = { displayNeatly, Prompts };
#!/usr/bin/env node
const faker = require('faker');
const fs = require('fs');

function generateTodo() {
    return {
        id: faker.random.uuid(),
        description: faker.lorem.sentence()
    };
}

function generateTodos() {
    return new Array(faker.random.number(20)+1)
        .fill(null)
        .map(generateTodo);
}

function generateDb(){
    return {
        todos: generateTodos()
    };
}

if (require.main === module) {
    fs.writeFileSync("./generated/db.json", JSON.stringify(generateDb(), null, 2));
}
/* B"H
*/
const data = require('../data/users.json');



function getAll() {
    return data.items;
}

function get(id) {
    return data.items.find(item => item.id == id);
}

function search(q) {
    return data.items.filter(item => 
        new RegExp(q, 'i').test(item.firstName) ||
        new RegExp(q, 'i').test(item.lastName) ||
        new RegExp(q, 'i').test(item.email) );
}

module.exports = {
    getAll, get, search
}
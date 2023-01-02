
function addObject(name,address_street,country,users) {
    let user_d = {name, 
     address_street, 
     country}
     users.push(user_d)
 }

 module.exports = {
    addObject
 }
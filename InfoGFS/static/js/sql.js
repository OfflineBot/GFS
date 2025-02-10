let input_name = document.getElementById('name')
let input_password = document.getElementById('password')
let output = document.getElementById('sql-key')
output.innerText = "SELECT * FROM database WHERE name = '' AND password = ''"

input_name.addEventListener('input', () => {
    output.innerText = `SELECT * FROM database WHERE name = '${input_name.value}' AND password = '${input_password.value}'` 
})
input_password.addEventListener('input', () => {
    output.innerText = `SELECT * FROM database WHERE name = '${input_name.value}' AND password = '${input_password.value}'` 
})
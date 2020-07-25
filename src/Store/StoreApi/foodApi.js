export const getOrderDetails = (empId) => {
    
    return fetch(`https://jsonplaceholder.typicode.com/users/${empId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json().then(data =>({
        status:response.status,
        data
    })))
        .catch(err => {throw err})
}
export const getAllOrderDetails = () => {
    
    return fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json().then(data =>({
        status:response.status,
        data
    })))
        .catch(err => {throw err})
}

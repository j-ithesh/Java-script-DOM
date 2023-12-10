import axios from 'axios';

const usersList = document.getElementById('usersList')

axios.get('http://localhost:3000/users')
  .then(data=>{
    const users = (data.data)
    usersList.innerHTML = ''
    for(let i=0; i<users.length; i++){
        console.log(users[i])
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        h3.innerHTML = users [i].name
        const span = document.createElement('span')
        span.innerHTML = users[i].email

        li.append(h3)
        li.append(span)

        usersList.append(li)
    }
    
  })
  .catch(error=>{
    console.log(error)

  })
    
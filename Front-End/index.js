import axios from 'axios';
 
const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const name = form['name'].value
    const email = form['email'].value
    const password = form['password'].value
    const bio = form ['bio'].value

    const body = {
        name : name,
        email : email,
        password : password,
        bio : bio
    }
      axios.post('http://localhost:3000/Sign-up',body)
      .then(data=>console.log(data))
      .catch(error=>console.log(error))
})
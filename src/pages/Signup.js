
import { signup } from "../api/products";
import { useEffect } from "../lib";
import { router } from "../lib";
const Signup = () => {

  useEffect(() => {
    const signupForm = document.querySelector('#signup-form')
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const userNew = {
        "username": document.querySelector('#username').value,
        "email": document.querySelector('#email').value,
        "password": document.querySelector('#password').value,
       
      }
      signup(userNew).then(() => {
        router.navigate('/')
        alert("Đăng ký thành công")
      })
    })

  })

  return /*html*/`
   
     
       
<form  id="signup-form">

<label class="form-lable">Username</label>
<input type="text" id="username" class="form-control" required>


  <label for="email" class="form-lable">Your email</label>
  <input type="tex"  id="email" class="form-control"  required>


  <label for="password" class="form-lable">Your password</label>
  <input type="password" id="password" class="form-control" required>


<button type="submit" class="btn btn-warning">submit</button>
</form>

      
      </main>
    `
}

export default Signup;
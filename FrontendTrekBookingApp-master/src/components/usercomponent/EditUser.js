import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {
    let navigate = useNavigate();
    const {id} = useParams();
    const [user, setuser] = useState({
      name: "",
    
      email: "",
      password: "",
      
    });
    const {name, email, password} = user;

    const onInputChange= (e) =>{
        setuser({...user, [e.target.name]:e.target.value});
    } 

    useEffect(() => {
      loaduser();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:8080/api/users/update/${id}`,user)
          .then((res) => {
            
            console.log("signed up");
            console.log(res.data);
            navigate("/userlist");
          })
          .catch((err) => console.error(err));
      };

      const loaduser = async () => {
        const result = await axios.get(`http://localhost:8080/api/users/${id}`);
        setuser(result.data);
        console.log(result.data);
      };
  return (
    <div>
       <div>
     
        
     <Form onSubmit={handleSubmit}>
       <div  className="mb-3" container direction="column" spacing={2}>
         <div item>
           <input
             fullWidth
             className="form-control"
             label="Enter your name"
             placeholder="Name"
             variant="outlined"
             name='name'
             value={name}
             onChange={(e) => onInputChange(e)
             }
           />
         </div>

        


         <div item>
           <input
           className="form-control"
             type="email"
             fullWidth
             label="Enter your email"
             placeholder="Email Address"
             variant="outlined"
             value={email}
             name='email'
             onChange={(e) => onInputChange(e)
             }
           />
         </div>
         <div item>
           <input
           className="form-control"
            
             fullWidth
             label="Password"
             placeholder="Password"
             variant="outlined"
             required
             value={password}
             name='password'
             onChange={(e) => onInputChange(e)}
           
           />
         </div>
         <div item>
           <Button type="submit" fullWidth variant="contained">
             Update User 
           </Button>
         </div>
       </div>
     </Form>
   
 </div>

    </div>
  )
}

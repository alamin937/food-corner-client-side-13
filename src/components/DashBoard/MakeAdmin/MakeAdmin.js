import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleChange = e =>{
        const value = e.target.value
        setEmail(value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        const user = {email}

        fetch('http://localhost:5000/users/admin', {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('added Successfully')
            }
        })
    }



    return (
        <div>
           <form onSubmit={handleSubmit}>
           <TextField
           label="Admin"
           onChange={handleChange}
            variant="standard" /> <br />
            <Button type='submit' variant='contained'>Add Admin</Button>
           </form> 
        </div>
    );
};

export default MakeAdmin;
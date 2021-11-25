import { Typography,Box } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const [successfull, setSuccessfull] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://evening-ridge-81485.herokuapp.com/review', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccessfull(true)
            }
        })
    };
    return (
       <Box>
           <Typography variant='h4'>
               Review 
           </Typography>
             <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Rating 0-5" style={{width:'300px', marginTop:'10px', padding:'5px'}} {...register("rating")} /> <br />
            <textarea placeholder="Write Something" style={{width:'300px', marginTop:'10px', padding:'5px', height:'200px'}} {...register("reviewWrite")} /> <br />
            <input style={{width:'300px', marginTop:'10px', padding:'10px', backgroundColor:'blue', border:'0', color:'white'}} type="submit" />
        </form>
        {successfull && <p>Added SuccessFully</p>}
       </Box>
    );
};

export default Review;
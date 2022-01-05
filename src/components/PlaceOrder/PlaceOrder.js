import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './PlaceOrder.css'
import UseAuth from '../../UseHooks/UseAuth';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const PlaceOrder = () => {
    const [successfull, setSuccessfull] = useState(false)
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://evening-ridge-81485.herokuapp.com/placeorder', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                setSuccessfull(true)
                reset({ })
            }
        })
    };

    const { user } = UseAuth()
    const { foodId } = useParams();
    const [singles, setSingles] = useState({})
    useEffect(() => {
        const url = `https://evening-ridge-81485.herokuapp.com/foods/${foodId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingles(data))
    }, [foodId])

    return (
        <Box>
            <Box style={{ width: '90%', margin: '0 auto', marginTop: '40px' }} sx={{ flexGrow: 1 }}>
                
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card style={{borderRadius:'30px', backgroundColor:'black', color:'white'}} sx={{ minWidth: 275 }}>
                            <CardMedia style={{width:'70%', margin:'0 auto', marginTop:'20px', borderRadius:'20px'}}
                                component="img"
                                height="250"
                                image={`data:image/jpg;base64,${singles.img}`}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

                                </Typography>
                                <Typography variant="h5" component="div">
                                    {singles.foodName}
                                </Typography>
                                <Typography style={{color:'white'}} sx={{ mb: 1.5 }} >
                                    Price:$ {singles.price}
                                </Typography>
                                <Typography variant="body2">
                                    {singles.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                       <div style={{borderTop:'30px solid grey', borderRight:'30px solid yellow', borderBottom:'30px solid grey', borderRadius:'20px'}}>
                       <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} style={{width:'300px', padding:'10px 20px',marginTop:'10px', borderRadius:'20px'}} {...register("userName")} /> <br />
                            <input defaultValue={user.email} style={{width:'300px', padding:'10px 20px',marginTop:'10px',borderRadius:'20px'}} {...register("email")} /> <br />
                            <input placeholder='Address' style={{width:'300px', padding:'10px 20px',marginTop:'10px',borderRadius:'20px'}} {...register("address")} /> <br />
                            <input placeholder='Phone' style={{width:'300px', padding:'10px 20px',marginTop:'10px',borderRadius:'20px'}} {...register("phone")} /> <br />
                            <input placeholder="Food Name" style={{width:'300px', padding:'10px 20px',marginTop:'10px',borderRadius:'20px'}} {...register("foodName")} /> <br />
                            <input value={singles.price} style={{width:'300px', padding:'10px 20px',marginTop:'10px',borderRadius:'20px'}} {...register("foodPrice")} /> <br />
                            
                            <input style={{width:'310px', padding:'10px 20px',marginTop:'10px',borderRadius:'20px', backgroundColor:'blue', border:'0', color:'white'}} type="submit" />
                        </form>
                        {successfull && <p>Successfully Place</p>}
                        <Link to='/home'><Button style={{ marginTop: '10px', width: '400px' , padding:'10px 20px', marginBottom:'10px'}} variant='contained'>Back Home</Button></Link>
                       </div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default PlaceOrder;
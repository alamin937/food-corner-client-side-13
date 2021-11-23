import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddFoods = () => {
    const [foodName, setFoodName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState(null)


    const handleSubmit = e => {
        e.preventDefault()
        if (!img) {
            return;
        }
        const formData = new FormData();
        formData.append('foodName', foodName)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('img', img)
        fetch('http://localhost:5000/foods', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.insertedId){
                    alert('food Added Successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }



    return (
        <div>
            <h1>Add Foods</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    style={{ width: '300px' }}
                    label="Food Name"
                    onChange={e => setFoodName(e.target.value)}
                    variant="standard" /> <br />
                <TextField
                    required
                    style={{ width: '300px', marginTop: '10px' }}
                    label="Food Price"
                    onChange={e => setPrice(e.target.value)}
                    variant="standard" /> <br />
                <textarea
                    required
                    placeholder='Description'
                    style={{ width: '300px', marginTop: '20px', height: '150px' }}
                    label="Food Description"
                    onChange={e => setDescription(e.target.value)}
                    variant="standard" /> <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImg(e.target.files[0])}
                />
                <br />
                <Button style={{ width: '300px', marginTop: '10px' }} variant="contained" type='submit'>
                    Add Foods
                </Button>

            </form>
        </div>
    );
};

export default AddFoods;
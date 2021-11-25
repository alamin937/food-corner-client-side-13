import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UseAuth from '../../../UseHooks/UseAuth';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const [email, setEmail] = useState([])

    const handleDelete = id =>{
        const proccess = window.confirm('Are You Sure You Want To Delete')
        if(proccess){
            fetch(`https://evening-ridge-81485.herokuapp.com/placeorder/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert('Deleted SuccessFully')
                    const remaining = email.filter(ema => ema._id !==id)
                    setEmail(remaining)
                }
            })
        }
}





    const { user } = UseAuth()
    useEffect(() => {
        const url = `https://evening-ridge-81485.herokuapp.com/placeorder/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setEmail(data))
    }, [user.email])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Food Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell  align="right">Action </TableCell>
                        <TableCell  align="right">Payment </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {email.map((row) => (
                        <TableRow
                            key={row.userName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right" component="th" scope="row">
                                {row.userName}
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.foodName}</TableCell>
                            <TableCell align="right">{row.foodPrice}</TableCell>
                            <TableCell align="right"> <Button variant='contained' onClick={() => handleDelete(row._id)}>Cancel</Button> </TableCell>
                            <TableCell align="right">{row.payment ? 
                            'Paid' : 
                            <Link to={`/dashboard/payment/${row._id}`}> <button>Pay</button> </Link>
                            }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyOrder;
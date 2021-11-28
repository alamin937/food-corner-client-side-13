import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageOrder = () => {
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
    
    useEffect(() =>{
        const url = 'https://evening-ridge-81485.herokuapp.com/placeorder'
        fetch(url)
        .then(res => res.json())
        .then(data => setEmail(data))
    },[])
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'blue'}}>
          <TableRow >
            <TableCell style={{color:'white'}} align="right">Name</TableCell>
            <TableCell style={{color:'white'}} align="right">Email</TableCell>
            <TableCell style={{color:'white'}} align="right">Address</TableCell>
            <TableCell style={{color:'white'}} align="right">Phone</TableCell>
            <TableCell style={{color:'white'}} align="right">Food Name</TableCell>
            <TableCell style={{color:'white'}} align="right">Action </TableCell>
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
              <TableCell align="right"> <Button variant='contained' onClick={() => handleDelete(row._id)}>Cancel</Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ManageOrder;
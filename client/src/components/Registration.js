import React from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Container,
  Box,
} from '@mui/material';
import axios from 'axios';

const Registration = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();

  const onSubmit = (data) => {
    data.role = "user"; 
    console.log('Submitted Data:', data);
    
    axios.post('http://localhost:9000/adduser',{data})
    .then(response => {
      console.log(response.data); 
    })
    .catch(error => {
      console.error(error);
    });

  };

  // axios.get('http://localhost:9000/users')
  // .then(response => {
  //   console.log(response.data); 
  // })
  // .catch(error => {
  //   console.error(error);
  // });

  


  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="ID"
            fullWidth
            margin="normal"
            {...register('id', { required: 'ID is required' })}
            error={!!errors.id}
            helperText={errors.id?.message}
          />

          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Gender"
            select
            fullWidth
            margin="normal"
            defaultValue=""
            {...register('gender', { required: 'Gender is required' })}
            error={!!errors.gender}
            helperText={errors.gender?.message}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>

          <TextField
            label="Address"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            {...register('address', { required: 'Address is required' })}
            error={!!errors.address}
            helperText={errors.address?.message}
          />

          <TextField
            label="Phone"
            fullWidth
            margin="normal"
            {...register('phone', {
              required: 'Phone is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit phone number',
              },
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />

          <TextField
            label="Username"
            fullWidth
            margin="normal"
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          
          <input type="hidden" value="user" {...register('role')} />

          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Registration;

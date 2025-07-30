import {React,useState} from 'react'
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
    FormControl,
    InputLabel,
    Select,
} from '@mui/material';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'

const Register = () => {

    const [formData,setFormData] = useState({
        name: "",
        gender:"",
        address:"",
        phone:"",
        role:"user",
        uname:"",
        password:"",
    });

    const [errors,setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () =>{
        const newErrors = {};
        if(!formData.name.trim()) newErrors.name = "Name is Required";
        if(!formData.gender.trim()) newErrors.gender = "Gender is Required";
        if(!formData.address.trim()) newErrors.address = "Address is Required";
        if(!formData.phone.trim()) newErrors.phone = "Phone No is Required";
        if(!formData.uname.trim()) newErrors.uname = "User Name is Required";
        if(!formData.password.trim()) newErrors.password = "Password is Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev)=>({...prev,[name]: value}))
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            alert('Registration Success.');
            
            axios.post('http://localhost:9000/adduser',formData)
                .then(response => {
                    console.log(response.data); 
                    navigate('/Viewusers');
                })
                .catch(error => {
                    console.error(error);
                });
            
            setErrors({});
        };
    }
    



  return (
   
    <>

        <div className='d-flex bg-primary  g-2 p-3' style={{height:'1000px'}}>
            <div className='container'>
                <div className='p-2'>
                    <h1>Library Management</h1>
                    <Link className='btn btn-success float-end' to="/" >Back</Link>
                </div>
                <div className='alignitems-center mt-5'>
                    <Box 
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            maxWidth:600,
                            mx:"auto",
                            mt:5,
                            p:3,
                            border:"1px solid black",
                            backgroundColor:"white",
                        }}
                    >
                        <Typography variant='h3' mb={2} color='darkgrrey'>
                            Regiatration Form
                        </Typography>

                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            margin='normal'
                        />

                        <FormControl 
                            fullWidth
                            margin='normal'
                            error={!!errors.gender}
                        >
                            <InputLabel>Gender</InputLabel>
                            <Select
                                name='gender'
                                value={formData.gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                            </Select>

                        </FormControl>

                        <TextField
                            fullWidth
                            label="Address"
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            error={!!errors.address}
                            helperText={errors.address}
                            margin='normal'
                        />

                        <TextField
                            fullWidth
                            label="Phone"
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            margin='normal'
                        />

                        <TextField
                            fullWidth
                            label="User Name"
                            name='uname'
                            value={formData.uname}
                            onChange={handleChange}
                            error={!!errors.uname}
                            helperText={errors.uname}
                            margin='normal'
                        />

                        <TextField
                            fullWidth
                            label="Password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            margin='normal'
                        />

                        <Button
                            type='submit'
                            variant='contained'
                            fullWidth
                            sx={{mt:2}}

                        >
                            Register
                        </Button>

                    </Box>
                </div>
            </div>
        </div>
    
        
    
    </>

  )
}

export default Register
import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import axios from 'axios';


const Addbook = () => {
const navigate = useNavigate();
const [formData,setFormData] = useState({
        name: "",
        auther:"",
        price:"",
        description:"",
    });

    const [errors,setErrors] = useState({});

    const validate = () =>{
        const newErrors = {};
        if(!formData.name.trim()) newErrors.name = "Name is Required";
        if(!formData.auther.trim()) newErrors.auther = "Auther Name is Required";
        if(!formData.price.trim()) newErrors.price = "Price is Required";
        if(!formData.description.trim()) newErrors.description = "Description No is Required";

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
            alert('New Book Added.');
            
            axios.post('http://localhost:9000/addbook',formData)
                .then(response => {
                console.log(response.data); 
                navigate('/')
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
                        Add a Book
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

                    
                    <TextField
                        fullWidth
                        label="Author"
                        name='auther'
                        value={formData.auther}
                        onChange={handleChange}
                        error={!!errors.auther}
                        helperText={errors.auther}
                        margin='normal'
                    />

                    <TextField
                        fullWidth
                        label="Price"
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                        error={!!errors.price}
                        helperText={errors.price}
                        margin='normal'
                    />

                    <TextField
                        fullWidth
                        label="Description"
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        error={!!errors.description}
                        helperText={errors.description}
                        margin='normal'
                    />

                
                    <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{mt:2}}

                    >
                        Save
                    </Button>

                </Box>
            </div>
        </div>
    </div>
            
    
        
    
    </>

  )
}

export default Addbook
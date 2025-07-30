import {React,useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {
    Box,
    Typography,
    TextField,
    Button,
   
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Updatebook = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    // const [book, setBook] = useState([]);

    const [formData,setFormData] = useState({
        id:"",
        name: "",
        auther:"",
        price:"",
        description:"",
    });

        
    useEffect(()=>{
        axios.get(`http://localhost:9000/books/`+id)
        .then(res=>{
            setFormData(res.data[0]);
            //console.log(res.data);
            //console.log(formData);
           
        })
        .catch(error=>{
            console.log(error);
        });
    },[id]);
    

    const [errors,setErrors] = useState({});

    const validate = () =>{
        const newErrors = {};
        if(!formData.name.trim()) newErrors.name = "Name is Required";
        if(!formData.auther.trim()) newErrors.auther = "Auther Name is Required";
        // if(!formData.price.trim()) newErrors.price = "Price is Required";
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
            
            
            axios.patch('http://localhost:9000/updatebook',formData)
                .then(response => {
                console.log(response.data); 
                alert('Successfully Updated.');
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
                            Update a Book 
                        </Typography>
    
                        <TextField
                            fullWidth
                            label="ID"
                            name='id'
                            value={formData.id||''}
                            margin='normal'
                            sx={{display:'none'}}
                        />

                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            value={formData.name||''}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            margin='normal'
                        />
    
                        
                        <TextField
                            fullWidth
                            label="Author"
                            name='auther'
                            value={formData.auther||''}
                            onChange={handleChange}
                            error={!!errors.auther}
                            helperText={errors.auther}
                            margin='normal'
                        />
    
                        <TextField
                            fullWidth
                            label="Price"
                            name='price'
                            value={formData.price||''}
                            onChange={handleChange}
                            error={!!errors.price}
                            helperText={errors.price}
                            margin='normal'
                        />
    
                        <TextField
                            fullWidth
                            label="Description"
                            name='description'
                            value={formData.description||''}
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

export default Updatebook
import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Viewusers = () => {

    const [users,setUser] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9000/users')
        .then(res=>{
            setUser(res.data);
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);

  return (
    <>
     <div className='d-flex bg-primary  g-2 p-3' style={{height:'1000px'}}>
            <div className='container'>
                <div className='p-2'>
                    <h1>Library Management</h1>
                    <Link className='btn btn-success float-end' to="/" >Back</Link>
    
                </div>
                <div className='alignitems-center mt-5'>
                    <Table className="table table-bordered">
                        <thead >
                            <tr >
                                
                                <th className='p-3'>Name</th>
                                <th className='p-3'>Gender</th>
                                <th className='p-3'>address</th>
                                <th className='p-3'>Phone No</th>
                                <th className='p-3'>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user)=>(
                             <tr key={user.id}>
                               
                                <td className=' g-1'>{user.name}</td>
                                <td className=' g-1'>{user.gender}</td>
                                <td className=' g-1'>{user.address}</td>
                                <td className=' g-1'>{user.phone}</td>
                                <td className=' g-1'>{user.role}</td>
                                {/* <td className='d-flex justify-content-around'>
                                    
                                   
                                            <Link className='btn btn-primary ' to={`/Updatebook/${book.id}`} >Edit</Link>
                                       
                                            <Link className='btn btn-danger ' onClick={()=>handleShow(book.id)} >Delete</Link>
                                        
                                </td> */}
                             </tr>
                            ))}
                        </tbody>
                        
                       
                    </Table>
                </div>
    
            </div>
        </div>
    </>
  )
}

export default Viewusers
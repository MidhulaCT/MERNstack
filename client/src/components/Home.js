import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Table,Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

    const [books,setBook] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9000/books')
        .then(res=>{
            setBook(res.data);
            // console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);

    const [bookid,setBookid] = useState([])
    const [show, setShow] = useState(false);    
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        setBookid(id);
    }
    const handleRemove = () =>{
        axios.delete(`http://localhost:9000/deletebook/`+bookid)
        .then(res=>{ 
            console.log(res.data)
            setBook(books.filter(book => book.id!==bookid))
            setShow(false)
        })
        .catch(error=>{console.log(error)})
    }

  return (
    <>
    <div className='d-flex bg-info  g-2 p-3' style={{height:'1000px'}}>
        <div className='container'>
            <div className='p-2'>
                <h1>Library Management</h1>
                <Link className='btn btn-success float-end m-1' to="/Viewusers" >View Users</Link>
                <Link className='btn btn-success float-end m-1' to="/Register" >Add User</Link>
                <Link className='btn btn-success float-end m-1' to="/Addbook" >Add Book</Link>
            </div>
            <div className='alignitems-center mt-5'>
                <Table className="table table-bordered">
                    <thead >
                        <tr >
                            
                            <th className='p-3'>Book Name</th>
                            <th className='p-3'>Author</th>
                            <th className='p-3'>Price</th>
                            <th className='p-3'>Description</th>
                            <th className='p-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book)=>(
                         <tr key={book.id}>
                           
                            <td className=' g-1'>{book.name}</td>
                            <td className=' g-1'>{book.auther}</td>
                            <td className=' g-1'>{book.price}</td>
                            <td className=' g-1'>{book.description}</td>
                            <td className='d-flex justify-content-around'>
                                {/* <Button variant='primary ' className=''>Edit</Button>
                                <Button variant='danger'>Delete</Button> */}
                               
                                        <Link className='btn btn-primary ' to={`/Updatebook/${book.id}`} >Edit</Link>
                                   
                                        <Link className='btn btn-danger ' onClick={()=>handleShow(book.id)} >Delete</Link>
                                    
                            </td>
                         </tr>
                        ))}
                    </tbody>
                    
                   
                </Table>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Move To Trash</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Press remove to delete the item permanantly.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleRemove}>Remove</Button>
                </Modal.Footer>
            </Modal>


        </div>
    </div>
    </>
  )
}

export default Home
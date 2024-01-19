import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {Link , useNavigate} from "react-router-dom"
function Home() {
    const [data , setData] = useState([])
    const navigate = useNavigate()
  useEffect(() =>{
    axios.get('http://localhost:5001/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])



  const handleDelete = (id) =>{
    const confirm = window.confirm("would you like to delete?");
    if(confirm){
    axios.delete(`http://localhost:5001/users/${id}`)
    .then(res => {
      console.log("User deleted successfully:", res.data);
      setData(data.filter(user => user.id !== id));
      window.location.reload()
    })
    .catch(err => console.log(err));
    }
   }


  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
    <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border-shadow p-4'>
      <div className='d-flex justify-content-end'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
      </div>
           <table className='table table-stripend'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                   
                </tr>
            </thead>

            <tbody>
                {
                    data.map((d , i) => (
                        <tr key={i}>
                         <td>{d.id}</td>
                         <td>{d.name}</td>
                         <td>{d.email}</td>
                         <td>
                         <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                         <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                         {/* <button className='btn btn-sm btn-danger '>Delete</button> */}
                         <button onClick={() => handleDelete(d.id)} className='btn btn-sm btn-danger '>Delete</button>
                         </td>
                        </tr>
                    ))
                }
            </tbody>
           </table>
      </div>
    </div>
  )
}

export default Home

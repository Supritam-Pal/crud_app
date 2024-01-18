import React , {useState , useEffect} from 'react'
import {Link , useParams , useNavigate} from 'react-router-dom'
import axios from 'axios'


function Update() {

  const [values , setValues] = useState({
    name:"",
    email:""
})

const navigate = useNavigate()


  const [data , setData] = useState([])
  const {id} = useParams()
  useEffect(() =>{
    axios.get('http://localhost:3000/users/' + id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
},[])

const handleSubmit = (e) =>{
  e.preventDefault();
  axios.put('http://localhost:3000/users' , values)
  .then(res => {
   console.log(res)
   navigate("/")
  })
  .catch(err => console.log(err))
 }


  return (
    <>
          <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
           <form >
            <div className='mb-2'>
                <label htmlFor='name'>Name:</label>
                 <input type='text' name='name' className='form-control' placeholder='Enter Name' value={data.name}
                 
               />
            </div>

            <div className='mb-2'>
                <label htmlFor='email'>Email:</label>
                 <input type='email' name='email' className='form-control' placeholder='Enter Name' value={data.email}
                  
                 />
            </div>
            <button className='btn btn-success'>Submit</button>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
           </form>
      </div>
      
    </div>
    </>
  )
}

export default Update


import React , {useState , useEffect} from 'react'
import {Link , useParams , useNavigate} from 'react-router-dom'
import axios from 'axios'


function Update() {

  const [values , setValues] = useState({
    name:"",
    email:""
})

const navigate = useNavigate()


 // const [data , setData] = useState([])
  const {id} = useParams()
  useEffect(() =>{
    axios.get('http://localhost:5001/users/' + id)
    .then(res => setValues(res.data))
    .catch(err => console.log(err))
},[])

const handleSubmit = (e) =>{
  e.preventDefault();
  axios.put('http://localhost:5001/users/' + id , values)
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
           <form onSubmit={handleSubmit} >
            <div className='mb-2'>
                <label htmlFor='name'>Name:</label>
                 <input type='text' name='name' className='form-control' placeholder='Enter Name' value={values.name}
                 onChange={e => setValues({...values , name : e.target.value})}
               />
            </div>

            <div className='mb-2'>
                <label htmlFor='email'>Email:</label>
                 <input type='email' name='email' className='form-control' placeholder='Enter Name' value={values.email}
                   onChange={e => setValues({...values , email : e.target.value})}
                 />
            </div>
            <button className='btn btn-success'>Update</button>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
           </form>
      </div>
      
    </div>
    </>
  )
}

export default Update


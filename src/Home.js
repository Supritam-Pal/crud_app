import React , {useState , useEffect} from 'react'
import axios from 'axios'
function Home() {
    const [data , setData] = useState([])
    
  useEffect(() =>{
    axios.get('http://localhost:3001/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
    <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border-shadow p-4'>
           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                   
                </tr>
            </thead>

            <tbody>
                {
                    data.map((d , i) => (
                        <tr key={i}>
                         <td>{d.id}</td>
                         <td>{d.name}</td>
                         <td>{d.email}</td>
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

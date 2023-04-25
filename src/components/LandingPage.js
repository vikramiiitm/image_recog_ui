import React, { useEffect, useState } from 'react'
import { getFilteredRecogizedData, getRecogizedData } from '../services/Recognize'
import axios from 'axios';

export default function LandingPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('')
  const [data, setData] = useState([])


  useEffect(() => {
    (async () => {
      const result = await getRecogizedData()
      setData(result.data.data)
    })();
  }, []);

  const handleClick = (e, field) => {
    const value = e.target.value;
    field(value)
  }

  const handleFilter =async () => {
    const result = await getFilteredRecogizedData(from, to)
    if(result?.data?.data !== undefined){
      setData(result.data.data)
    }
  }
  // console.log(data)
  console.log(from)
  
  return (
    <div className='container' style={{ maxWidth:'100%', textAlign:'center'}}>
      <div className='row mt-4' style={{textAlign:'center'}}>
        <div className='col'>
          <label for="from_date">From:</label>
          <input type="date" id="from_date" name="from" onChange={(e)=>handleClick(e, setFrom)} />
        </div>
        <div className='col'>
          <label for="from_date">From:</label>
          <input type="date" id="from_date" name="from" onChange={(e)=>handleClick(e, setTo)} />
        </div>
      </div>
      <div className='col'>
          <input type="submit" id="from_date" name="from" onClick={()=>handleFilter()} />
        </div>
      <table className="table" style={{margin:'20px'}}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image Name</th>
            <th scope="col">Objects Detected</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res)=>{
            return (
              <tr>
              <td>{res.title}</td>
              <td>{res.objects_detected}</td>
              <td>
                <img src={require('../assets/images/'+res.title)} alt='image' width={"100px"} height={"150px"}></img>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {
    const {id} = useParams();
    const career = useLoaderData();
  return (
    <div className='career-details'>
        <h1>Career Details</h1>
        <p>Title :{career.title}</p>
        <p>Salary :{career.salary}</p>
        <p>Location :{career.location}</p>
        <div className='details'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
         ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
  )
}

export default CareerDetails

export const careerDetailsLoader = async ({params}) =>{ 
    const {id} = params;
    const res = await fetch("http://localhost:4000/careers/" + id);
    if(!res.ok) throw Error("cound't find component")
    return res.json();

}
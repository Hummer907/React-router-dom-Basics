import React from 'react'
import { useLoaderData ,Link} from 'react-router-dom'

const Career = () => {
    const careers = useLoaderData();
    console.log(careers);
  return (
    <div className='careers'>
        <h2>List</h2>
        {
            careers.map((career) =>(
                <Link to={career.id.toString()} key={career.id} className='career-card' >
                    <h3>{career.title}</h3>
                    <p>Based in :{career.location}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default Career

export const careerLoader = async () =>{
    const res = await fetch("http://localhost:4000/careers");
    if(!res.ok) throw Error("cound't find component")
    return res.json();

}
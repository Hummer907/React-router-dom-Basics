import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

const Contact = () => {
    const data = useActionData();

  return (
    <div className="contact" >
      <h3>Contact Us</h3>
      <Form method='post' action='/help/contact'>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error ? <p>{data.error}</p>: "" }
      </Form>
    </div>
  )
}

export default Contact


export const  contactAction = async ({request})=>{
    const data = await request.formData();

    const submissions ={
        email : data.get("email"),
        name : data.get("message")
    }

    if(submissions.email.length <20 ) {
        return {error : "email can't be shorter than 10 char !"}
    }

    console.log(submissions);
    return redirect('/home');

}
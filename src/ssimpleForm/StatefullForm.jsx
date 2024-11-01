import React from 'react';
import { useState } from 'react';

const StatefullForm = () => {

    const [email,setEmail] = useState(null)
    const [name,setName] = useState(null)
    const [password,setPassword] = useState(null)
    const [error,setError] = useState('')

    const handleSubmit = event =>{
        event.preventDefault();
        if(password.length < 8){
            setError('password must be 6 characters or more')
        }
        else{
            setError('')
            console.log(password)

        }
        console.log(email,name,password)
    }   

    const handleEmailChamge = event =>{
        setEmail(event.target.value)
    }

    const handleNameChamge = event =>{
        setName(event.target.value)
    }
    const handlePasswordChamge = event =>{
        setPassword(event.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className='bg-slate-400  pt-20 flex justify-center' action="">
                <div className='flex flex-col'>
                    <input onChange={handleNameChamge} type='text' name='name' placeholder='name' className='border-2 border-[#393737] p-2 m-2 rounded-md' />
                    <input required onChange={handleEmailChamge} type='email' name='email' placeholder='email' className='border-2 border-[#393737] p-4 m-2 rounded-md' />
                    <input onChange={handlePasswordChamge} type='password' name='password' placeholder='Enter Your Password' className='border-2 m-2 border-[#393737] p-2 rounded-md' />

                <br />
                    
                    <button type='submit' value='submit' className=' border-2 border-cyan-200 p-2 rounded-md'>Submit</button>
                    {
                        error && <p>{error}</p>
                    }
                </div>
            </form>
        </div>
    );
};

export default StatefullForm;
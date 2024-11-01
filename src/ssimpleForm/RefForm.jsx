import React, { useEffect, useRef } from 'react';


const RefForm = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)

    }
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    // used to move the cursor inside input 
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    return (
        <div>
        <form  onSubmit={handleSubmit} className='bg-slate-700  pt-20 flex justify-center' action="">
            <div className='flex flex-col'>
                <input ref={nameRef} type='text' name='name' placeholder='name' className='border-2 border-[#393737] p-2 m-2 rounded-md' />
                <input ref={emailRef} type='email' name='email' placeholder='email' className='border-2 border-[#393737] p-4 m-2 rounded-md' />
                <input type='password' name='password' placeholder='Enter Your Password' className='border-2 m-2 border-[#393737] p-2 rounded-md' />

            <br />
                
                <button type='submit' value='submit' className=' border-2 border-cyan-200 p-2 rounded-md'>Submit</button>
                
            </div>
        </form>
    </div>
    );
};

export default RefForm;
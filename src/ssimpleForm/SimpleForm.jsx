import React from 'react';

const SimpleForm = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);

    }   
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex justify-center' action="">
                <div className='flex flex-col'>
                    <input type='text' name='name' className='border-2 border-[#393737] p-2 rounded-md' />
                    <input type='email' name='email' className='border-2 border-[#393737] p-2 rounded-md' />

                <br />
                    <button type='submit' value='submit' className=' border-2 border-cyan-200 p-2 rounded-md'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SimpleForm;
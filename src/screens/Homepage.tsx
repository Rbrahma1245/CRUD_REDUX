import React, { useState } from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import '../styles/output.css'



const Homepage: React.FC = () => {


    return (
        <div className='bg-pink-50  border-2  h-full '>

            <div className=' text-center grid grid-cols-2 w-2/3  justify - between ml-10   mt-8'>
                < Card />
                <Form />
            </div >
        </div >

    )
}

export default Homepage

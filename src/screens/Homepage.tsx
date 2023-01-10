import React, { useState } from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import '../styles/output.css'




// export interface Iuser {
//     name: string;
//     age: number | null;
//     id?: number;
// }


const Homepage: React.FC = () => {



    // const [userList, setUserList] = useState<Iuser[]>([])


    return (
        <div className='bg-pink-50 border-2 h-screen '>

            <div className=' text-center grid grid-cols-2 w-2/3  justify - between ml-10   mt-8'>

                < Card />
                <Form />
            </div >
        </div >

    )
}

export default Homepage

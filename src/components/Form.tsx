import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSubmit } from '../actions';


export interface userInput {
    name: string;
    age: string;
    gender: string;

}


const Form: React.FC = () => {

    const [userField, setUserFiled] = useState<userInput>({
        name: '',
        age: '',
        gender: ''

    });


    // const myState = useSelector<Iuser>((state) => state.Crud)
    const dispatch = useDispatch();



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFiled({ ...userField, [e.target.name]: e.target.value })
    }



    return (
        <div className='border-2 ml-10 text-center rounded bg-blue-100 '>
            USER FORM

            <div className=' text-left grid  gap-2 mt-10 ml-8 mr-8 py-2 px-4'>
                <label>Enter Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' onChange={handleChange} />

                <label>Enter Your Age</label>
                <input type="number" name='age' onChange={handleChange} />


                <div className=''>
                    <input type="radio" value="Male" name="gender" onChange={handleChange} /> Male
                    <input type="radio" value="Female" name="gender" onChange={handleChange} /> Female
                    <input type="radio" value="Other" name="gender" onChange={handleChange} /> Other
                </div>

            </div>
            <button className="bg-green-400 py-2 px-4 rounded mt-5" type="button"
                onClick={() => dispatch(handleSubmit(userField))}>
                SUBMIT
            </button>
        </div >
    )
}

export default Form

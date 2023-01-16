import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitUserInput, Update } from '../actions';
import { RootState } from '../reducers';


export interface userInput {
    name: string;
    age: string;
    gender: string;
    id?: number;
    editUser?: {};
}


const Form: React.FC = () => {

    const dispatch = useDispatch();
    const editUser = useSelector((state: RootState) => state.reducerCrud.editUser)

    const [userField, setUserField] = useState<userInput>({
        editUser: {},
        name: '',
        age: '',
        gender: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserField({ ...userField, [e.target.name]: e.target.value })
    }



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (userField.name === '' || userField.age === '' || userField.gender === '') {
            alert("Please fill the details");
        }
        dispatch(submitUserInput(userField));
        setUserField({
            editUser: {},
            name: '',
            age: '',
            gender: '',
        })
    }



    useEffect(() => {
        if (editUser)
            setUserField(editUser)
    }, [editUser])


    return (
        <div className='border-2 ml-10 text-center rounded bg-blue-100 h-80'>
            USER FORM

            <div className=' text-left grid  gap-2 mt-4 ml-8 mr-8 py-2 px-4'>
                <label>Enter Your Name</label>
                <input className='h-10 py-2 px-4' type="text" name='name' value={userField.name} placeholder='Enter Your Name' onChange={handleChange} />

                <label>Enter Your Age</label>
                <input className='h-10 py-2 px-4' type="number" min='1' value={userField.age} name='age' onChange={handleChange} />

                <div className='mt-4 '>
                    <input className='ml-2' type="radio" value="Male" name="gender" checked={userField.gender === "Male"} onChange={handleChange} /> Male
                    <input className='ml-2' type="radio" value="Female" name="gender" checked={userField.gender === "Female"} onChange={handleChange} /> Female
                    <input className='ml-2' type="radio" value="Other" name="gender" checked={userField.gender === "Other"} onChange={handleChange} /> Other
                </div>

            </div>

            {
                editUser === undefined ? <button className="bg-green-400  active:hover-bg-yellow py-2 px-4 w-32 rounded mt-2 " type="button"
                    onClick={handleSubmit}>
                    SUBMIT

                </button> :
                    <button className="bg-sky-600 hover:bg-sky-700 py-2 px-4 w-32 rounded mt-2 ml-2" type="button"
                        onClick={() => {
                            dispatch(Update(userField));
                            setUserField({
                                editUser: {},
                                name: '',
                                age: '',
                                gender: '',

                            })
                        }}>
                        UPDATE
                    </button>}
        </div >
    )
}

export default Form

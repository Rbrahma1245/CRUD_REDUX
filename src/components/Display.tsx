import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { handleDelete, handleEdit } from '../actions/index'
import { RootState } from '../reducers';
import { userInput } from './Form';



const Display: React.FC = () => {

    const dispatch = useDispatch();
    const userList = useSelector((state: RootState) => state.reducerCrud.userList)

    console.log(userList)


    return (
        <div className=''>
            DISPLAY PAGE
            {
                userList.map((user: userInput) => {
                    // console.log(currElem)
                    return (
                        <div className='  grid grid-cols-2 h-32 text-left  bg-pink-200 rounded  mt-2 ml-2' key={user.id}>
                            <div className=' py-2 px-4 mt-2'>
                                Name : {user.name}
                                <br />
                                Age : {user.age}
                                <br />
                                Gender : {user.gender}
                            </div>

                            <div className='  flex justify-end  text-center'>
                                <button className=" bg-sky-600 hover:bg-sky-700 py-2 px-4 h-12 rounded mt-5 mr-4"
                                    onClick={() => { dispatch(handleEdit(user.id!)) }} >  Edit  </button>
                                <button className=" bg-rose-400 hover:bg-rose-500 py-2 px-4 h-12  rounded  mt-5 mr-4"
                                    onClick={() => dispatch(handleDelete(user.id!))}>   Delete  </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display

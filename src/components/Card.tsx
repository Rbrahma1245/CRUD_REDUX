import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
// import { Iuser } from '../screens/Homepage'

import { handleDelete, handleEdit } from '../actions/index'
import { State } from '../reducers/index';
import { TInput } from '../reducers/reducerCrud';
import { userInput } from './Form';





const Card: React.FC = () => {

    const dispatch = useDispatch();
    const userList = useSelector((state: any) => state.reducerCrud.userList)

    console.log(userList)


    return (
        <div className=''>
            DISPLAY PAGE
            {
                userList.map((currElem: any) => {
                    // console.log(currElem)
                    return (
                        <div className='  grid grid-cols-2 h-32 text-left  bg-pink-200 rounded  mt-2 ml-2' key={currElem.id}>

                            <div className=' py-2 px-4 mt-2'>
                                Name : {currElem.name}
                                <br />
                                Age : {currElem.age}
                                <br />
                                Gender : {currElem.gender}
                            </div>

                            <div className='  flex justify-end  text-center'>

                                <button className=" bg-sky-600 hover:bg-sky-700 py-2 px-4 h-12 rounded mt-5 mr-4"
                                    onClick={() => dispatch(handleEdit(currElem.id))}>  Edit  </button>
                                <button className=" bg-rose-400 hover:bg-rose-500 py-2 px-4 h-12  rounded  mt-5 mr-4"
                                    onClick={() => dispatch(handleDelete(currElem.id))}>   Delete  </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card

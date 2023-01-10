import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
// import { Iuser } from '../screens/Homepage'


import { handleDelete } from '../actions/index'



const Card: React.FC = () => {

    const dispatch = useDispatch();
    const userList = useSelector((state: any) => state.Crud.userList)

    console.log(userList)



    return (
        <div className='mt-2'>
            DISPLAY PAGE

            {
                userList.map((currElem: any) => {
                    // console.log(currElem)
                    return (
                        <div className='  grid grid-cols-2 h-32 text-left  bg-pink-200 rounded  mt-8 ml-2' key={currElem.id}>

                            <div className=' py-2 px-4 mt-2'>
                                Name : {currElem.name}
                                <br />
                                Age : {currElem.age}
                                <br />
                                Gender : {currElem.gender}
                            </div>

                            <div className='  flex justify-end  text-center'>

                                <button className="bg-green-400 py-2 px-4 h-16 rounded mt-5 mr-4"
                                >Update</button>
                                <button className="bg-green-400 py-2 px-4 h-16  rounded  mt-5 mr-4"
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

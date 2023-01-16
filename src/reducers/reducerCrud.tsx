import { userAction } from "../actions";
import { userInput } from "../components/Form";


export interface TInput {
    editUser: userInput | undefined
    userList: userInput[];
}



const initialstate: TInput = {
    editUser: undefined,
    userList: []
};



const reducerCrud = (state: TInput = initialstate, action: any) => {

    switch (action.type) {

        case "ADD":
            const { id, data } = action.payload

            return {
                ...state,
                userList: [
                    ...state.userList,
                    {
                        id: id,
                        name: data.name,
                        age: data.age,
                        gender: data.gender
                    }
                ]
            }

        case "DELETE":
            const newUserList = state.userList.filter((currentUser: userInput) => currentUser.id !== action.payload)
            return {
                ...state,
                userList: newUserList
            }

        case "EDIT":
            const updateValue = state.userList.find((currElem: userInput) => currElem.id === action.payload)
            console.log(updateValue)
            return {
                ...state,
                editUser: updateValue
            }

        case "UPDATE":

            console.log(state)
            const { name, age, gender } = action.payload

            const newUpdatedList = state.userList.map((currElem: userInput) => {
                if (currElem.id === state.editUser?.id) {
                    currElem.id = state.editUser?.id
                    currElem.name = name
                    currElem.age = age
                    currElem.gender = gender
                }
                return currElem
            })
            // console.log(newUpdatedList)

            return {
                ...state,
                userList: newUpdatedList,
                editUser: undefined
            }



        default: return state;
    }
}

export default reducerCrud
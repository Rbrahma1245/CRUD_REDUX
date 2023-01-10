export interface TInput {
    userList: [];
}

const initialstate: TInput = {
    userList: []
};



const Crud = (state: TInput = initialstate, action: any) => {

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
            const newUserList = state.userList.filter((currElem: any) => currElem.id !== action.payload)
            return {
                ...state,
                userList: newUserList
            }



        default: return state;
    }
}

export default Crud

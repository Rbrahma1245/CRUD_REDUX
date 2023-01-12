import { userInput } from "../components/Form"


interface ADD {
    type: string;
    payload: {
        id: number;
        data: userInput;
    }
}
interface DELETE {
    type: string;
    payload: number;
}

interface EDIT {
    type: string;
    payload: number;
}

interface UPDATE {
    type: string;
    payload: userInput;

}




export const handleSubmit = (data: userInput): ADD => {
    return {
        type: "ADD",
        payload: {
            id: Date.now(),
            data: data
        }
    }
}

export const handleDelete = (id: number) => {
    return {
        type: "DELETE",
        payload: id
    }
}

export const handleEdit = (id: number) => {

    return {
        type: "EDIT",
        payload: id
    }
}


export const Update = (data: userInput): UPDATE => {
    return {
        type: "UPDATE",
        payload: data,
    }

}



export type userAction = ADD | UPDATE | EDIT | DELETE

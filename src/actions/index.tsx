import { userInput } from "../components/Form"

export interface IAddPayload {
    id: number;
    data: userInput;
}

interface ADD {
    type: string;
    payload: IAddPayload;
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




export const submitUserInput = (data: userInput): ADD => {
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

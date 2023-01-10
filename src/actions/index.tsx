import { userInput } from "../components/Form"


export const handleSubmit = (data: userInput) => {
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
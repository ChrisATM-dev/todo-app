import { useState } from "react"

export const useForm = (initialState = {}) => {
const [data, setData] = useState(initialState);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setData({...data, [name]: value});
    }

    const resetData = () => {
        setData(initialState);
    }

    return{
        ...data,
        data,
        resetData,
        onInputChange
    }
}

import {useState} from 'react';
import axios from 'axios';
import uuid from 'uuid'

const useToggler = () => {
    const [ state, setState ] = useState(true);
    const handleToggle = () => {
        setState(state => !state)
    }
    
    return [ state, handleToggle ]

}

const useAxios = (url) => {
    const [ response, setResponse] = useState([])
    
    const handleAdd = async (config="") => {
        let mainUrl = typeof config === "string" ? `${url}${config}` : `${url}`
        const res = await axios.get(mainUrl)
        setResponse(state => [...state, {...res.data, id:uuid()}])
    }
    

    return [response, handleAdd];
}

export {useToggler, useAxios};
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

const useAxios = async (url) => {
    const [ state, setState] = useState([])
    
    const handleAdd = async () => {
        const res = await axios.get(url)
        console.log(res.data)
        setState(state => [...state, {...res.data, id:uuid()}])
    }
    

    return [state, handleAdd];
}

export {useToggler, useAxios};
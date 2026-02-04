import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';

export const Storecontext = createContext(null);

export const StoreContextProvider = ({ children }) => {
    const url = "https://mern-stack-djn5.onrender.com";
    const [notes, setNotes] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token"));

    const fetchNotes = async () => {
        const {data} = await axios.get(`${url}/api/note/getnote`, { headers: { token } });
        if(data.success){
            setNotes(data.notes);
        }
        else{
            toast.error(data.message);
        }
    }

    const addNote = async (formdata) => {
        const {data} = await axios.post(`${url}/api/note/addnote`, formdata, { headers: { token } });
        if(data.success){
            fetchNotes();
            toast.success(data.message);
        }
        else{
            toast.error(data.message)
        }
        
    }

    const removeNote = async (id) => {
        const {data} = await axios.post(`${url}/api/note/removenote`, { id }, { headers: { token } });
        if(data.success){
            fetchNotes();
            toast.success(data.message);
        }
        else{
            toast.error(data.message);
        }

    }

    const editNote = async (formdata) => {
        const {data} = await axios.post(`${url}/api/note/updatenote`, formdata, { headers: { token } });
        if(data.success){
            fetchNotes();
            toast.success(data.message);
        }
        else{
            toast.error(data.message);
        }
    }

    useEffect(() => {
        if(token){
            fetchNotes();
        }
    }, [token])

    const contextValue = {
        url,
        notes,
        setNotes,
        fetchNotes,
        addNote,
        removeNote,
        editNote,
        token,
        setToken,
    }
    return (
        <Storecontext.Provider value={contextValue}>
            {children}
        </Storecontext.Provider>
    )
}
export default StoreContextProvider;

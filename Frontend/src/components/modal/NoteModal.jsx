/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";



const NoteModal = ({closeModal, addNote, currentNote, editNote}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if(currentNote){
            setTitle(currentNote.title)
            setDescription(currentNote.description)
            setIsComplete(currentNote.isComplete)
        }
    }, [currentNote])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentNote){
            editNote(currentNote._id, title, description, isComplete)
        }else{
            addNote(title, description,isComplete)
        }
        
    };

    const handleCheckboxChange = (e) => {
        setIsComplete(e.target.checked);
    };
    
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-15 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <button 
                className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-600 hover:text-indigo-400 font-bold"
                onClick={closeModal} 
            >
                X
            </button>
    
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-indigo-400 hover:text-grey-400">
                {currentNote ? "Update Note" : "Add New Note"}
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Note Title"
                    className="border p-2 w-full mb-4 rounded-md"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Note Description"
                    className="border p-2 w-full mb-4 rounded-md"
                />
                
                <div className="flex items-center mb-4">
                    <input 
                        id="default-checkbox" 
                        type="checkbox" 
                        checked={isComplete}
                        onChange={handleCheckboxChange} 
                        className="w-4 h-4 text-indigo-600 bg-indigo-100 border-indigo-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-indigo-800 focus:ring-2 dark:bg-indigo-700 dark:border-indigo-600"
                    />
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-indigo-900 dark:text-indigo-300">Complete</label>
                </div>
    
                <div className="flex justify-end mt-4">
                    <button 
                        type="submit"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                    >
                        {currentNote ? "Update Note" : "Add Note"} 
                    </button>
                </div>
            </form>
        </div>
    </div>
    
    )
}

export default NoteModal;

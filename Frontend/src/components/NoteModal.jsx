import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const NoteModal = ({closeModal}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/add",
            { title , description }
            );

            if(response.data.success) {
                Navigate('/')
                closeModal()
            }
        }catch(error){
            console.log(error)
        }
    };
    
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-15 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <div className="bg-white p-8 rounded-lg relative w-full max-w-lg">
                <button 
                    className="absolute top-5 right-5 text-gray-600 hover:text-purple-400 font-bold"
                    onClick={closeModal} 
                >
                    X
                </button>

                <h2 className="text-xl font-bold mb-4 text-purple-400 hover:text-grey-400">Add New Note</h2>
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

                    <div className="flex justify-end mt-4">
                        <button 
                            type="submit"
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                        >
                            Add Note
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default NoteModal;

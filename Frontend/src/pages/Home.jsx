import { useState } from "react";
import NoteModal from "../components/NoteModal";
import axios from "axios";


const Home = () => {

    const [isModalOpen, setModalOpen] = useState(false);
   
   

   

    const closeModal = ( ) => {
        setModalOpen(false)
    }

   
    const addNote = async (title , description, isComplete) =>{
        
        try{
            const response = await axios.post("http://localhost:5000/note/add",
            { title , description, isComplete }
            );

            if(response.data.success) {
                //Show success toastify alert
                closeModal()
            }
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className='bg-grey-500 min-h-screen p-10 '>

            <div
                className="block rounded-lg bg-black p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h5
                className="mb-2 text-2xl text-center font-medium leading-tight text-white dark:text-neutral-50">
                Todo List
                </h5>
                
            </div>

            

           

            <button 
            onClick={() => setModalOpen(true)}
                className="fixed right-10 bottom-10 bg-purple-500 text-3xl text-white font-bold p-4 rounded-full hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                aria-label="Add item">
                +
            </button>
            {isModalOpen && <NoteModal 
            closeModal={closeModal}
            addNote={addNote}
            />}

        </div>
    )
}

export default Home;

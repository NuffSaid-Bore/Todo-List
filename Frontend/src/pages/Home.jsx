import { useEffect, useState } from "react";
import NoteModal from "../components/NoteModal";
import axios from "axios";
import NoteCard from "../components/NoteCard";
import { toast } from "react-toastify";


const Home = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);

    useEffect( () =>{
        getAllNotes()
    }, [])

    const getAllNotes = async ()=> {
        try {
         const {data} = await axios.get("http://localhost:5000/note")
         setNotes(data.notes)
        } catch(error) {
         toast.error(error)
         console.log(error)
        }
     }

    const closeModal = ( ) => {
        setModalOpen(false)
    }

    const updateNote = (note) => {
        setCurrentNote(note)
        setModalOpen(true)
    }

    const addNote = async (title , description, isComplete) =>{
        
        try{
            const response = await axios.post("http://localhost:5000/note/add",
            { title , description, isComplete }
            );

            if(response.data.success) {
                toast.success("Note has been added successfully")
                getAllNotes()
                closeModal()
            }
        }catch(error){
            toast.error(error)
            console.log(error)
        }
    }

    const editNote = async (id, title, description, isComplete)=> {
        try{
            const response = await axios.put(`http://localhost:5000/note/${id}`,
            { title , description, isComplete }
            );

            if(response.data.success) {
                toast.success("Note has been edited successfully")
                getAllNotes()
                closeModal()
            }
        }catch(error){
            toast.error(error)
            console.log(error)
        }
    }

    const deleteNote = async (id)=> {
        try{
            const response = await axios.delete(`http://localhost:5000/note/${id}`);

            if(response.data.success) {
                toast.success("Note has been deleted successfully")
                getAllNotes()
            }
        }catch(error){
            toast.error(error)
            console.log(error)
        }
    }

    const openAddModal = () => {
        setCurrentNote(null);
        setModalOpen(true);
    };

    const incompleteCount = notes.filter((note) => !note.isComplete).length;
    const completeCount = notes.filter((note) => note.isComplete).length;
    return (
        <div className='bg-purple-100 h-screen p-10 '>

            <div
                className="rounded-3xl h-40  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <h5
                className="mb-2 text-5xl text-center font-medium leading-tight text-black dark:text-neutral-50">
                Todo List
                </h5>
                
                <div className="flex justify-between mt-20  px-5">
                    
                    <div className="bg-red-500 text-white p-2 rounded-full">
                        Incomplete: {incompleteCount}
                    </div>

                    
                    <div className="bg-green-500 text-white p-2 rounded-full">
                        Complete: {completeCount}
                    </div>
                </div>
            </div>

            <div className="space-y-5 mt-5 h-4/5 overflow-y-auto z-10">
                {notes.map( note =>(
                    < NoteCard 
                    key={note.id} note={note}
                    updateNote={updateNote}
                    deleteNote={deleteNote}
                    
                    />
                ))}

            </div>

            <button 
            onClick={openAddModal}
                className="fixed right-10 bottom-10 z-20 bg-purple-500 text-3xl text-white font-bold p-4 rounded-full hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                aria-label="Add item">
                +
            </button>
            {isModalOpen && <NoteModal 
            closeModal={closeModal}
            addNote={addNote}
            currentNote={currentNote}
            editNote ={editNote}
            />}

        </div>
    )
}

export default Home;

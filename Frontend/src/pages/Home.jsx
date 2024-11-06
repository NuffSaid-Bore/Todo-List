import { useState } from "react";
import NoteModal from "../components/NoteModal";

const Home = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <div className='bg-grey-100 min-h-screen'>

            <button 
            onClick={() => setModalOpen(true)}
                className="fixed right-10 bottom-10 bg-purple-500 text-3xl text-white font-bold p-4 rounded-full hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                aria-label="Add item">
                +
            </button>
            {isModalOpen && <NoteModal 
            closeModal={closeModal}/>}

        </div>
    )
}

export default Home;

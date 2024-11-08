import {FaEdit, FaTrash} from 'react-icons/fa'
/* eslint-disable react/prop-types */

const NoteCard = ({note, updateNote}) => {
    return(
        <div className="border-2 border-white p-4 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mt-2 mb-2 w-full max-w-xl mx-auto">
        <h2 className={`text-xl font-bold ${note.isComplete ? 'line-through text-gray-400' : ''}`}>
            {note.title}
        </h2>
        <p className={`${note.isComplete ? 'line-through text-gray-400' : ''}`}>
            {note.description}
        </p>
        <p className={`mt-2 text-sm ${note.isComplete ? 'text-green-500' : 'text-red-500'}`}>
            {note.isComplete ? 'Complete' : 'Incomplete'}
        </p>

        <div className="flex justify-end mt-2">
            <button 
                className="text-purple-500 mr-2"
                onClick={() => updateNote(note)}
            >
                <FaEdit />
            </button>
            <button className="text-red-500">
                <FaTrash />
            </button>
        </div>
    </div>
    )
}

export default NoteCard
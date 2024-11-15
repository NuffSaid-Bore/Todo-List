import { useEffect, useState } from "react";
import NoteModal from "../components/modal/NoteModal";
import axios from "axios";
import NoteCard from "../components/card/NoteCard";
import { toast } from "react-toastify";
import TabsComponent from "../components/tabs/TabsComponent";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/note");
      setNotes(data.notes);
    } catch (error) {
      toast.error("Error fetching notes");
      console.log(error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateNote = (note) => {
    setCurrentNote(note);
    setModalOpen(true);
  };

  const addNote = async (title, description, isComplete) => {
    try {
      const response = await axios.post("http://localhost:5000/note/add", {
        title,
        description,
        isComplete,
      });

      if (response.data.success) {
        toast.success("Note has been Added successfully");
        getAllNotes();
        closeModal();
      }
    } catch (error) {
      toast.error("Error adding note");
      console.log(error);
    }
  };

  const editNote = async (id, title, description, isComplete) => {
    try {
      const response = await axios.put(`http://localhost:5000/note/${id}`, {
        title,
        description,
        isComplete,
      });

      if (response.data.success) {
        toast.success("Note has been Updated successfully");
        getAllNotes();
        closeModal();
      }
    } catch (error) {
      toast.error("Error Updated note");
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/note/${id}`);

      if (response.data.success) {
        toast.success("Note has been Deleted successfully");
        getAllNotes();
      }
    } catch (error) {
      toast.error("Error Deleting note");
      console.log(error);
    }
  };

  const openAddModal = () => {
    setCurrentNote(null);
    setModalOpen(true);
  };

  const incompleteCount = notes.filter((note) => !note.isComplete).length;
  const completeCount = notes.filter((note) => note.isComplete).length;

  const incompleteNotes = notes.filter((note) => !note.isComplete);
  const completeNotes = notes.filter((note) => note.isComplete);

  const items = [
    {
      title: 'All',
      content: (
        <div className="space-y-5 mt-5">
          {notes.length === 0 ? (
            <div className="flex justify-center items-center h-full text-xl text-gray-500">
              No Notes Records
            </div>
          ) : (
            notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                updateNote={updateNote}
                deleteNote={deleteNote}
              />
            ))
          )}
        </div>
      ),
    },
    {
      title: 'Complete',
      content: (
        <div className="space-y-5 mt-5">
          {completeNotes.length === 0 ? (
            <div className="flex justify-center items-center h-full text-xl text-gray-500">
              No Complete Notes
            </div>
          ) : (
            completeNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                updateNote={updateNote}
                deleteNote={deleteNote}
              />
            ))
          )}
        </div>
      ),
    },
    {
      title: 'InComplete',
      content: (
        <div className="space-y-5 mt-5">
          {incompleteNotes.length === 0 ? (
            <div className="flex justify-center items-center h-full text-xl text-gray-500">
              No Incomplete Notes
            </div>
          ) : (
            incompleteNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                updateNote={updateNote}
                deleteNote={deleteNote}
              />
            ))
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-indigo-100 h-screen flex flex-col">
    {/* Header Section */}
    <div className="rounded-3xl h-40 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <h5 className="mb-2 mt-10 text-5xl text-center font-medium leading-tight text-black dark:text-neutral-50">
       Todo List
      </h5>
  
      <div className="flex justify-between mt-10 px-5">
        <div className="bg-red-500 text-white p-2 rounded-full">
          Incomplete: {incompleteCount}
        </div>
  
        <div className="bg-green-500 text-white p-2 rounded-full">
          Complete: {completeCount}
        </div>
      </div>
    </div>
  
    {/* Tabs Section */}
    <div className="flex-grow overflow-hidden pl-5 pr-5 pb-9">
      <TabsComponent items={items} />
    </div>
  
    {/* Fixed Add Item Button */}
    <button
      onClick={openAddModal}
      className="fixed hover:animate-bounce right-10 bottom-10 z-20 bg-indigo-500 text-3xl text-white font-bold p-4 rounded-full hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      aria-label="Add item"
    >
      +
    </button>
  
    {/* Modal for Adding/Editing Notes */}
    {isModalOpen && (
      <NoteModal
        closeModal={closeModal}
        addNote={addNote}
        currentNote={currentNote}
        editNote={editNote}
      />
    )}
  </div>

  );
};

export default Home;

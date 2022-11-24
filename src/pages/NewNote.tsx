import NoteForm from "../components/NoteForm";
import { NoteData, Tag } from "../App";

const NewNote = () => {

  const submitHandler = (data:NoteData) => {
    
  };
  return (
    <>
      <h1 className='mb-4'>New Note</h1>
      <NoteForm onSubmit={submitHandler} />
    </>
  );
};

export default NewNote;

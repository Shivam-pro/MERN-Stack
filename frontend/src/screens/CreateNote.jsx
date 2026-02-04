import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { Storecontext } from "../context/Storecontext";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const nevigate = useNavigate();
  const { addNote } = useContext(Storecontext);

  const submimtHandler = (e) => {
    e.preventDefault();
    const formdata = {
      title,
      content,
      category
    }
    addNote(formdata);
    setTitle("");
    setCategory("");
    setContent("");
    nevigate('/mynotes');
  }
  return (
    <div className="d-flex justify-center items-center my-20">
      <Form className="d-flex flex-col gap-4 bg-body-tertiary rounded-2xl p-5 w-50" onSubmit={submimtHandler}>
        <h1>Create Your Note</h1>
        <div>
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" as="textarea" rows={5} placeholder="Enter Content" onChange={(e) => setContent(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Enter category" onChange={(e) => setCategory(e.target.value)} required />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          Create Note
        </Button>
      </Form>
    </div>
  )
}

export default CreateNote

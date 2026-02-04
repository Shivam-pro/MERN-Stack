import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { Storecontext } from "../context/Storecontext";
import { useLocation, useNavigate } from "react-router-dom";

const CreateNote = () => {
    const location = useLocation();
    const { editNote } = useContext(Storecontext);
    const nevigate = useNavigate();
    const { id, note } = location.state;
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [category, setCategory] = useState(note.category);

    const submimtHandler = (e) => {
        e.preventDefault();
        const formdata = {
            id,
            title,
            content,
            category
        }
        editNote(formdata);
        setTitle("");
        setCategory("");
        setContent("");
        nevigate('/mynotes');
    }
    return (
        <div className="d-flex justify-center items-center my-20">
            <Form className="d-flex flex-col gap-4 bg-body-tertiary rounded-2xl p-5 w-50" onSubmit={submimtHandler}>
                <h1>Edit Your Note</h1>
                <div>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" as="textarea" rows={5} value={content} placeholder="Enter Content" onChange={(e) => setContent(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" value={category} placeholder="Enter category" onChange={(e) => setCategory(e.target.value)} required />
                    </Form.Group>
                </div>
                <Button variant="primary" type="submit">
                    Edit Note
                </Button>
            </Form>
        </div>
    )
}

export default CreateNote

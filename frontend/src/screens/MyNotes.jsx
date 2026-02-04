import { Accordion, Button, Container, useAccordionButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { Storecontext } from '../context/Storecontext';
const MyNotes = () => {
  const { notes, removeNote } = useContext(Storecontext);
  const username = localStorage.getItem("username");


  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!')
    );

    return (
      <div className="d-flex justify-between items-center hover:cursor-pointer" onClick={decoratedOnClick}>
        {children}
      </div>
    );
  }
  return (
    <div>
      <Container className="d-flex flex-col justify-start py-10 gap-4">
        <h1>Welcome, {username}</h1>
        <div className='d-flex justify-center'>
          <Button>
            <Link to="/createnote" className=" no-underline!">
              Create New Note
            </Link>
          </Button>
        </div>
        <div>
          <h4>Your Notes</h4>
          <div className="d-flex flex-col gap-2 my-10">
            {notes ? notes.map((note) => (
              <Accordion key={note._id}>
                <Card>
                  <Card.Header>
                    <CustomToggle eventKey="0">
                      <span>
                        <h5>{note.title}</h5>
                      </span>
                      <div className="d-flex gap-2">
                        <Button variant="outline-primary">
                          <Link to="/editnote" state={{id: note._id, note: note}} className="no-underline!">
                            Edit
                          </Link></Button>
                        <Button variant="outline-danger" onClick={() => { removeNote(note._id) }}>Delete</Button>
                      </div>
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <blockquote className="blockquote mb-0 px-3 py-2">
                      <p>
                        <span className="bg-green-500 rounded-xs px-2 text-xl">
                          {note.category}
                        </span>
                      </p>
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created on - {note.createdAt.split("T")[0]}
                      </footer>
                    </blockquote>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            )) : ""}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyNotes

import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CreateNoteAction } from "../../actions/noteActions";
import MainScreen from "../../components/MainScreen/MainScreen";
import "./createnoteScreen.css";
import ReactMarkdown from "react-markdown";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const CreateNoteScreen = ({ history }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const createNote = useSelector((state) => state.createNote);
  const { loading, error } = createNote;
  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(CreateNoteAction(title, content, category));

    resetHandler();
    history.push("/mynotes");
  };
  return (
    <MainScreen title="Create Notes">
      <Card>
        <Card.Header as="h5">Create new note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="warning">{error}</ErrorMessage>}
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter note title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={content}
                placeholder="Enter content here"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="category"
                value={category}
                placeholder="Enter note title"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={100} />}
            <div className="newnote-button">
              <Button type="submit" variant="primary">
                Create
              </Button>
              <Button variant="danger" onClick={resetHandler}>
                Reset
              </Button>
            </div>
          </Form>
        </Card.Body>

        <Card.Footer>
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default CreateNoteScreen;

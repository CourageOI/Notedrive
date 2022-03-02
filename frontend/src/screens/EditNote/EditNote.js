import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { UpdateNoteAction } from "../../actions/noteActions";
import ErrorMessage from "../../components/ErrorMessage";
import MainScreen from "../../components/MainScreen/MainScreen";

const EditNote = ({ match, history }) => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const updateNote = useSelector((state) => state.updateNote);
  const { loading, error } = updateNote;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios
        .get(`api/notes/${match.params.id}`)
        .then((res) => {
          console.log(res.data);
        });
      console.log(data.data);
      // setTitle(data.title);
      // setContent(data.content);
      // setCategory(data.category);
      // setDate(data.updateAt);
    };

    fetchData();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };

  const deleteHandler = (e) => {
    e.preventDefault();
  };

  const updateHandler = (e) => {
    e.preventDefault();

    dispatch(UpdateNoteAction(match.params.id, title, content, category));

    if (!title || !content || !category) return;
    resetHandler();
    history.push("/mynotes");
  };
  return (
    <MainScreen title="Edit Note">
      <Card>
        <Card.Header as="h5">Edit your note</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
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
            {/* {loading && <Loading size={100} />} */}
            <div className="newnote-button">
              <Button type="submit" variant="primary">
                Update
              </Button>
              <Button variant="danger" onClick={deleteHandler}>
                Delete
              </Button>
            </div>
          </Form>
        </Card.Body>

        <Card.Footer>Updating on - {date.substring(0, 10)}</Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default EditNote;

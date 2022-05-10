import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNoteAction, UpdateNoteAction } from "../../actions/noteActions";
import ErrorMessage from "../../components/ErrorMessage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainScreen from "../../components/MainScreen/MainScreen";

const EditNote = () => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const updateNote = useSelector((state) => state.updateNote);
  const { loading, error } = updateNote;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { id } = useParams();
  console.log(userInfo);

  useEffect(() => {
    try {
      const fetchNote = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const data = await axios.get(`api/notes/${id}`, config);
        console.log(data);
        setTitle(data.title);
        setContent(data.content);
        setCategory(data.category);
        setDate(data.updateAt);
      };
      fetchNote();
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }, [date]);

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
    dispatch(UpdateNoteAction(id, title, content, category));

    if (!title || !content || !category) return;
    resetHandler();
    navigate("/mynotes");
  };
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default EditNote;

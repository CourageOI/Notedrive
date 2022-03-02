import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { TiDocumentAdd } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import MainScreen from "../../components/MainScreen/MainScreen";
import { AllNotes } from "../../actions/noteActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyNotes = () => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const createNote = useSelector((state) => state.createNote);
  const { success: sucessCreate } = createNote;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  useEffect(() => {
    dispatch(AllNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, sucessCreate, userInfo, history]);

  return (
    <MainScreen title={`Welcome ${userInfo.name}..`}>
      <>
        <OverlayTrigger
          key={1212}
          placement="top"
          overlay={<Tooltip id={`add-new-note`}>Add new note</Tooltip>}
        >
          <Link to="/createnote">
            <TiDocumentAdd
              style={{
                fontSize: "50px",
                marginLeft: "10px",
              }}
            />
          </Link>
          {/* <Button variant="secondary">Tooltip on {placement}</Button> */}
        </OverlayTrigger>
      </>
      {error && <ErrorMessage variant="warning">{error}</ErrorMessage>}
      {loading && <Loading size={100} />}
      {notes?.reverse().map((note) => (
        <Accordion key={note._id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{ display: "flex" }} size="sm">
              <span
                style={{
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 25,
                }}
              >
                {note.title}
              </span>
              <div style={{ fontSize: 30 }}>
                <OverlayTrigger
                  key={1213}
                  placement="top"
                  overlay={<Tooltip id={`edit`}>Edit</Tooltip>}
                >
                  <Link className="edit-note" to={`/note/${note._id}`}>
                    <FiEdit />
                  </Link>
                </OverlayTrigger>

                <OverlayTrigger
                  key={1214}
                  placement="top"
                  overlay={<Tooltip id={`delete`}>Delete</Tooltip>}
                >
                  <Link to="#">
                    <MdDeleteForever
                      onClick={() => deleteHandler(note._id)}
                      style={{ margin: "0 8px", color: "red" }}
                    />
                  </Link>
                </OverlayTrigger>
              </div>
            </Accordion.Header>

            <Accordion.Body>
              <h4>
                <Badge bg="success">Category - {note.category}</Badge>
              </h4>

              <blockquote className="blockquote mx-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">
                  Created on{" "}
                  <cite title="souce title">
                    {note.createdAt.substring(0, 10)}
                  </cite>
                </footer>
              </blockquote>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;

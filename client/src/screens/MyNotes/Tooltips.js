import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { TiDocumentAdd } from "react-icons/ti";
import { Link } from "react-router-dom";

const Tooltips = () => {
  return (
    <>
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={<Tooltip id={`add-new-note`}>Add new note</Tooltip>}
      >
        <MdDeleteForever
          onClick={() => deleteHandler(note._id)}
          style={{ margin: "0 8px", color: "red" }}
        />
      </OverlayTrigger>
    </>
  );
};

export default Tooltips;

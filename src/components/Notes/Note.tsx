import React from "react";

import { INote } from "../../redux/types";

const Note: React.FC<INote> = (props) => (
  <div className="card w-100 mt-4">
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
        {props.content}
      </p>
    </div>
  </div>
);

export default Note;

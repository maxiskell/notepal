import React from "react";

import { NoteAction } from "../../redux/actions";

interface IEditorProps {
  title?: string;
  content?: string;
  close: (event: React.MouseEvent<HTMLButtonElement>) => NoteAction;
}

const Editor: React.FC<IEditorProps> = (props) => (
  <div className="mt-4">
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input
        required
        id="title"
        type="text"
        name="title"
        className="form-control"
      />
    </div>
    <div className="form-group">
      <label htmlFor="title">Content</label>
      <textarea
        required
        rows={10}
        id="content"
        name="content"
        className="form-control"
      />
    </div>

    <div className="btn-group float-right">
      <button type="reset" className="btn btn-secondary" onClick={props.close}>
        Cancel
      </button>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </div>
  </div>
);

export default Editor;

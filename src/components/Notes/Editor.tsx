import React, { useState, ChangeEvent } from "react";

import { NoteAction } from "../../redux/actions";
import { INote } from "../../redux/types";

interface IEditorProps {
  title?: string;
  content?: string;
  save: (note: INote) => NoteAction;
  close: (event: React.MouseEvent<HTMLButtonElement>) => NoteAction;
}

const Editor: React.FC<IEditorProps> = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [content, setContent] = useState(props.title || "");

  return (
    <div className="container mt-4" data-testid="note-editor">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          required
          id="title"
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
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
          value={content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />
      </div>

      <div className="btn-group float-right">
        <button
          type="reset"
          className="btn btn-secondary"
          onClick={props.close}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => props.save({ title, content })}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Editor;

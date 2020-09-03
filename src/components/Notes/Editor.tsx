import React, { useState, ChangeEvent } from "react";

import { NoteAction } from "../../redux/actions";
import { INote } from "../../redux/types";

export interface IEditorProps {
  note?: INote;
  delete: () => NoteAction;
  save: (note: INote) => NoteAction;
  close: (event: React.MouseEvent<HTMLButtonElement>) => NoteAction;
}

const Editor: React.FC<IEditorProps> = (props) => {
  const [title, setTitle] = useState(props.note?.title || "");
  const [content, setContent] = useState(props.note?.content || "");

  return (
    <div className="container mt-4" data-testid="note-editor">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          className="form-control"
          data-testid="note-editor-title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Content</label>
        <textarea
          rows={10}
          id="content"
          name="content"
          className="form-control"
          data-testid="note-editor-content"
          value={content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />
      </div>

      {props.note && (
        <div className="float-left">
          <button
            type="button"
            className="btn btn-outline-danger"
            data-testid="note-editor-delete"
            onClick={props.delete}
          >
            Delete Note
          </button>
        </div>
      )}

      <div className="float-right">
        <button
          type="reset"
          className="btn btn-link mr-2"
          data-testid="note-editor-cancel"
          onClick={props.close}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          data-testid="note-editor-save"
          onClick={() =>
            title.length && content.length && props.save({ title, content })
          }
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Editor;

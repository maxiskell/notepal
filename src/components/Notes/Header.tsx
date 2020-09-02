import React from "react";
import { NoteAction } from "../../redux/actions";

interface IProps {
  isEditorOpen: boolean;
  newNote: (event: React.MouseEvent<HTMLButtonElement>) => NoteAction;
}

const Header: React.FC<IProps> = (props) => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mr-auto my-0 h1">Notepal</span>

    {!props.isEditorOpen && (
      <button className="btn btn-primary" onClick={props.newNote}>
        New Note
      </button>
    )}
  </nav>
);

export default Header;

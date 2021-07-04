import React from "react";

function Button(props) {
  return (
    <>
      <li className="nav-item" role="presentation">
        <button
          className={props.class}
          id={props.id}
          data-bs-toggle="pill"
          data-bs-target={props.target}
          type="button"
          role="tab"
        >
          {props.which}
        </button>
      </li>
    </>
  );
}

export default Button;

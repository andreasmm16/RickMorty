import React from "react";

export default function Pagination(props) {
  const PreviousPage = () => {
    props.onPrev();
  };

  const NextPage = () => {
    props.onNxt();
  };

  return (
    <div className="container">
      <nav className="mt-10">
        <ul className="pagination justify-content-center">
          {props.prev ? (
            <li className="page-item">
              <button className="page-link" onClick={PreviousPage}>
                Previous
              </button>
            </li>
          ) : null}
          {props.next ? (
            <li className="page-item">
              <button className="page-link" onClick={NextPage}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}

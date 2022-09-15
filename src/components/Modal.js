import React from "react";
import { useEffect, useState } from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (props.isOpen) {
      setShowModal(true);
    }
  }, [props.isOpen]);

  return (
    <>
      {showModal ? (
        <>
          <div
            onClick={() => {
              setShowModal(false);
              props.handleClose();
            }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 hover:cursor-zoom-out outline-none focus:outline-none "
          >
            <div className="">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="">
                  <img className="max-w-screen" src={props.images.urls.regular} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

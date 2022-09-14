import "./modalStyles.css";
import { useEffect, useRef } from "react";
import ReactPortal from "../ReactPortal";
import { CSSTransition } from "react-transition-group";
import ImageDetailed from "../../pages/ImageDetailed";


function Modal({ children, isOpen, handleClose}) {
    const nodeRef = useRef(null);
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };

    }, [handleClose]);


    return (
      <ReactPortal wrapperId="react-portal-modal-container">
        <CSSTransition
          in={isOpen}
          timeout={{ entry: 0, exit: 300 }}
          unmountOnExit
          classNames="modal"
          nodeRef={nodeRef}
        >
          <div className="modal" ref={nodeRef}>
            <button onClick={handleClose} className="close-btn text-black">
              Close
            </button>
            <div className="modal-content flex-wrap">
                <div className="w-full flex bg-black text-white items-center justify-between ">
                    <div className="flex items-center">
                        <div className="pr-3">image</div>
                        <div>
                            <div>username</div>
                            <div>link to social</div>
                        </div>
                    </div>
                    <div className="pr-3">Download</div>
                    
                </div>
                <div className="w-full bg-black text-white h-[50px]">div 2</div>
                <div className="w-full bg-black text-white h-[50px]">div 2</div>
            </div>
          </div>
        </CSSTransition>
      </ReactPortal>
    );
}

export default Modal;
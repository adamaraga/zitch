import { useState } from "react";
import ReactModal from "react-modal";
import { HashLink } from "react-router-hash-link";
import HoverMenu from "./HoverMenu";

const Drawer = ({ links }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="drawer">
      <div
        className="topbar__bottom__menu"
        onClick={() => setModalIsOpen(true)}
      >
        <i className="icon-menu"></i>
      </div>

      <ReactModal
        className="modalMain"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Cart Modal"
      >
        <div className="drawer__modal">
          <div
            className="drawer__modal__close"
            onClick={() => setModalIsOpen(false)}
          >
            <i className="icon-close"></i>
          </div>
          <ul className="drawer__modal__list">
            {links?.map((item, i) => {
              return (
                <HashLink
                  key={i}
                  to={`/#${item.url}`}
                  onClick={() => setModalIsOpen(false)}
                >
                  <li className="topbar__bottom__links__item" key={item.name}>
                    {item.name}
                  </li>
                </HashLink>
              );
            })}

            <HoverMenu drawer={true} />
          </ul>
        </div>
      </ReactModal>
    </div>
  );
};

export default Drawer;

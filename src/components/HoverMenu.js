import { ControlledMenu, MenuItem, useHover } from "@szhsin/react-menu";
import { useRef, useState } from "react";

const HoverMenu = ({ drawer }) => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { anchorProps, hoverProps } = useHover(isOpen, setOpen);

  const links = [
    {
      name: "User",
      url: "",
    },
    {
      name: "Vendor",
      url: "",
    },
    {
      name: "Logistics",
      url: "",
    },
  ];
  return (
    <div>
      {drawer ? (
        <li className="topbar__bottom__links__item" ref={ref} {...anchorProps}>
          Register
          <i
            className="icon-arrow-down"
            style={{ fontSize: 10, marginLeft: 5 }}
          ></i>
        </li>
      ) : (
        <ul style={{ cursor: "pointer" }} className="topbar__bottom__links">
          <li
            style={{
              height: 56.5,
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
            ref={ref}
            {...anchorProps}
            className="topbar__bottom__links__item"
          >
            Register
            <i className="icon-arrow-down" style={{ fontSize: 10 }}></i>
          </li>
        </ul>
      )}

      <ControlledMenu
        {...hoverProps}
        state={isOpen ? "open" : "closed"}
        anchorRef={ref}
        onClose={() => setOpen(false)}
      >
        {links.map((link, i) => {
          return (
            <a key={i} href={link.url}>
              <MenuItem>{link.name}</MenuItem>
            </a>
          );
        })}
      </ControlledMenu>
    </div>
  );
};

export default HoverMenu;

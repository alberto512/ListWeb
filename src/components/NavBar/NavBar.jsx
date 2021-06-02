import React from "react";
import ReactDOM from "react-dom";

const NavBar = React.forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);

  React.useImperativeHandle(ref, () => {
    return {
      openNavBar: () => open(),
      closeNavBar: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={"modal-wrapper"}>
        <div onClick={close} className={"modal-backdrop"} />
        <div className={"modal-box"}>{props.children}</div>
      </div>,
      document.getElementById("root")
    );
  }

  return null;
});

export default NavBar;
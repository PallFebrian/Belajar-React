import React from "react";

function Layout({ children,title }) {
  return (
    <div className="layout">
      <p>ini adalah layout {title}</p>
      {children}
    </div>
  );
}

export default Layout;

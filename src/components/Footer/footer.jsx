import React from "react";

const Footer = () => {
  const divStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgb(128 128 128)",
    zIndex: 1202,
  };
  return (
    <div style={divStyle}>
      <footer>
        <table style={{ marginLeft: "50%" }}>
          <tbody>
            <tr style={{ color: "white" }}>
              <th style={{ fontSize: 20 }}>©</th>
              <th>Balraj Gahlot</th>
              <td>
                <a
                  style={{ color: "blue" }}
                  target="_blank"
                  href="https://github.com/Balraj4347"
                  rel="noreferrer"
                >
                  Github
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </footer>
    </div>
  );
};

export default Footer;

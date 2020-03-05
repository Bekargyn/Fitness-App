import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import girlImageBottom from "../images/girlImage.jpeg";

const Styles = styled.div`
  .jumbotron {
    background: url(${girlImageBottom}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -3;
  }
`;

export const JumbotronBottom = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
    </Jumbo>
  </Styles>
);

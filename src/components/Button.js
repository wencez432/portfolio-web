import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--bg-btn)'}; /*--gray-1*/
    padding: 0.7em 2em;
    border: 2px solid var(--bg-btn); /*--gray-1*/
    border-radius: 8px;
    display: inline-block;
    color: ${(props) =>
      props.outline ? 'var(--bg-btn)' : 'var(--bg)'}; /*--gray-1 --black*/
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #33383e;
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 0.8em;
  p {
    margin: 5px 0;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>Mikołaj Frankiewicz | Portfolio</p>
            <p>© {new Date().getFullYear()} All Rights Reserved - Licensed under MIT</p>
        </FooterContainer>
    );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import personalData from '../assets/data/personal';

const FooterStyle = styled.div`
  background-color: var(--ch-green); /*--deep-dark*/
  padding-top: 5rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Wenses Penadillo</h1>
          <PText>
            A freelance developer from Lima, Peru. I always make websites that
            have unique designs and also has a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: personalData.celcode,
                path: 'tel:+519195954',
              },
              {
                title: personalData.emailuni,
                path: 'mailto:wpenadillol@uni.pe',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'GitHub',
                path: personalData.socialLinks.github,
              },
              {
                title: 'LinkedIn',
                path: personalData.socialLinks.linkedin,
              },
              {
                title: 'Twitter',
                path: personalData.socialLinks.twitter,
              },
              {
                title: 'Facebook',
                path: personalData.socialLinks.facebook,
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}

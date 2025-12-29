import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Subhadra Mishra via email at subhadramishrag@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch.</p>
        <p>
          <strong>Email:</strong> <EmailLink />
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+18123454904">+1 (812) 345-4904</a>
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;

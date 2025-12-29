import React from 'react';

const EmailLink = () => {
  const email = 'subhadramishrag@gmail.com';

  return (
    <div className="inline-container">
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
};

export default EmailLink;

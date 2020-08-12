import React from 'react';

function Button(props) {
  // props = { className: '', href: '' }
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default Button;
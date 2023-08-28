// TypedText.jsx
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Development', 'Front End DEvelopment', 'BackEnd Development'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef}></span>;
};

export default TypedText;

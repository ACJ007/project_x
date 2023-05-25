
import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (visible && count < 20) {
      const timeout = setTimeout(() => {
        setCount(count + 1);
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [visible, count]);

  return (
    <div ref={counterRef}>
      <h2>Books Counter</h2>
      <p className={visible ? 'count-animate' : ''}>Count: {count}</p>
    </div>
  );
};

export default Counter;

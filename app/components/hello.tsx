'use client';

import { useEffect, useState } from 'react';

export default function Hello() {
  const [resultFromRouteHandler, setResultFromRouteHandler] = useState('');

  useEffect(() => {
    const getResult = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();

      setResultFromRouteHandler(data.message);
    };

    getResult();
  }, []);

  return (
    <div>
      <p>Hello from client component!</p>

      <p>Result from route Handler: {resultFromRouteHandler}</p>
    </div>
  );
}

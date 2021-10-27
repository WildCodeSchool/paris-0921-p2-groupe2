import React, { useEffect } from 'react';

export default function Fight() {
  useEffect(() => {
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => {
        data + ' ';
      });
  }, []);

  return (
    <>
      <h3>Hello World</h3>
    </>
  );
}

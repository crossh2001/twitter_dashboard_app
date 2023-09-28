import { useState, useEffect } from 'react';

function Dashboard1() {
  const [twitter, setTwitter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const bearerToken =
      'AAAAAAAAAAAAAAAAAAAAAH%2FHpwEAAAAA5mii8IJpzaou1i1TMI8fgYRqq%2FE%3D0suv8EmHKdhtsfAfQLtz99RwKkSRVAuRIVdZjP5ea6o3BxBT3U'; 

    fetch('http://localhost:3000/tweets', { 
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTwitter(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  }, []);

  console.log(twitter);

  return (
    <>
      <h1>Test dashboard</h1>
      {error && <p>Error: {error}</p>}
      {twitter && (
        <div>
          <h2>User Information</h2>
          <pre>{JSON.stringify(twitter, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default Dashboard1;

import React, { useState } from "react";

const Home = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefaut();

    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ longUrl })
    });

    const result = await response.json();
    setShortUrl(result.shortUrl);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Long Url:
          <input 
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value) }
            required
          />
        </label>

        <button type="submit">
          Shorten URL
        </button>
      </form>

      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a 
            href={shortUrl} 
            target="_blank" 
            rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  )
}

export default Home;
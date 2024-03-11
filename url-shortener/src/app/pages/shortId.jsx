import { useEffect, React } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { shortId } = router.query;

    if (shortId) {
      fetch(`/api/redirect/${shortId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.longUrl) {
            window.location.href = data.longUrl;
          } else {
            console.log('Original URL not found');
          }
        })
        .catch((error) => {
          console.log('Error fetching original URL:', error);
        });
      }
  }, [router.query]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
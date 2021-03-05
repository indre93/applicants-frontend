import React from 'react';

const useFetch = (url) => {
  // Utilize useState to add Hook state to function component without writing a class component.
  // Set initial value of data and error to null
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isPending, setIsPending] = React.useState(true);

  // Use useEffect Hook to fetch mock json from db.json file.
  React.useEffect(() => {

    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw Error("Unable to fetch applicants data");
        }
        return resp.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      // add catch to catch any network or fetching errors
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  }, [url]);

  return { data, error, isPending };
};

export default useFetch;

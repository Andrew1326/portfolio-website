import {Dispatch, SetStateAction, useEffect, useState} from 'react';

const useSearch = (): Dispatch<SetStateAction<string>> => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    url && window.open(`https://google.com/search?q=${url}`, 'target=_blank');
    return () => setUrl('');
  }, [url]);

  return setUrl;
};

export default useSearch;

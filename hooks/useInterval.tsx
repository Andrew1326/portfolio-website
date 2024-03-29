import {useEffect, useRef} from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  //* Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //* Set up the interval.
  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;

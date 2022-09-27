import { useEffect, useMemo, useState } from "react";

const useIsInViewPort = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      console.log("disconnected....");
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsInViewPort;

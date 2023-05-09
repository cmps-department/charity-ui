import { useEffect, useState } from "react";

const useStrictDroppable = (loading) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let animation;

    if (!loading) {
      animation = requestAnimationFrame(() => setEnabled(true));
    }

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, [loading]);

  return [enabled];
};

export default useStrictDroppable;

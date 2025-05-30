import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean; 
}

function useIntersectionObserver(
  options?: IntersectionObserverOptions
): [RefObject<HTMLDivElement>, boolean] {
  const { threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = false } = options || {};
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    if (freezeOnceVisible && hasBeenVisible) {
        // If it's frozen and has been visible, ensure isIntersecting is true
        if(!isIntersecting) setIsIntersecting(true);
        return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting;
        setIsIntersecting(intersecting);
        if (intersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [targetRef, threshold, root, rootMargin, freezeOnceVisible, hasBeenVisible, isIntersecting]);

  return [targetRef, (freezeOnceVisible && hasBeenVisible) || isIntersecting];
}

export default useIntersectionObserver;
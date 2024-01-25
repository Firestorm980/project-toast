import { useEffect } from 'react'

function useEscapeKey (callback) {
  useEffect(() => {
    const handleEsc = (event) => {
      if ('Escape' !== event.key) {
        return;
      }
      callback();
    }

    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [callback])
}

export default useEscapeKey
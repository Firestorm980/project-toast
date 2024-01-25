import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

const ToastProvider = ({children}) => {
  
  const [toasts, setToasts] = React.useState([]);
  
  const addToast = ({message, variant, id}) => {
    setToasts((toasts) => [...toasts, {message, variant, id}]);
  };
  
  const removeToast = (id) => {
    setToasts((toasts) => toasts.filter(({id: _id}) => _id !== id));
  };
  
  const removeAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(removeAllToasts);
    
    return (
        <ToastContext.Provider value={{toasts, addToast, removeToast, removeAllToasts}}>
            {children}
        </ToastContext.Provider>
    );
};

export default ToastProvider;
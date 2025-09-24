import * as React from "react"
import { cn } from "../../../utils/cn"

const Drawer = ({ isOpen, onClose, children, className }) => {
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={cn(
        "fixed inset-y-0 right-0 flex max-w-full pt-16 pb-6",
        className
      )}>
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-background/90 backdrop-blur-md shadow-xl rounded-l-lg">
            <div className="px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-base font-semibold leading-6 text-white">
                  Filtros
                </h2>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="rounded-md bg-transparent text-white hover:text-main focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Fechar</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex-1 px-4 sm:px-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Drawer }
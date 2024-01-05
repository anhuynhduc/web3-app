import React from 'react';

interface ModalProps {
  isVisible: any;
  onClose: () => void,
  children: React.ReactNode
}

 export const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === 'wrapper') onClose()
  }

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        <div className="bg-white p-2 rounded">
          <button
            className="text-black text-xl place-self-end cursor-pointer float-end mr-2"
            onClick={() => onClose()}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};


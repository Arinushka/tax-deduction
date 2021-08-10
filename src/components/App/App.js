import './App.css';
import React from 'react';
import { Main } from './../Main/Main';

export const App = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const popupOpen = () => {
    setIsPopupOpen(true);
  }
  const closePopup = () => {
    setIsPopupOpen(false);
  }
  return (
    <div className="app">
     <Main
     isOpen={isPopupOpen}
     popupOpen={popupOpen}
     closePopup={closePopup}/>
    </div>
  );
}

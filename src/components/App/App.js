import './App.css';
import React from 'react';
import { Main } from './../Main/Main';

export const App = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isClickForCheckbox, setIsClickForCheckbox] = React.useState(false);
  const [tax, setTax] = React.useState(0);

  const popupOpen = () => {
    setIsPopupOpen(true);
  }
  const closePopup = () => {
    setIsPopupOpen(false);
    setIsClickForCheckbox(false);
  }

  const checkBoxOpen = () => {
    setIsClickForCheckbox(true);
  }

  const taxForOneYear = (value) => {
    if (value > 260000) {
      return setTax(260000)
    } else {
      setTax((value * 12) * 0.13)
    }
  }

  const taxForTwoYears = (tax) => {
    if (tax + tax < 260000) {
      return tax
    } else {
      return 260000 - tax
    }
  }

  const taxForThreeYears = (tax) => {
    if (tax + tax + tax < 260000) {
      return tax
    } else {
      return 260000 - tax - tax
    }
  }

  const taxForFourYears = (tax) => {
    if (tax + tax + tax + tax < 260000) {
      return tax
    } else {
      return 260000 - tax - tax - tax
    }
  }


  return (
    <div className="app">
      <Main
        isOpen={isPopupOpen}
        popupOpen={popupOpen}
        closePopup={closePopup}
        isClick={isClickForCheckbox}
        checkBoxOpen={checkBoxOpen}
        taxForOneYear={taxForOneYear}
        tax={tax}
        taxForTwoYears={taxForTwoYears}
        taxForThreeYears={taxForThreeYears}
        taxForFourYears={taxForFourYears} />
    </div>
  );
}

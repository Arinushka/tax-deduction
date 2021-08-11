import './Main.css';
import { Popup } from './../Popup/Popup';

export const Main = (props) => {
	return (
		<main className="main">
			{!props.isOpen && <div className="main__wrapper">
				<button onClick={props.popupOpen} className="main__button" type="button">Налоговый вычет</button>
			</div>}
			{props.isOpen && <Popup 
			isOpen={props.isOpen}
			closePopup={props.closePopup}
			isClick={props.isClick}
			checkBoxOpen={props.checkBoxOpen}
			taxForOneYear={props.taxForOneYear}
			tax={props.tax}
			taxForTwoYears={props.taxForTwoYears}
			taxForThreeYears={props.taxForThreeYears}
			taxForFourYears={props.taxForFourYears}/>}
		</main>
	);
}

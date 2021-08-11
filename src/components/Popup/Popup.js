import './Popup.css';
import React from 'react';

export const Popup = (props) => {

	const [valueInput, setValueInput] = React.useState();

	const handleValueInput = (e) => {
		setValueInput(e.target.value);
	}

	const calculateTax = () => {

		props.taxForOneYear(valueInput);
		props.checkBoxOpen();


	}

	const thousandSeparator = (number) => {
		return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')

	}


	const handleYears = (tax) => {


	}





	return (
		<div className={`popup ${props.isOpen} && popup_opened`}>
			<form className="popup__form">
				<button className="popup__button-close" onClick={props.closePopup}></button>
				<h1 className="popup__title">Налоговый вычет</h1>
				<p className="popup__subtitle">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
				<p className="popup__title-input">Ваша зарплата в месяц</p>
				<input value={valueInput} onChange={handleValueInput} type="number" className="popup__input-tax" placeholder="Введите данные"></input>
				<button className="popup__button-add" type="button" onClick={calculateTax}>Рассчитать</button>
				{props.isClick && <div className="popup__wrapper">
					<h3 className="popup__title-wrapper">Итого можете внести в качестве досрочных:</h3>
					<div className="popup__input-wrapper">
						<p className="popup__input-text"><input className="popup__input-checkbox" type="checkbox" name="" /> {`${thousandSeparator(props.tax)} рублей`}<span className="popup__span"> в 1-ый год</span></p>
					</div>
					{props.taxForTwoYears(props.tax) > 0 && <div className="popup__input-wrapper">
						<p className="popup__input-text"><input className="popup__input-checkbox" type="checkbox" name="" /> {`${thousandSeparator(props.taxForTwoYears(props.tax))} рублей`}<span className="popup__span"> в 2-ый год</span></p>
					</div>}
					{props.taxForThreeYears(props.tax) > 0 && <div className="popup__input-wrapper">
						<p className="popup__input-text"><input className="popup__input-checkbox" type="checkbox" name="" /> {`${thousandSeparator(props.taxForThreeYears(props.tax))} рублей`}<span className="popup__span"> в 3-ый год</span></p>
					</div>}
					{props.taxForFourYears(props.tax) > 0 && <div className="popup__input-wrapper">
						<p className="popup__input-text"><input className="popup__input-checkbox" type="checkbox" name="" />  {`${thousandSeparator(props.taxForFourYears(props.tax))} рублей`}<span className="popup__span"> в 4-ый год</span></p>
					</div>}
				</div>}
				<div className="popup__button-wrapper">
					<p className="popup__title-choice">Что уменьшаем?</p>
					<button className="popup__button-choice popup__button-choice_different_color">Платёж</button>
					<button className="popup__button-choice">Срок</button>
				</div>
				<button className="popup__button-submit">Добавить</button>

			</form>
		</div>
	);
}
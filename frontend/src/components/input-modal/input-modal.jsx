import { COLOR } from '../../constants';
import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import { selectInputModalState } from '../../selectors';
import { useState } from 'react';
import styled from 'styled-components';

const InputModalContainer = ({ className }) => {
	const text = useSelector(selectInputModalState).text;
	const question = useSelector(selectInputModalState).question;
	const [inputValue, setInputValue] = useState(text);
	const onConfirm = useSelector(selectInputModalState).onConfirm;
	const onCancel = useSelector(selectInputModalState).onCancel;

	return (
		<div className={className}>
			<div className="modal">
				{question ? (
					<p>{question}</p>
				) : (
					<textarea
						rows="9"
						placeholder="Введите текст"
						value={inputValue}
						onChange={({ target }) => setInputValue(target.value)}
					></textarea>
				)}
				<div className="btn-box">
					<Button
						type="submit"
						width="200px"
						style="filled-dark"
						onClick={() => onConfirm(inputValue)}
					>
						Применить
					</Button>
					<Button width="200px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const InputModal = styled(InputModalContainer)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	z-index: 100;
	backdrop-filter: blur(5px);

	& .modal {
		margin-top: 25vh;
		border: 2px solid ${COLOR.DARK};
		border-radius: 14px;
		background-color: ${COLOR.LIGHT};
		width: 1000px;
		height: fit-content;

		& p {
			text-align: center;
			font-size: 30px;
			color: ${COLOR.DARK};
			margin: 50px 0 100px;
		}
	}

	& textarea {
		width: 100%;
		padding: 15px;
		font-size: 24px;
		resize: none;
		border: none;
		border-bottom: 2px solid ${COLOR.DARK};
		border-top-left-radius: 14px;
		border-top-right-radius: 14px;
	}

	& .btn-box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-block: 20px;
	}
`;

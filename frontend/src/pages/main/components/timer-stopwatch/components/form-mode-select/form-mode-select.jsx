import { useDispatch } from 'react-redux';
import { setIsRunning, setSeconds, setMode } from '../../../../../../actions';
import styled from 'styled-components';

const FormModeSelectContainer = ({ className, mode }) => {
	const dispatch = useDispatch();

	const onTimerClick = () => {
		dispatch(setMode('timer'));
		dispatch(setIsRunning(false));
		dispatch(setSeconds(0));
	};

	const onStopwatchClick = () => {
		dispatch(setMode('stopwatch'));
		dispatch(setIsRunning(false));
		dispatch(setSeconds(0));
	};

	return (
		<form className={className}>
			<label>
				<input
					type="radio"
					name="mode"
					value="timer"
					checked={mode === 'timer'}
					onChange={onTimerClick}
				/>
				Таймер
			</label>
			<label>
				<input
					type="radio"
					name="mode"
					value="stopwatch"
					checked={mode === 'stopwatch'}
					onChange={onStopwatchClick}
				/>
				Секундомер
			</label>
		</form>
	);
};

export const FormModeSelect = styled(FormModeSelectContainer)`
	display: flex;
	line-height: 22px;
	column-gap: 20px;
	font-size: 20px;
`;

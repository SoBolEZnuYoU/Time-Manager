import { Input } from '../../../../../../components';
import { setSeconds, setMinutes } from '../../../../../../actions';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const TimerInputsContainer = ({ className, minutes, seconds }) => {
	const dispatch = useDispatch();
	return (
		<div className={className}>
			<Input
				width="70px"
				type="number"
				value={minutes}
				onChange={(e) => dispatch(setMinutes(Math.max(0, e.target.value)))}
			/>
			<span>:</span>
			<Input
				width="70px"
				type="number"
				value={seconds}
				onChange={(e) => dispatch(setSeconds(Math.max(0, e.target.value)))}
			/>
		</div>
	);
};

export const TimerInputs = styled(TimerInputsContainer)`
	font-size: 40px;
	display: flex;
	gap: 15px;
`;

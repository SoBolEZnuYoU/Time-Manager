import { ROLE } from '../../constants';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { SelectBlock, TimerStopwatch } from './components';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const roleId = useSelector(selectUserRole);

	const access = roleId === ROLE.USER || roleId === ROLE.VIP;
	return (
		<div className={className}>
			<TimerStopwatch />
			<SelectBlock access={access} />
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

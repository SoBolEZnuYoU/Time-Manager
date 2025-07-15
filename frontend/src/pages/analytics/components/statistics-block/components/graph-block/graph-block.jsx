import { Button } from '../../../../../../components';
import styled from 'styled-components';

const GraphBlockContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="btn-box">
				<Button width="250px">Часов в работе</Button>
				<Button width="250px">Завершено</Button>
			</div>
		</div>
	);
};

export const GraphBlock = styled(GraphBlockContainer)`
	width: 60%;

	& .btn-box {
		display: flex;
		justify-content: space-evenly;
	}
`;

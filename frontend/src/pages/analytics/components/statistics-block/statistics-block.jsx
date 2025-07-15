import styled from 'styled-components';
import { COLOR } from '../../../../constants';
import { Button, H2 } from '../../../../components';
import { GraphBlock, TextBlock } from './components';

const StatisticsBlockContainer = ({ className, type }) => {
	return (
		<div className={className}>
			<H2 color={COLOR.LIGHT}>{type === 'projects' ? 'Проекты' : 'Задачи'}</H2>
			<div className="info">
				<GraphBlock />
				<TextBlock type={type} />
			</div>
		</div>
	);
};

export const StatisticsBlock = styled(StatisticsBlockContainer)`
	height: 37.5%;

	& h2 {
		height: 67.5px;
		text-align: center;
		font-size: 30px;
		padding: 12px;
		background-color: ${COLOR.DARK};
		border-left: 1px solid ${COLOR.LIGHT};
		color: ${COLOR.LIGHT};
	}

	& .info {
		display: flex;
		padding: 10px 15px;
		height: 275px;

		& .graph-block {
			width: 60%;

			& .btn-box {
				display: flex;
				justify-content: space-evenly;
			}
		}
	}
`;

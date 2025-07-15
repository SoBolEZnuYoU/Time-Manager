import styled from 'styled-components';
import { COLOR } from '../../../../../../constants';

const TextBlockContainer = ({ className, type }) => {
	return (
		<div className={className}>
			<p>{type === 'projects' ? 'Проектов в работе:' : 'Задач в работе:'}</p>
			<p>Личные:</p>
			<p>Рабочие:</p>
			<p>
				{type === 'projects' ? 'Самый длительный проект:' : 'Самая длительная задача:'}
			</p>
		</div>
	);
};

export const TextBlock = styled(TextBlockContainer)`
	font-size: 28px;
	color: ${COLOR.DARK};

	& p {
		margin-bottom: 15px;

		&:nth-child(3) {
			margin-bottom: 40px;
		}
	}
`;

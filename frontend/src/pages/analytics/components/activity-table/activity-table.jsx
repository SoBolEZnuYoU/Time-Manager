import styled from 'styled-components';
import { COLOR } from '../../../../constants';

const ActivityTableContainer = ({ className }) => {
	return (
		<div className={className}>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>За сегодня</th>
						<th>За всё время</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Активность:</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>Выполнено задач:</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>Сдано проектов:</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export const ActivityTable = styled(ActivityTableContainer)`
	height: 25%;

	& table {
		height: 100%;
		width: 100%;
		border-spacing: 0;

		& thead {
			height: 25%;
			background-color: ${COLOR.DARK};
			color: ${COLOR.LIGHT};
			font-size: 30px;

			& th {
				border-left: 1px solid ${COLOR.LIGHT};
			}
		}

		& td {
			width: 33.33%;
			padding-left: 20px;
			background-color: ${COLOR.LIGHT};
			border-bottom: 1px solid ${COLOR.DARK};
			font-size: 20px;
			color: ${COLOR.DARK};

			&:not(:first-child) {
				border-left: 1px solid ${COLOR.DARK};
			}
		}
	}
`;

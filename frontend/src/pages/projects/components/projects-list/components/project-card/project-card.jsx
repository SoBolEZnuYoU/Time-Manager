import { useNavigate } from 'react-router';
import { Icon } from '../../../../../../components';
import { COLOR } from '../../../../../../constants';
import styled from 'styled-components';
import { transformDate } from '../../../../../../utils';

const ProjectCardContainer = ({ className, project }) => {
	const id = project.id;
	const title = project.title;
	const createdAt = project.createdAt;
	const navigate = useNavigate();
	const date = transformDate(createdAt);

	return (
		<li className={className} onClick={() => navigate(`/project/${id}`)}>
			<Icon id="fa-folder" size="140px" color={COLOR.ORANGE} />
			<div className="text-block">
				<p className="title">{title}</p>
				<p className="date">{date}</p>
			</div>
		</li>
	);
};

export const ProjectCard = styled(ProjectCardContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 180px;
	font-size: 20px;
	color: ${COLOR.DARK};
	cursor: pointer;

	& .text-block {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 15px;
		height: 100%;
		width: 100%;

		& .title {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: center;
		}

		& .date {
			font-size: 16px;
			text-align: end;
		}
	}
`;

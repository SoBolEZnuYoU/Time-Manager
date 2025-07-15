import { useSelector } from 'react-redux';
import { ProjectCard } from './components';
import { selectProjects } from '../../../../selectors';
import { COLOR } from '../../../../constants';
import styled from 'styled-components';

const ProjectsListContainer = ({ className }) => {
	const projects = useSelector(selectProjects).projects;

	const hasProjects = projects.length > 0;

	return (
		<div className={className}>
			{hasProjects ? (
				<ul className="list">
					{projects.map((project) => (
						<ProjectCard
							project={project}
							createdAt={project.createdAt}
							key={project.id}
						/>
					))}
				</ul>
			) : (
				<p className="message">Проекты не найдены</p>
			)}
		</div>
	);
};

export const ProjectsList = styled(ProjectsListContainer)`
	& .list {
		display: flex;
		column-gap: 93px;
		row-gap: 30px;
		flex-wrap: wrap;
		overflow-y: auto;
		max-height: 700px;
	}

	& .message {
		margin-top: 100px;
		text-align: center;
		font-size: 30px;
		color: ${COLOR.DARK};
	}
`;

import { ProjectHeader, Comment, ProjectTasksList } from './components';
import { COLOR } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentProject } from '../../selectors';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadProjectAsync } from '../../actions';
import { request } from '../../utils';
import styled from 'styled-components';
import { Loader } from '../../components';

const ProjectContainer = ({ className }) => {
	const project = useSelector(selectCurrentProject);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		dispatch(loadProjectAsync(request, params.id)).then(() => setIsLoading(false));
	}, [dispatch, params.id]);

	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<ProjectHeader
						id={project.id}
						title={project.title}
						spendTime={project.spendTime}
						createdAt={project.createdAt}
					/>
					<ProjectTasksList tasks={project.tasks} projectId={project.id} />
					<Comment id={project.id} comment={project.comment} />
				</>
			)}
		</div>
	);
};

export const Project = styled(ProjectContainer)`
	height: 100%;
	color: ${COLOR.DARK};
	font-size: 24px;
	font-weight: bold;
`;

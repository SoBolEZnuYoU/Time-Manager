import { CreateSearchBlock, Loader, Pagination } from '../../components';
import { ProjectsList } from './components';
import { useEffect, useMemo, useState } from 'react';
import { debounce, request } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
	addProjectAsync,
	closeModal,
	loadProjectsAsync,
	openInputModal,
} from '../../actions';
import { selectProjects, selectUserId } from '../../selectors';
import styled from 'styled-components';

const ProjectsContainer = ({ className }) => {
	const dispatch = useDispatch();

	const refreshFlag = useSelector(selectProjects).refreshFlag;
	const lastPage = useSelector(selectProjects).lastPage;
	const userId = useSelector(selectUserId);

	const [page, setPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (userId) {
			setIsLoading(true);
			dispatch(loadProjectsAsync(request, page, searchPhrase, userId)).then(() =>
				setIsLoading(false),
			);
		}
	}, [dispatch, refreshFlag, page, shouldSearch, userId]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	const onCreateProject = () => {
		dispatch(
			openInputModal({
				onConfirm: (title) => {
					dispatch(addProjectAsync(request, title, userId));
					dispatch(closeModal);
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	return (
		<div className={className}>
			<CreateSearchBlock
				onClick={onCreateProject}
				searchPhrase={searchPhrase}
				onChange={onSearch}
			/>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<ProjectsList />
					{lastPage > 1 && (
						<Pagination page={page} setPage={setPage} lastPage={lastPage} />
					)}
				</>
			)}
		</div>
	);
};

export const Projects = styled(ProjectsContainer)`
	padding: 30px 50px;
`;

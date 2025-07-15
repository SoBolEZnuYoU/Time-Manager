import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../../../../utils';
import { COLOR } from '../../../../../../constants';
import { Icon, Loader } from '../../../../../../components';
import { setProjectData } from '../../../../../../actions';
import { setTaskData } from '../../../../../../actions';
import { selectUserId } from '../../../../../../selectors';
import styled from 'styled-components';

const SelectWindowContainer = ({ className, type, setSelectWindow, setTypeOfWindow }) => {
	const dispatch = useDispatch();

	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const userId = useSelector(selectUserId);

	const content = type === 'projects' ? projects : tasks;

	useEffect(() => {
		if (type === 'projects') {
			request(`/api/projects?userId=${userId}`, 'GET').then(({ data }) => {
				setProjects(data.projects);
				setIsLoading(false);
			});
		} else if (type === 'tasks') {
			request(`/api/tasks?userId=${userId}`, 'GET').then(({ data }) => {
				setTasks(data.tasks);
				setIsLoading(false);
			});
		}
	}, [type, dispatch]);

	const onSelectItem = (item) => {
		if (type === 'projects') {
			dispatch(setProjectData(item));
		} else {
			dispatch(setTaskData(item));
		}
		setSelectWindow(false);
	};

	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Icon
						id="fa-arrow-left"
						color={COLOR.DARK}
						size="34px"
						onClick={() => {
							setSelectWindow(false);
							setTypeOfWindow('');
						}}
					/>
					<ul className="list">
						{content.map((item) => (
							<li key={item.id} onClick={() => onSelectItem(item)}>
								{item.title}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export const SelectWindow = styled(SelectWindowContainer)`
	position: relative;
	height: 100%;

	& i {
		margin-bottom: 25px;
	}

	& .list {
		max-width: 900px;
		max-height: 350px;
		font-size: 26px;
		color: ${COLOR.DARK};
		overflow-y: auto;
	}

	& li {
		border: 2px solid ${COLOR.DARK};
		background-color: white;
		border-radius: 14px;
		padding: 7px 15px;
		margin-bottom: 15px;
        min-width: 400px;
		cursor: pointer;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;

		&:hover {
			background-color: #ededeb;
		}
	}
`;

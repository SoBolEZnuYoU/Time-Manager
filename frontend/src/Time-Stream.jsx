import { Routes, Route } from 'react-router';
import { InputModal, LeftBar } from './components';
import {
	Analytics,
	Authorization,
	Project,
	Main,
	Projects,
	Registration,
	Tasks,
	UserSettings,
	NotFound,
} from './pages';
import { COLOR, ROLE } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputModalState, selectUserRole } from './selectors';
import { useLayoutEffect } from 'react';
import { setUser } from './actions';
import styled from 'styled-components';

const TimeStreamContainer = ({ className }) => {
	const inputModalIsOpen = useSelector(selectInputModalState).isOpen;
	const dispatch = useDispatch();
	const isVip = useSelector(selectUserRole) === ROLE.VIP;

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<div className={className}>
			<LeftBar />
			<div className="content">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route
						path="/analytics"
						element={isVip ? <Analytics /> : <NotFound>Получите полную версию</NotFound>}
					/>
					<Route path="/user-settings" element={<UserSettings />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="*" element={<NotFound>Такой страницы не существует</NotFound>} />
				</Routes>
			</div>
			{inputModalIsOpen && <InputModal />}
		</div>
	);
};

export const TimeStream = styled(TimeStreamContainer)`
	display: flex;
	width: 1350px;
	height: 100vh;
	margin: 0 auto;
	box-shadow: 0 0 20px 0 #333;

	& .content {
		position: relative;
		background-color: ${COLOR.LIGHT};
		height: 100%;
		width: 1100px;
	}
`;

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components';
import { logout, setUser } from '../../actions';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { selectUserId } from '../../selectors';
import { request } from '../../utils';
import { ROLE } from '../../constants';

const UserSettingsContainer = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userId = useSelector(selectUserId);

	const onLogout = () => {
		dispatch(logout());
		navigate('/');

		sessionStorage.removeItem('userData');
	};

	const getFullVersion = () => {
		request(`/api/user/${userId}`, 'PATCH', { roleId: ROLE.VIP }).then(({ user }) =>
			dispatch(setUser(user)),
		);
	};

	return (
		<div className={className}>
			<Button width="400px" type="button" onClick={getFullVersion}>
				Получить полную версию
			</Button>
			<Button type="button" style="filled-dark" onClick={onLogout}>
				Выйти
			</Button>
		</div>
	);
};

export const UserSettings = styled(UserSettingsContainer)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 30px;
`;

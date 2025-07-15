import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, H2, ErrorMessage } from '../../components';
import { COLOR } from '../../constants';
import { request } from '../../utils';
import { setUser } from '../../actions';
import styled from 'styled-components';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин, допускаются только буквы и цыфры')
		.min(3, 'Минимальная длина логина - 3 символа')
		.max(20, 'Максимальная длина логина - 20 символов'),
	password: yup
		.string()
		.required('Введите пароль')
		.matches(/^[\w#%]+$/, 'Неверно заполнен пароль. Допускаются буквы, цыфры, #, %')
		.min(8, 'Минимальная длина пароля - 8 символов')
		.max(30, 'Максимальная длина пароля - 30 символов'),
});

const AuthorizationContainer = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	const onSubmit = async ({ login, password }) => {
		await request('/api/login', 'POST', { login, password }).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(user));
			sessionStorage.setItem('userData', JSON.stringify(user));
			navigate('/');
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" placeholder="Логин" {...register('login')} />
				<Input type="password" placeholder="Пароль" {...register('password')} />
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<Button width="250px" style="filled-dark" type="submit">
					Авторизоваться
				</Button>
				<Button
					width="250px"
					type="submit"
					disabled={!!formError}
					onClick={() => navigate('/register')}
				>
					Регистрация
				</Button>
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	margin-top: 200px;
	border-block: 2px solid ${COLOR.DARK};
	padding-block: 25px;

	& form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
		width: 350px;
	}
`;

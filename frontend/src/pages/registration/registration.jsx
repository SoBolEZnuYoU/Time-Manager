import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { request } from '../../utils';
import { setUser } from '../../actions';
import { H2, Input, Button, ErrorMessage } from '../../components';
import { COLOR } from '../../constants';
import { useNavigate } from 'react-router';
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
	passcheck: yup
		.string()
		.required('Повторите пароль')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const RegistrationContainer = ({ className }) => {
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
			passcheck: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	const onSubmit = ({ login, password }) => {
		request('/api/register', 'POST', { login, password }).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(user));
			sessionStorage.setItem('userData', JSON.stringify(user));
			navigate('/');
		});
	};

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин"
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль"
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Повторите пароль"
					{...register('passcheck', {
						onChange: () => setServerError(null),
					})}
				/>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<Button width="350px" style="filled-dark" type="submit">
					Зарегистрироваться
				</Button>
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
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

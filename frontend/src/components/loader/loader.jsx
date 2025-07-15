import styled from 'styled-components';
import { COLOR } from '../../constants';

const LoaderContainer = ({ className }) => {
	return <div className={className}></div>;
};

export const Loader = styled(LoaderContainer)`
	position: absolute;
	top: 45%;
	left: calc(50% - 25px);
	width: 50px;
	height: 50px;
	border: 10px solid ${COLOR.DARK};
	border-right-color: transparent;
	border-radius: 50%;
	animation: loader 1s infinite;

	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;

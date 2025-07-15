import { styled } from 'styled-components';

const NotFoundContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const NotFound = styled(NotFoundContainer)`
	color: red;
	text-align: center;
	font-size: 24px;
	margin-top: 100px;
`;

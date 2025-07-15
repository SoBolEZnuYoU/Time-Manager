import { Button } from '../button/button';
import styled from 'styled-components';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				{'<<'}
			</Button>
			<Button className="current-page">{page}</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				{'>>'}
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	position: absolute;
	left: 50%;
	bottom: 50px;
	transform: translate(-50%);
	display: flex;
	justify-content: center;
	gap: 5px;

	& .current-page {
		font-size: 30px;
		border: 2px solid #1c1c1c;
	}
`;

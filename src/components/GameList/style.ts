import styled, { css } from "styled-components";

export const GameList  = styled.div`
	${() => css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		
	`}
`;

export const ProductItemListHeaderTitle = styled.h1`
	${() => css`
		margin: 0;
		color: white;
	`}
`;

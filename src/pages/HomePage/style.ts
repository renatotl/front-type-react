import styled, { css } from "styled-components";

export const body = styled.div`
	${({ theme }) => css`
		background-color: red;
		
		background-size: cover;/* faz combri a tela inteira */
		background-position: center;
		width: 100vw;
		height: 47.3vw;
		display: flex;
		div {
			flex-direction: table-row ;
		}
	`}
`;

export const HomeHeaderDetailsSearch = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 10px;
		${theme.mixins.input()};
		padding-top: 0;
		padding-bottom: 0;
		padding-right: 0;
		input {
			background: transparent;
			border: none;
			height: 100%;
			color: ${theme.colors.textColor};
		}
	`}
`;

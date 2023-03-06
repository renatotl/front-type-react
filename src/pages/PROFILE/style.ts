import styled, { css } from "styled-components";

export const body = styled.div`
	${({ theme }) => css`
	background-color: ${theme.colors.baseBg2};
		
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


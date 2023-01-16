import styled, { css } from "styled-components";

export const body = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg2};
		
		background-size: cover;/* faz combri a tela inteira */
		background-position: center;
		width: 100vw;
		height: 47.3vw;
	`}
`;
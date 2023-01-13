import styled, { css } from "styled-components";

export const Login = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg2};
		
		background-size: cover;/* faz compri a tela inteira */
		background-position: center;
		width: 100vw;
		height: 100vh;
	`}
`;
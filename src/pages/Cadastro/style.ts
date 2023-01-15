import styled, { css } from "styled-components";

export const Login = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg2};
		
		background-size: cover;/* faz combri a tela inteira */
		background-position: center;
		width: 100vw;
		height: 47.3vw;
	`}
`;

export const LoginContent = styled.main`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center; ;
	`}
`;
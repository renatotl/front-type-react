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

// vamos definir a const HomeHeaderDetailsSearch que será o componente estilizado para a barra de pesquisa:
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

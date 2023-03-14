import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Back } from "assets/icons/back.svg";

/* Criamos as animações `slideShow`e `slideHide` para definir posteriormente o mecanismo de exibição da barra lateral. */

const slideShow = keyframes`
	from {
		right: -100vw;
	}
	to {
		right: 0;
	}
`;
export const BackIcon = styled(Back)`
  ${() => css`
    cursor: pointer;
    height: 550px;
    width: 40px;
  `}
`;
 
export const BoxLogin = styled.section`
	${({ theme }) => css`
		background: ${theme.colors.baseBg2};
		width: 330px;
		height: 500px;
		padding: 20px 20px 20px 20px;
		margin: 20px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
		color: ${theme.colors.textColor};
	`}
`;

export const ProductItem = styled.div`
	${({ theme }) => css`
		background: ${theme.colors.baseBg2};
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 15px;
		align-items: center;
		max-width: 200px;
		width: 100%;
		cursor: pointer;
		min-height: 225px;
	   
		
		div {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 10px;
			
		}
	`}
`;

export const ProductItemImage = styled.img`
	${() => css`
		width: 150px;
		margin-top: -50px;
	`}
`;

export const ProductItemName = styled.h3`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()}
		text-align: center;
		max-width: 90%;
		margin: 0;
	`}
`;
export const BoxLoginLogo = styled.div`
  ${() => css`
  	display: flex;
  	justify-content: space-around;
  	align-items: center;
  `}
`;

export const BoxLoginLogoText = styled.h1`
${({ theme }) => css`
font-family: ${theme.constants.logoFontFamily};
font-size: 1em;
line-height: 40px;
font-weight: 20;
text-transform: uppercase;
margin: 1px 0;
padding: 2.5px 0;
display: flex;
flex-direction: column;
justify-content: center;
border-top: 1px solid ${theme.colors.textColor};
border-bottom: 1px solid ${theme.colors.textColor};
text-align: end;
width: calc(65% - 10px);
span:first-child {
    border-top: 1px solid ${theme.colors.textColor};
    display: inline-block;
    letter-spacing: 9px;
}
span:last-child {
    border-bottom: 1px solid ${theme.colors.textColor};
    display: inline-block;
    letter-spacing: 9px;
    letter-spacing: 6px;
}
`}
`

export const BoxLoginForm = styled.form`
  ${({ theme }) => css`
  	display: flex;
  	flex-direction: column;
  	gap: 15px;
  	input {
  		${theme.mixins.input()};
  		color: ${theme.colors.textColor};
  	}
  `}
`;

const slideHide = keyframes`
	from {
		right: 0;
	}
	to {
		right: -100vw;
	}
`;

/* Abaixo seguem os modificadores de estado da animação */

const CheckoutSectionModifiers = {
  closing: () => css`
    animation: ${slideHide} 1s;
  `,
};

type CheckoutSectionStyled = { closing: boolean };

export const CheckoutSection = styled.section<CheckoutSectionStyled>`
  ${({ theme, closing }) => css`
    background: ${theme.colors.baseBg2};
    right: 0;
    position: absolute;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    border-radius: 16px 0 0 16px;
    animation: ${slideShow} 1s;
    ${closing && CheckoutSectionModifiers.closing()};
  `}
`;

export const CheckoutSectionConfirmation = styled.div`
  ${({ theme }) => css`
    border-right: 1px solid ${theme.colors.baseLine};
    padding: 15px;
  `}
`;




export const CheckoutSectionPayment = styled.div`
  ${() => css`
    width: 400px;
    padding: 15px;
    max-height: 100vh;
    overflow: auto;
  `}
`;

export const CheckoutSectionPaymentHead = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.headingStyle()};
    margin: 32px 0 0 0;
  `}
`;

export const CheckoutSectionPaymentSub = styled.h4`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    margin: 0;
    color: ${theme.colors.textLight};
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0 25px 0;
  `}
`;

export const CheckoutSectionPaymentForm = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.baseLine};
    border-bottom: 1px solid ${theme.colors.baseLine};
    padding: 15px 0;
  `}
`;

export const CheckoutSectionPaymentFormTitle = styled.h4`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  `}
`;

export const PaymentForm = styled.form`
  ${({ theme }) => css`
    min-height: 340px;
    label {
      ${theme.mixins.bodyStyle()};
      font-weight: 500;
    }
    input {
      margin-top: 8px;
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
    }
  `}
`;

export const PaymentFormCheckbox = styled.div`
  ${() => css`
    display: flex;
    margin-top: 15px;
    gap: 10px;
  `}
`;

export const PaymentFormGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  `}
`;

export const PaymentFormHalf = styled.div`
  ${() => css`
    display: flex;
    margin-top: 15px;
    gap: 15px;
  `}
`;

export const PaymentFormHalfItem = styled.div`
  ${() => css`
    display: flex;
    width: 50%;
    flex-direction: column;
  `}
`;

export const PaymentActions = styled.div`
  ${() => css`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;

export const PaymentActionsDetails = styled.div`
  ${() => css`
    display: flex;
    gap: 15px;
  `}
`;

export const PaymentActionsDetailsOrderType = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    select {
      ${theme.mixins.select(false)};
    }
  `}
`;

export const PaymentActionsDetailsTableNumber = styled.div`
  ${({ theme }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    input {
      color: ${theme.colors.textColor};
      ${theme.mixins.input()};
    }
  `}
`;

export const PaymentActionsButtonGroup = styled.div`
  ${() => css`
    display: flex;
    gap: 15px;
  `}
`;

export const PaymentActionsButtonGroupCancel = styled.button`
  ${({ theme }) => css`
    width: 50%;
    ${theme.mixins.buttonOutline(theme.colors.secondaryColor)};
  `}
`;

export const PaymentActionsButtonGroupConfirm = styled.button`
  ${({ theme }) => css`
    width: 50%;
    ${theme.mixins.buttonFilled()};
  `}
`;
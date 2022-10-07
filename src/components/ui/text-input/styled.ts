import styled, { css } from 'styled-components'
import { StyledInputProps } from './types'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`

export const WrapperInput = styled.div`
	width: 100%;
	position: relative;
`

export const WrapperIcon = styled.div`
	position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);

	& > svg {
		color: ${({ theme }) => theme.colors.neutralColors.grey.g3};
		width: 20px;
		height: 20px;
	}
`

export const inputCommonStyle = css<StyledInputProps>`
	color: ${({ theme }) => theme.colors.textColors.primary};
	font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-size: ${({ theme }) => theme.typography.fontSize.lg};
	line-height: ${({ theme }) => theme.typography.lineHeight.base};
	letter-spacing: ${({ theme }) => theme.spacing.px};
	background-color: ${({ theme }) => theme.colors.neutralColors.white};
	border-radius: ${({ theme }) => theme.border.borderRadius.xs}
		${({ theme }) => theme.border.borderRadius.xs} 0 0;
	padding: 0 ${({ theme }) => theme.spacing.s2};
	font-size: ${({ theme }) => theme.typography.fontSize.md};
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	letter-spacing: ${({ theme }) => theme.spacing.px};
	border: none;
	border-bottom: 2px solid;
	transition: ${({ theme }) => theme.animation.fast} all linear;
	border-color: ${({ theme }) => theme.colors.neutralColors.grey.g2};
	height: 40px;
	outline: none;
	width: 100%;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;

	${({ $icon }) =>
		$icon &&
		css`
			padding-right: ${({ theme }) => theme.spacing.s10};
		`}

	${({ $error }) =>
		$error &&
		css`
			background-color: ${({ theme }) => theme.colors.neutralColors.white};
			border-bottom: 2px solid;
			border-color: ${({ theme }) => theme.colors.semanticColors.danger};
		`}

	&:focus {
		background-color: ${({ theme }) => theme.colors.neutralColors.white};
		border-bottom: 2px solid;
		border-color: ${({ theme }) => theme.colors.brandColors.secondary};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.neutralColors.grey.g1};
		border-color: ${({ theme }) => theme.colors.neutralColors.grey.g2};
	}

	::placeholder {
		color: ${({ theme }) => theme.colors.neutralColors.grey.g3};
	}
`

export const Input = styled.input<StyledInputProps>`
	${inputCommonStyle}
	[type='number'] {
		-moz-appearance: textfield;
	}
`

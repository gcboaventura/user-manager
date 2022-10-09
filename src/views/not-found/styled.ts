import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
`

export const Icon = styled.div`
	& > svg {
		color: ${({ theme }) => theme.colors.brandColors.primary};
		width: 100px;
		height: 100px;
	}
`

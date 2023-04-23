import styled from 'styled-components'

export const Image = styled.div`
    width: 100%;
    max-width: ${props => props.maxWidth};
    cursor: ${props => props.cursor};
`;
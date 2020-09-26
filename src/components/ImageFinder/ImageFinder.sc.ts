import styled from 'styled-components';

export const SImageFinder = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding-bottom: ${(props): string => (props.isFullHeight ? '0' : '24px')};
`;

import styled from 'styled-components';

export const SImageGallery = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    padding: 0;
    list-style: none;
    margin: 0 auto;
`;

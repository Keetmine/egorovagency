import styled from "styled-components";

export * from './button';
export * from './container';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => (props.wrap ? 'wrap' : 'wrap')};
    text-align: left;
    align-items: ${props => (props.align ? props.align : 'flex-start')};
    justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
`;


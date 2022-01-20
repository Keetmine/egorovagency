import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: auto;
    padding: 0 15px;
    background: white;
    color: black;
	@media (min-width: 576px){
        max-width: 540px;
        margin: auto;
        padding: 0;
      }
    
    @media (min-width: 768px){
        max-width: 720px;
    }
    
    @media (min-width: 993px) {
        max-width: 960px;
    }
    
    @media (min-width: 1200px){
        max-width: 1140px;
    }
`;
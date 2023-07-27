import { styled } from 'styled-components';

export const CenterblockFilter = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 51px;
position: relative;
`;


export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`;

export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
position: relative;
cursor: pointer;
&:not(:last-child) {
  margin-right: 10px;
}
`;
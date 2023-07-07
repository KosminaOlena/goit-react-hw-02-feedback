import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0px auto;

`
export const Button = styled.button`
padding: 10px 15px;
background-color: none;
border: 1px solid #fff;
border-radius: 4px;
color: #fff;
font-weight: 500;
font-size: 18px;
  &:hover {
    color: rgb(1, 212, 64);
    background-color: #fff;
    cursor: pointer;
  }
`
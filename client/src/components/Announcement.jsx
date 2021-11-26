import styled from 'styled-components'
import React from 'react'
import gslobal from '../global.css'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on order above Rs.600
        </Container>
    )
}

export default Announcement

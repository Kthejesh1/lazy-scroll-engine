import React from 'react';
import styled from 'styled-components'

const DynamicGrid = (props) => {
    const { size } = props;
    return (
        <List size={size}>
            {Array(size * size - 3).fill().map((el) => {
                return <div className='item' />
            })}
        </List>
    )
}

export default DynamicGrid;

const List = styled.div`
    display: grid;
    height: max-content;
    width: max-content;
    /* grid-template-columns: repeat(${props => props?.size}, auto); */
    grid-template-rows: repeat(${props => props?.size}, auto);
    column-gap: 3rem;
    row-gap: 3rem;
    .item {
        height: 3rem;
        width:  3rem;
        background-color: aliceblue;
    }
`;
import React from 'react';
import styled from 'styled-components'

const DynamicGrid = (props) => {
    const { size } = props;
    return (
        <List size={size}>
            {/* {Array(8).fill().map((el, ind) => {
                if(ind == 1){
                    <div className='item first' />
                }
                return <div className='item' />
            })} */}
            <div className='item item1' >1</div>
            <div className='item item2' >2</div>
            <div className='item item3' >3</div>
            <div className='item item4' >4</div>
            <div className='item item5' >5</div>
            <div className='item item6' >6</div>
        </List>
    )
}

export default DynamicGrid;

const List = styled.div`
    display: grid;
    height: max-content;
    width: max-content;
    grid-template-columns: repeat(${props => props?.size}, auto);
    /* grid-template-rows: repeat(${props => props?.size}, auto); */
    /* grid-auto-rows: 5rem;
    grid-auto-flow: column; */
    column-gap: 3rem;
    row-gap: 3rem;
    height: 20rem;
    /* align-content: center; */
    grid-template-areas: 
    'myItem myItem . '
    'myItem myItem . '
    '. . . '
    
    ;
    .item {
        height: 3rem;
        width:  3rem;
        background-color: aliceblue;
    }
    .first {
        /* grid-column-end: 2;
        grid-row-end: 2; */
        /* grid-column: 1 / 3; */
        /* width: 5rem; */
    }
    .item1 {
        grid-area: myItem;
    }
`;
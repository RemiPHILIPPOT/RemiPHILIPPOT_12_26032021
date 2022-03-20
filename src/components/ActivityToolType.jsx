import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
background-color:#E60000;
width:55px;
height:75px;
display:flex;
flex-direction:column;
align-items:center;
`
const Text = styled.p `
color:white;
font-weight: 500;
font-size: 10px;
line-height: 24px;
margin-top:7px;
`

/** create a custom tooltype for the user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */

function CustomToolType({active, payload}) {
    if (active){
    return (
        <Container>
            <Text>{payload[0].value}kg</Text>
            <Text>{payload[1].value}Kcal</Text>
        </Container>
    
     );
    }
    return null
}

export default CustomToolType;

CustomToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};
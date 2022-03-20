import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 

const Wrapper = styled.div`
    display:flex;
    padding:2em;
    @media (max-width: 1208px) {
        padding:1em
    }
`
    
const Infos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:24px;
`

const InfosData = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #282D30;
    margin-bottom:2px;
`

const InfosText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798C;
`
/** display icon with user infos 
 * @param  {string} icon
 * @param  {string} info
 * @param  {string} text
 * @return {JSX}
 */
function KeyData({icon,info,text}) {
    return (  
    <Wrapper>
        <img src={icon} alt="calories icon"/>
        <Infos>
            <InfosData>{info}</InfosData>
            <InfosText>{text}</InfosText>
        </Infos>
    </Wrapper> );
}

export default KeyData;
KeyData.propTypes = {
  icon: PropTypes.any,
  info: PropTypes.string,
  text: PropTypes.string,
}
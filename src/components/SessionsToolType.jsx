import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  background-color: white;
  width: 45px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.p`
  color: black;
  font-weight: 500;
  font-size: 10px;
  line-height: 24px;
  margin-top: 4px;
`;

function SessionsToolType({ active, payload }) {
  if (active) {
    return (
      <Container>
        <Text>{payload[0].value}min</Text>
      </Container>
    );
  }
  return null;
}

export default SessionsToolType;

SessionsToolType.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

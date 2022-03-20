import React from "react";
import styled from "styled-components";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
  width: 258px;
  height: 263px;
`;

const Title = styled.h2`
  position: absolute;
  left: 20%;
  top: 15%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #20253a;
  font-weight: 700;
`;

const Text = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  line-height: 26px;
  font-weight: 700;
  text-align: center;
  color: #74798c;
`;

const Score = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  font-size: 26px;
`;
/** create a PieChart with score value
 * @param  {object} {data}
 * @return {JSX}
 */
function ScoreChart({ data }) {
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ];

  return (
    <Container>
      <Title>Score</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${index}`} fill="#ffffff" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Text>
        <Score>
          {score[0].value * 100}%<br />
        </Score>
        de votre
        <br /> objectif
      </Text>
    </Container>
  );
}

export default ScoreChart;

ScoreChart.propTypes = {
  data: PropTypes.object,
};

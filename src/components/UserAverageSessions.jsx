import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUserAverageSessions } from "../utils/data";
import { useParams } from "react-router";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import SessionsToolType from "./SessionsToolType.jsx";

const Container = styled.div`
  position: relative;
  width: 258px;
  height: 263px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ff0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
`;

const Title = styled.h2`
  position: absolute;
  font-weight: 500;
  font-size: 15px;
  padding: 29px 34px 0 34px;
  color: rgba(255, 255, 255, 0.7);
`;

/**
 * Render a LineChart with user average sessions Data
 * @return {JSX}
 */

function UserAverageSessions() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const request = await getUserAverageSessions(id);
      if (!request) return alert("data error");
      const formatData = request.data.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    getData();
  }, [id]);
  if (data.length === 0) return null;

  // console.log(data)
  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14, stroke: "rgba(255, 255, 255, 0.7)" }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsToolType />} />
          <Line
            type="monotone"
            padding={{ left: 10 }}
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default UserAverageSessions;

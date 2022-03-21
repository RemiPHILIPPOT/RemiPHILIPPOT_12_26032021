import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { getData } from '../utils/getData';
import { useParams } from 'react-router';
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,ResponsiveContainer} from "recharts";


const Container = styled.div`
    position: relative;
	width: 258px;
	height: 263px;
	background: #282D30;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;
`
/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 */

function UserPerformance() {
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getPerformance = async () => {
			const request = await getData("USER_PERFORMANCE",id);
			if (!request) return alert('data error');
			const formatData = request.data.data.map((data) => {
				switch (data.kind) {
					case 1:
						return { ...data, kind: 'Cardio' };
					case 2:
						return { ...data, kind: 'Energie' };
					case 3:
						return { ...data, kind: 'Endurance' };
					case 4:
						return { ...data, kind: 'Force' };
					case 5:
						return { ...data, kind: 'Vitesse' };
					case 6:
						return { ...data, kind: 'Intensité' };
					default:
						return {...data };
				}
			});
			setData(formatData);
		};
		getPerformance();
	}, [id]);
	if (data.length === 0) return null;
	
	//console.log(data)

    return ( 
    <Container>
            <ResponsiveContainer width="100%" height="100%">
				<RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
						<PolarGrid gridType="polygon" />
						<PolarAngleAxis	dataKey="kind" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 10 }}/>
						<Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7} />
				</RadarChart>
            </ResponsiveContainer>
    </Container> );
}

export default UserPerformance;
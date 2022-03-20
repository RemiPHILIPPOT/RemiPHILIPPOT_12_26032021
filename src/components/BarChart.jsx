import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import { getData } from '../utils/getData';
import { useParams } from 'react-router';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";
import ActivityToolType from './ActivityToolType';

const Wrapper = styled.div`
    margin-bottom: 3em;
	height: 320px;
	border-radius: 5px;
	background-color: #fbfbfb;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	padding: 25px;
	
	@media (max-width: 1025px) {
      padding-left:0;
    }
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
	`

const Title= styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`

const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
`

const Icon = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`

const Legend = styled.div`
	display: flex;
`

const Info = styled.div`
    display: flex;
    align-items:center;
`
/**
 * Render a BarChart with user activity Data
 * @return {JSX}
 */
function UserActivity() {

    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const retrieveData = async () => {
			const request = await getData("USER_ACTIVITY",id);
			if (!request) return alert('data error');
			
			setData(request.data.sessions);
		};
		retrieveData();
	}, [id]);
	if (data.length === 0) return null;
	//format data.day
	for (let i = 0 ; i < data.length ; i ++){data[i].day = i + 1;}
	//console.log(data)
    return (  
        <Wrapper>
            <Head>
                <Title>Activité quotidienne</Title>
                <Legend>
					<Info>
						<Icon color='#282D30' />
						<Text>Poids (kg)</Text>
					</Info>
					<Info>
						<Icon color='#E60000' />
						<Text>Calories brûlées (kCal)</Text>
					</Info>
				</Legend>
            </Head>
            <ResponsiveContainer>
                <BarChart data={data} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dy={15} />
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="3" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                    <Tooltip content={<ActivityToolType/>}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    );
}

export default UserActivity;
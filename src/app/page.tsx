'use client'

import React, {useState, useEffect} from "react";
import { OuterLayer, CalendarDiv, DisplayDiv, WeekDiv, WeekDayDiv, Day } from "./styled";
import moment from "moment";

Date = require('datejs')

export default function Home(){

    const [today, setToday] = useState(moment(new Date))
    const [yesterday, setYesterday] = useState(moment().subtract(1, 'days'))
    const [selectedMonth, setSelectedMonth] = useState(moment().month())
    

    moment.locale(`pt-br`)

    const mountWeek = (weekday) => {
        let mountDate;
        let week = [];
        for(let i = 1; i <= moment({month: selectedMonth}).daysInMonth(); i++){
            mountDate = moment({day: i, month: selectedMonth})
            if (mountDate.format('ddd') == weekday){
                week.push(<Day value={mountDate}>{mountDate.format('DD')}</Day>)
            }
        }
        return week
    }


    const mountMonth = () => {

        let testDate;
        let weekNum = [];

        for(let i = 1; i <= moment({month: selectedMonth}).daysInMonth(); i++){
            testDate = moment({day: i, month: selectedMonth});
            if (i == 1){
                weekNum.push(testDate.week())
            } else {
                for(let ind = 0; ind <= weekNum.length; ind++){
                    if(testDate.week() > weekNum[ind] && weekNum[ind+1] == null){
                        weekNum.push(testDate.week())
                        console.log(weekNum)
                    }
                }
            }
        }
        
        return (
            <WeekDiv>
                <WeekDayDiv id={'Sun'}>
                    {mountWeek('Sun')}
                </WeekDayDiv>

                <WeekDayDiv id={'Mon'}>
                    {mountWeek('Mon')}
                </WeekDayDiv>

                <WeekDayDiv id={'Tue'}>
                    {mountWeek('Tue')}
                </WeekDayDiv>

                <WeekDayDiv id={'Wed'}>
                    {mountWeek('Wed')}
                </WeekDayDiv>

                <WeekDayDiv id={'Thu'}>
                    {mountWeek('Thu')}
                </WeekDayDiv>

                <WeekDayDiv id={'Fri'}>
                    {mountWeek('Fri')}
                </WeekDayDiv>

                <WeekDayDiv id={'Sat'}>
                    {mountWeek('Sat')}
                </WeekDayDiv>
            </WeekDiv>
        )
    }



    return(
        <OuterLayer>
            <CalendarDiv>
                <DisplayDiv>Day Week Month Year</DisplayDiv>                
                {mountMonth()}
                {/* <h1>{today.format('dddd')}</h1> */}
                {/* <Day onClick={() => {mountWeek()}}>{yesterday.format('DD')}</Day> */}
            </CalendarDiv>
        </OuterLayer>
    )
}
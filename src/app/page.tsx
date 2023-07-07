'use client'

import React, {useState, useEffect} from "react";
import { OuterLayer, CalendarDiv, DisplayDiv, WeekDiv, WeekDayDiv, Day } from "./styled";
import moment from "moment";

export default function Home(){

    const [today, setToday] = useState(moment(new Date))
    const [yesterday, setYesterday] = useState(moment().subtract(1, 'days'))
    

    moment.locale(`pt-br`)

    // const mountWeek = (weekNum) => {
        
    // }

    const showYesterday = () => {
        let yd = moment(today).subtract(1, 'days');
        setYesterday(yd)
        console.log(yesterday)
    }


    const mountMonth = () => {
        
        return (
            <WeekDiv>
                <WeekDayDiv id={'Week1'}><Day onClick={() => {console.log(today.format('ddd'))}}>{today.format('DD')}</Day></WeekDayDiv>
                <WeekDayDiv id={'Week2'}><Day onClick={() => {console.log(today.format('dddd'))}}>{today.format('DD')}</Day></WeekDayDiv>
                <WeekDayDiv id={'Week3'}><Day onClick={() => {console.log(today.format('dddd'))}}>{today.format('DD')}</Day></WeekDayDiv>
                <WeekDayDiv id={'Week4'}><Day onClick={() => {console.log(today.format('dddd'))}}>{today.format('DD')}</Day></WeekDayDiv>
                <WeekDayDiv id={'Week5'}><Day onClick={() => {console.log(today.format('dddd'))}}>{today.format('DD')}</Day></WeekDayDiv>
                <WeekDayDiv id={'Week6'}><Day onClick={() => {console.log(today.format('dddd'))}}>{today.format('DD')}</Day></WeekDayDiv>
            </WeekDiv>
        )
    }



    return(
        <OuterLayer>
            <CalendarDiv>
                <DisplayDiv>Day Week Month Year</DisplayDiv>
                {mountMonth()}
                {/* <h1>{today.format('dddd')}</h1> */}
                <Day onClick={() => {showYesterday}}>{yesterday.format('DD')}</Day>
            </CalendarDiv>
        </OuterLayer>
    )
}
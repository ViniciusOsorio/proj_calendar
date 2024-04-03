'use client'

import React, {useState, useEffect} from "react";

import { OuterLayer, 
         CalendarDiv, 
         DisplayDiv, 
         WeeksDiv, 
         WeekDayDiv,
         WeekDayText, 
         Day, 
         SelectedMonthDiv,
         YearDiv,
         SelYear,
         ChangeButton,
         DayDiv } from "./styled";

import { getWeek,
         setWeek, 
         getMonth,
         setMonth,
         getDaysInMonth, 
         getDate, 
         getYear, 
         getDay,
         format, 
         setDay, 
         setYear} from "date-fns";

// import {} from 'react'

import { ptBR } from "date-fns/locale";

export default function Home(){

    const [selectedDay, setSelectedDay] = useState(getDate(new Date))
    const [currDay, setCurrDay] = useState(getDate(new Date))
    const [selectedMonth, setSelectedMonth] = useState(getMonth(new Date))
    const [currMonth, setCurrMonth] = useState(getMonth(new Date))
    const [selectedYear, setSelectedYear] = useState(getYear(new Date))
    const [currYear, setCurrYear] = useState(getYear(new Date))
    const [datesData, setDatesData] = useState([])

    useEffect(() => {

    }, [])

    const setDates = () => {

    }

    const mountMonth = () => {

        let testDate;
        let weekNum = [];
        let weeks = [];

        for(let i = 1; i <= getDaysInMonth(selectedMonth); i++){
            testDate = new Date(selectedYear, selectedMonth, i)
            if (i == 1){
                weekNum.push(getWeek(testDate))
            } else {
                for(let ind = 0; ind <= weekNum.length; ind++){
                    if(getWeek(testDate) > weekNum[ind] && weekNum[ind+1] == null){
                        weekNum.push(getWeek(testDate))
                        console.log(weekNum)
                    }
                }
            }
        }
        
        return (
            <WeeksDiv>
                {mountWeeks(weekNum)}
            </WeeksDiv>
        )
    }
    
    const mountWeeks = (weekNum) => {
        let mountDate;
        let sun = [];
        let mon = [];
        let tue = [];
        let wed = [];
        let thu = [];
        let fri = [];
        let sat = [];
        let week = [];
        let weeks = [];
        let day;
        // console.log()
        for(let i = 0; i < weekNum.length; i++){
            for (let d = 0; d <= 6; d++){
                console.log(weekNum[i])
                if (d == 0) week = []; //limpar array no começo de cada semana
                if(selectedYear != currYear){
                    mountDate = setYear(setDay(setWeek(new Date, weekNum[i]), d), selectedYear);
                } else {
                    mountDate = setDay(setWeek(new Date, weekNum[i]), d);
                }
                // console.log(mountDate);
                day = 
                // <DayDiv>
                    <Day
                        isCurrDay={getDate(mountDate) == currDay && getMonth(mountDate) == currMonth && getYear(mountDate) == currYear}
                        isSelMonth={getMonth(mountDate) == selectedMonth}
                        value={mountDate}
                        onClick={() => console.log(format(mountDate, "dd/MM/yy"))}
                        // onClick={showComp}
                    >
                        {format(mountDate, 'dd')}
                    </Day>
                // </DayDiv>

                week.push(day);

                if (d == 6) weeks.push(week) //no último dia da semana, insere a semana já montada

                switch(getDay(mountDate)){
                    case 0:
                        sun.push(day)
                        break;
                    case 1:
                        mon.push(day)
                        break;
                    case 2:
                        tue.push(day)
                        break;
                    case 3:
                        wed.push(day)
                        break;
                    case 4:
                        thu.push(day)
                        break;
                    case 5:
                        fri.push(day)
                        break;                
                    case 6:
                        sat.push(day)
                    break;
                }    
            }
        }

        console.log(weeks)

        return(
            //Monta colunas das datas
            // <WeeksDiv>
            //     <WeekDayDiv>
            //         <WeekDayText day={'sun'}>
            //             {format(setDay(new Date, 0), 'eee')}
            //         </WeekDayText>
            //         {sun}
            //     </WeekDayDiv>
            //     <WeekDayDiv>
            //         <WeekDayText>
            //             {format(setDay(new Date, 1), 'eee')}
            //         </WeekDayText>
            //         {mon}
            //     </WeekDayDiv>
            //     <WeekDayDiv>
            //         <WeekDayText>
            //             {format(setDay(new Date, 2), 'eee')}
            //         </WeekDayText>
            //         {tue}
            //     </WeekDayDiv>
            //     <WeekDayDiv>
            //         <WeekDayText>
            //             {format(setDay(new Date, 3), 'eee')}
            //         </WeekDayText>
            //         {wed}
            //     </WeekDayDiv>
            //     <WeekDayDiv>
            //         <WeekDayText>
            //             {format(setDay(new Date, 4), 'eee')}
            //         </WeekDayText>
            //         {thu}
            //     </WeekDayDiv>
            //     <WeekDayDiv>
            //         <WeekDayText>
            //             {format(setDay(new Date, 5), 'eee')}
            //         </WeekDayText>
            //         {fri}
            //     </WeekDayDiv>
            //     <WeekDayDiv>
            //         <WeekDayText>
            //             {format(setDay(new Date, 6), 'eee')}
            //         </WeekDayText>
            //         {sat}
            //     </WeekDayDiv>
            // </WeeksDiv>
            <WeeksDiv>
                {/* {showWeeks(weeks)} */}
                {weeks}
            </WeeksDiv>
        )
    }

    const showWeeks = (weeks) => {
        // for (let x = 0; x < weeks.length; x++){for(let y = 0; y < weeks[x].length; y++){}}
        weeks.forEach((week, i) => {
            week.forEach((day) => {
                <DayDiv>{day}</DayDiv>
            })
        })
    }

    const showComp = (e) => {
        console.log(e)
        
    }

    const changeYear = (type) => {
        let ctrlYear = selectedYear;
        if (type == 'prv') {
            ctrlYear--;
        } else if(type == 'nxt'){
            ctrlYear++;
        }
        setSelectedYear(ctrlYear);
    }
     

    return(
        <OuterLayer>            
            <CalendarDiv>
                <DisplayDiv>Day Week Month Year</DisplayDiv>
                <YearDiv>
                    <ChangeButton size={65} onClick={() => changeYear('prv')}>Previous</ChangeButton>
                        <SelYear>
                            {selectedYear}
                        </SelYear>
                    <ChangeButton size={65} onClick={() => changeYear('nxt')}>Next</ChangeButton>
                </YearDiv>
                <SelectedMonthDiv>
                    {format(setMonth(new Date, selectedMonth), 'MMMM')}
                </SelectedMonthDiv>
                {mountMonth()}
                {/* <h1>{currDay.format('dddd')}</h1> */}
                {/* <Day onClick={() => {mountWeek()}}>{yesterday.format('DD')}</Day> */}
            </CalendarDiv>
        </OuterLayer>
    )
}
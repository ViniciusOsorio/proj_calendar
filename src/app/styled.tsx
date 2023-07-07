import styled from "styled-components";

export const OuterLayer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 20px 40px;
    flex: flex;
    background-color: lightgray;
`

export const CalendarDiv = styled.div`
    display: flex;
    background-color: #81d4db;
    padding: 10px;
    flex: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export const DisplayDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
`

export const WeekDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    flex-direction: column;
`

export const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 180px;
    background-color: white;
    color: black;
    border: 1px solid black;
    width: 80px;
    height: 80px;
    font-size: 32px;
    &:hover{
        cursor: pointer;
        background-color: #c5c7c5;
    }
    margin: 10px;
`

export const WeekDayDiv = styled.div`
    display: flex;
    flex-direction: row;
`
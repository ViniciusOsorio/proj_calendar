import styled from "styled-components";

type props = {};

export const OuterLayer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex: flex;
    background-color: lightgray;
    @media (min-width: 0px) and (max-width: 320px){ //mobile (S)
        padding: 5px 10px;
    }
    @media (min-width: 321px) and (max-width: 375px){ //mobile (M)
        padding: 8px 14px;
    }
    @media (min-width: 376px) and (max-width: 425px){ //mobile (L)
        padding: 12px 20px;
    }
    @media (min-width: 426px) and (max-width: 768px){
        padding: 14px 24px;
    }
    @media (min-width: 769px) and (max-width: 1023px){
        padding: 18px 32px;
    }
    @media (min-width: 1024px){
        padding: 20px 40px;
    }
`

export const CalendarDiv = styled.div`
    display: flex;
    background-color: #81d4db;
    flex: flex;
    width: 100%;
    height: 100vh;
    @media (min-width: 768px){
        height: 100%;
    }
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`

export const DisplayDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
    @media (min-width: 0px) and (max-width: 320px) {
        font-size: 10px;
        margin-bottom: 8px;
    }
    @media (min-width: 321px) and (max-width: 330px) {
        font-size: 12px;
        margin-bottom: 10px;
    }
    @media (min-width: 376px) and (max-width: 425px) {
        font-size: 16px;
        margin-bottom: 12px;
    }
    @media (min-width: 425px) and (max-width: 767px) {
        font-size: 18px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 24px;
    }
    @media (min-width: 1024px){
        font-size: 26px;
    }
`

export const WeeksDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media (min-width: 0px) and (max-width: 320px){ //small phone
        margin-top: 6px;
    }
    @media (min-width: 321px) and (max-width: 375px){
        margin-top: 9px;
    }
    @media (min-width: 376px) and (max-width: 424px){
        margin-top: 12px;
    }
    @media (min-width: 425px) and (max-width: 767px){
        margin-top: 14px;
    }
    @media (min-width: 768px){
        margin-top: 15px;
    }
`

export const WeekDiv = styled.div`
    
`

export const WeekDayDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const WeekDayText = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.day == 'sun' ? 'red' : ''};    
    @media (min-width: 0px) and (max-width: 320px){ //small phone
        font-size: 10px;
    }
    @media (min-width: 321px) and (max-width: 375px){
        font-size: 12px;
    }
    @media (min-width: 376px) and (max-width: 424px){
        font-size: 14px;
    }
    @media (min-width: 425px) and (max-width: 767px){
        font-size: 16px;
    }
    @media (min-width: 768px) and (max-width: 1023px){
        font-size: 20x;
    }
    @media (min-width: 1024px){
        font-size: 24px;
    }
`

export const SelectedMonthDiv = styled.div`
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: center;
    @media (min-width: 0px) and (max-width: 320px) {
        font-size: 12px;
    }
    @media (min-width: 321px) and (max-width: 375px) {
        font-size: 18px;
    }
    @media (min-width: 376px) and (max-width: 424px) {
        font-size: 24px;
    }
    @media (min-width: 425px){
        font-size: 30px;
    }
    /* font-size: 32px; */
    
`

export const YearDiv = styled.div`
    display: flex;
    font-weight: bold;
    flex-direction: row;
    @media (min-width: 0px) and (max-width: 320px) {
        font-size: 12px;
        margin: none;
    }
    @media (min-width: 321px) and (max-width: 375px){
        font-size: 18px;
        margin: 5px;
    }
    @media (min-width: 376px) and (max-width: 425px){
        font-size: 22px;
        margin: 8px 0px;
    }
    @media (min-width: 426px) and (max-width: 767px) {
        font-size: 26px;
        margin: 12px;
    }
    @media (min-width: 768px) and (max-width: 1023px){
        font-size: 30px;
        margin: 14px 0px;
    }
    @media (min-width: 1024px){
        font-size: 34px;
        margin: 16px 0px;
    }    
`

export const SelYear = styled.div`
    margin: 0px 10px;
`

export const ChangeButton = styled.button`
    background-color: transparent;
    border: none;
    width: ${props => props.size}px;
    height: 20px;
    @media (min-width: 0px) and (max-width: 320px) {
        font-size: 10px;
        margin-bottom: 8px;
    }
    @media (min-width: 321px) and (max-width: 330px) {
        font-size: 12px;
        margin-bottom: 10px;
    }
    @media (min-width: 376px) and (max-width: 425px) {
        font-size: 16px;
        margin-bottom: 12px;
    }
    @media (min-width: 426px) {
        font-size: 18px;
    }
`

export const ViewButton = styled.button`
    background-color: none;
    border: none;
    @media (min-width: 0px) and (max-width: 320px) {
        font-size: 10px;
        margin-bottom: 8px;
    }
    @media (min-width: 321px) and (max-width: 330px) {
        font-size: 12px;
        margin-bottom: 10px;
    }
    @media (min-width: 376px) and (max-width: 425px) {
        font-size: 16px;
        margin-bottom: 12px;
    }
    @media (min-width: 436px) and (max-width: 767px){
        font-size: 18px;
    }
    @media (min-width: 768px) {
        font-size: 24px;
    }
`

export const DayDiv = styled.div`
    display: flex;
    @media (min-width: 0px) and (max-width: 320px) {
        height: 38px;
        width: 38px;
    }
    @media (min-width: 321px) and (max-width: 330px) {
        height: 40px;
        width: 40px;
    }
    @media (min-width: 376px) and (max-width: 425px) {
        height: 52px;
        width: 52px;
    }
    @media (min-width: 426px) and (max-width: 767px) {
        height: 58px;
        width: 58px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        height: 68px;
        width: 68px;
    }
    @media (min-width: 1024px){
        height: 80px;
        width: 80px;
    }
    /* height: 90px;
    width: 90px; */
`

export const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 180px;
    background-color: white;
    color: ${props => props.isSelMonth ? 'black' : 'grey'};
        border: ${props => props.isCurrDay && props.isSelMonth ? '2px solid black' : props.isSelMonth ? '1px solid black' : '1px solid grey'};
    &:hover{
        cursor: pointer;
        background-color: #c5c7c5;
    }
    @media (min-width: 0px) and (max-width: 320px){ //small phone
        width: 32px;
        height: 32px;
        margin: 4px;
        font-size: ${props => props.isCurrDay && props.isSelMonth ? '18px' : '14px'};
        border: ${props => props.isCurrDay && props.isSelMonth ? '2px solid black' : props.isSelMonth ? '1px solid black' : '1px solid grey'};    
    }
    @media (min-width: 321px) and (max-width: 375px){
        width: 34px;
        height: 34px;
        margin: 4px;
        font-size: ${props => props.isCurrDay && props.isSelMonth ? '24px' : '20px'};
        border: ${props => props.isCurrDay && props.isSelMonth ? '3px solid black' : props.isSelMonth ? '1px solid black' : '1px solid grey'};
    }
    @media (min-width: 376px) and (max-width: 425px){
        width: 44px;
        height: 44px;
        margin: 10px;
        font-size: ${props => props.isCurrDay && props.isSelMonth ? '24px' : '20px'};
        border: ${props => props.isCurrDay && props.isSelMonth ? '3px solid black' : props.isSelMonth ? '1px solid black' : '1px solid grey'};
    }
    @media (min-width: 426px) and (max-width: 768px){
        width: 50px;
        height: 50px;
        margin: 10px;
        font-size: ${props => props.isCurrDay && props.isSelMonth ? '24px' : '20px'};
        border: ${props => props.isCurrDay && props.isSelMonth ? '3px solid black' : props.isSelMonth ? '1px solid black' : '1px solid grey'};
    }
    @media (min-width: 769px) and (max-width: 1023px){
        width: 60px;
        height: 60px;
        margin: 10px;
        font-size: ${props => props.isCurrDay && props.isSelMonth ? '38px' : '32px'};
        border: ${props => props.isCurrDay && props.isSelMonth ? '3px solid black' : props.isSelMonth ? '1px solid black' : '1px solid grey'};
    }
    @media (min-width: 1024px){
        width: 80px;
        height: 80px;
        margin: 6px;
        font-size: ${props => props.isCurrDay && props.isSelMonth ? '38px' : '32px'};
        border: ${props => props.isCurrDay && props.isSelMonth ? '3px solid black' : props.isSelMonth ? '1px solid black' : '1px solid grey'};
    }
`
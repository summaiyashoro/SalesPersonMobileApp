import React from 'react';
import {FlatList } from 'react-native';

import HistoryItem from "./HistoryItem";
import Separator from "../components/Separator";


const history = [
    {
        id:1,
        timeofArrival:"Today",
        hoursWorked:"10.98",
        startTime:"10:03:37", 
        status:"Active", 
        extraHours:"1.98"
    },
    {
        id:2,
        timeofArrival:"Yesterday",
        hoursWorked:"07.00",
        startTime:"09:03:44", 
        status:"04:03:44", 
        extraHours:"1.00"

    },
    {
        id:3,
        timeofArrival:"29 September 2020",
        hoursWorked:"07.00",
        startTime:"09:03:44", 
        status:"04:03:44", 
        extraHours:"1.00"

    },
    {
        id:4,
        timeofArrival:"29 September 2020",
        hoursWorked:"07.00",
        startTime:"09:03:44", 
        status:"04:03:44", 
        extraHours:"1.00"

    },
    {
        id:5,
        timeofArrival:"29 September 2020",
        hoursWorked:"07.00",
        startTime:"09:03:44", 
        status:"04:03:44", 
        extraHours:"1.00"

    },
    {
        id:6,
        timeofArrival:"29 September 2020",
        hoursWorked:"07.00",
        startTime:"09:03:44", 
        status:"04:03:44", 
        extraHours:"1.00"

    },
    {
        id:7,
        timeofArrival:"29 September 2020",
        hoursWorked:"07.00",
        startTime:"09:03:44", 
        status:"04:03:44", 
        extraHours:"1.00"

    },
    {
        id:8,
        timeofArrival:"29 September 2020",
        hoursWorked:"09.00",
        startTime:"09:03:44", 
        status:"04:03:44", 
        extraHours:"1.00"

    }
]


function HistoryScreen(props) {
    return (
         <FlatList
          data={history}
          keyExtractor={history => history.id.toString()}
          renderItem={({item})=>(
           <HistoryItem 
            timeofArrival={item.timeofArrival}
            hoursWorked={item.hoursWorked}
            startTime={item.startTime}
            status={item.status}
            extraHours={item.extraHours}
           />
          )}
          ItemSeparatorComponent={Separator}
         />

    );
 }
    


export default HistoryScreen;
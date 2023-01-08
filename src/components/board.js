import React from 'react';
import './board.css';
import List from './list'


const Info = [
    {
        img : "data:image/jpeg;base64,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",
        name : "Virat Kohli", birthday : "1988-11-05"
    },
    {
        img : "https://m.behindwoods.com/news-shots-slideshow/ms-dhonis-different-hairstyles-over-the-years/images/ms-dhoni-different-hairstyles-10.png",
        name : "MS Dhoni", birthday : "1981-07-07"
    },
    {
        img : "https://muchfeed.com/wp-content/uploads/2018/05/Smriti-Mandhana.jpg?ezimgfmt=ng%3Awebp%2Fngcb3%2Frs%3Adevice%2Frscb3-2",
        name : "Smriti", birthday : "1996-07-18"
    },
    {
      img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Freddie Watson", birthday : "1999-08-15"
    },
    {
      img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Brianna Baker", birthday : "1994-07-05"
    },
    {
      img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Brad Myers", birthday : "1997-01-28"
    }
  ]

export default function board() {
  return (
      <main id='site-main'>
          <h1 className="text-dark title">Birthday Remainder</h1>
          <h2 className='Todays text-dark'>Today</h2>
          <div className="board">
                <List info={Today(Info)}></List>
                <h2 className='upcoming text-dark'>Upcoming</h2>
                <List info={Upcoming(Info, 2)} upcoming={true}></List>
          </div>
      </main>
  );
}

function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay == day && currentMonth == month;
    })
    return filter;
}


// upcoming birthdays
function Upcoming(person, toMonth){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter =person.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();

        if (currentDay == day) return;
        return month >= currentMonth && month <= currentMonth + toMonth;
    })

    return filter;

}
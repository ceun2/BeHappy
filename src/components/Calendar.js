import './Calendar.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      calendarClassName="calendar"
      onChange={(date) => setStartDate(date)}
      inline
    />
  );
}

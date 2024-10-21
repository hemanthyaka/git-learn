import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { enUS } from 'date-fns/locale';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
      <DatePicker
        label="Select a date"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
        minDate={new Date('2023-01-01')}
        maxDate={new Date('2025-12-31')}
        views={['year', 'month', 'day']}
      />
    </LocalizationProvider>
  );
};

export default Calendar;

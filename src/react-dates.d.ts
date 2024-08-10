declare module 'react-dates' {
    import * as React from 'react';
    import * as moment from 'moment';
  
    interface SingleDatePickerShape {
      date: moment.Moment | null;
      onDateChange: (date: moment.Moment | null) => void;
      focused: boolean;
      onFocusChange: (arg: { focused: boolean }) => void;
      id: string;
      numberOfMonths?: number;
      isOutsideRange?: (day: moment.Moment) => boolean;
      displayFormat?: string;
    }
  
    export class SingleDatePicker extends React.Component<SingleDatePickerShape> {}
  }
  
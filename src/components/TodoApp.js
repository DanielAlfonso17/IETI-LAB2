import React from 'react';
import TodoList from "./TodoList";
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import 'react-datepicker/dist/react-datepicker.css';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from "moment";




class TodoApp extends React.Component{



  constructor(props) {
      super(props);
      this.state = {items: [], text: '', priority: 0, dueDate: moment()};
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handlePriorityChange = this.handlePriorityChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  render() {
      return (
          <div>
              <form onSubmit={this.handleSubmit} className="todo-form">
                  <h3>New TODO</h3>
                  <FormControl margin="normal" required fullWidth>
                    <label htmlFor="text" className="right-margin">
                        Text:
                    </label>

                    <TextField
                        id="text"
                        onChange={this.handleTextChange}
                        value={this.state.text}
                    />
                  </FormControl>
                  <br/>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="priority" className="right-margin">
                        Priority:
                    </InputLabel>

                    <Input
                        id="priority"
                        type="number"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}
                    />
                  </FormControl>
                  <br/>
                  <br/>
                  {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                       fullWidth
                       format="MM-dd-yyyy"
                       margin="normal"
                       id="date-picker-dialog"
                       label="Date picker dialog"
                       value={this.state.dueDate}
                       onChange={this.handleDateChange}
                       KeyboardButtonProps = {{
                         'aria-label': 'change date',
                       }}
                     />
                </MuiPickersUtilsProvider>*/}

                <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                  <br/>
                  <Button type="submit" color="primary" fullWidth variant="contained">
                      Add #{this.state.items.length + 1}
                  </Button>
              </form>
              <br/>
              <br/>
              <TodoList todoList={this.state.items}/>
          </div>
      );
  }

  handleTextChange(e) {
      this.setState({
          text: e.target.value
      });
  }

  handlePriorityChange(e) {
      this.setState({
          priority: e.target.value
      });
  }

  handleDateChange(date) {
      this.setState({
          dueDate: date
      });
  }

  handleSubmit(e) {

      e.preventDefault();

      if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
          return;

      const newItem = {
          text: this.state.text,
          priority: this.state.priority,
          dueDate: this.state.dueDate,

      };
      this.setState(prevState => ({
          items: prevState.items.concat(newItem),
          text: '',
          priority: '',
          dueDate: ''
      }));
  }

}

export default TodoApp;

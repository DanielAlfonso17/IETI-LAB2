import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.text}</td>
                <td>{this.props.priority}</td>
                {console.log(this.props.dueDate)}
                <td>{this.props.dueDate.format('MM-dd-yyyy')}</td>
            </tr>
        );
    }

}

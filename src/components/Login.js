import React from "react";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from 'react-redux'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Login extends React.Component {
    state = {
        selectedOption: '',
    }

    handleChange = (selectedOption) => {
    this.setState({ selectedOption });
        if (selectedOption) {
            const { dispatch } = this.props
            dispatch(setAuthedUser(selectedOption.value))
        }
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <h3> Please select user to login </h3>
                <Select name="form-field-name" value={selectedOption} onChange={this.handleChange}
                    options={[
                        { value: 'tylermcginnis', label: 'Tyler McGinnis' },
                        { value: 'sarahedo', label: 'Sarah Edo' },
                        { value: 'johndoe', label: 'John Doe' },
                    ]}
                />
            </div>
        );
    }
}

export default connect()(Login)
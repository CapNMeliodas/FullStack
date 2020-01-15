import React, { Component } from "react";
import PropTypes from "prop-types";
import CSRFToken from "./csrftoken"
import getCookie from "./csrftoken"

class FormAddBadge extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            info: "",
            on_sale: false
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const csrftoken = getCookie('csrftoken');
        const {name, info, on_sale} = this.state;
        const badge = {
            'name': name,
            'info': info,
            'on_sale': on_sale,
        };

        const conf = {
            method: "post",
            body: JSON.stringify(badge),
            headers: new Headers({"Content-Type": "application/json", 'X-CSRFToken': csrftoken.props.value})
        };

        fetch(this.props.endpoint, conf).then(response => console.log(response));
    };

    render() {
        const {name, info, on_sale} = this.state;
        return (
            <div className="column">
                <form className="has-background-primary" onSubmit={this.handleSubmit}>
                    <CSRFToken />
                    <div className="field has-background-primary">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={name}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Info</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                placeholder="badge info"
                                rows="5"
                                name="info"
                                onChange={this.handleChange}
                                value={info}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="label">
                                {"For Sale "}
                                <input
                                    type="checkbox"
                                    name="on_sale"
                                    onChange={this.handleChange}
                                    checked={on_sale}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    <CSRFToken />
                    <div className="control">
                        <CSRFToken />
                        <button type="submit" className="button is-info">
                            Add badge
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormAddBadge;
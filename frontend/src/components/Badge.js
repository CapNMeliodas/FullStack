import React, { Component } from "react";
import getCookie from "./csrftoken";


function deleteData(url, item) {
    const csrftoken = getCookie('csrftoken');
    return fetch(url + item, {
        method: 'delete',
        headers: new Headers({'X-CSRFToken': csrftoken.props.value})

    }).then(response => {console.log(response)})
}


class Badge extends React.Component {
    constructor(props) {
        super(props);
        this.url = "api/my_badges/";

        this.state = {
            id: props.id,
            name: props.name,
            info: props.info,
            on_sale: props.on_sale
        };
    }

    handleDelete = e => {
        console.log("The link was clicked");
        e.preventDefault();
        deleteData(this.url, this.state.id)
    };

    render() {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {this.state.name}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {this.state.info}
                </div>
            </div>
            <footer className="card-footer">
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item">Sale</a>
                <a href="#" className="card-footer-item" onClick={this.handleDelete}>Delete2</a>
            </footer>
        </div>
    )
  }
}

export default Badge;

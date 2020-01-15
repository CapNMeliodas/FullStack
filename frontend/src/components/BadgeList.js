import React from "react";
import Badge from "./Badge";


class BadgeList extends React.Component {

    render() {
        const badges =
            this.props.data.map(el => (
                <Badge key={el.id} id={el.id} name={el.name} info={el.info} on_sale={el.on_sale} />
            ));

        return (
            !this.props.data.length ? (
                <p>No badges.</p>
            ) : (
                <div className="container">
                    {badges}
                </div>
            )
        )
    }
}

export default BadgeList;

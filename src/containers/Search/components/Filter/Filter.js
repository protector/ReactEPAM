import React, {Component} from 'react';

module.exports = class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedType: 'Title'
        };
    }

    onChangeFilter(event) {
        this.props.typeHandler(event.target.value);
    }

    render() {
        return <div className="filters">
            Search by
            {['Title', 'Genre'].map(type =>
                <div key={type}>
                    <input type="radio" id={type} name="type" checked={this.props.typeHandler() === type} value={type} onChange={() => this.onChangeFilter} />
                    <label htmlFor={type}>{type}</label>
                </div>)}
        </div>
    }
}
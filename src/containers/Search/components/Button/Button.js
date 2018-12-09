import React, {Component} from 'react';

module.exports = class Search extends Component {
    onSearch() {

    }

    render() {
        return <input type="button" onClick={() => this.onSearch} value={this.props.content} />;
    }
}
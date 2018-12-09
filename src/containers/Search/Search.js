import React, {Component} from 'react';
import Field from './components/Field/Field';
import Button from './components/Button/Button';
import Filter from './components/Filter/Filter';

module.exports = class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    type(type) {
        if(arguments.length <= 0) {
            return this.state.checked || 'Title';
        }

        this.setState({checked: type});
    }

    render() {
        return (
					<div className="container">
							<div className="fields">
									<Field title={this.props.title} placeholder={this.props.placeholder}/>
									<Button content={this.props.button} />
									<Filter typeHandler={() => this.type} />
							</div>
					</div>
				)
    }
}
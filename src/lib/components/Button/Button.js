import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Button.scss';

export default class Button extends Component {
    render() {
        // In reality, would be replaced by SVG icon system.
        const icon = this.props.icon ? <i>{this.props.icon}</i> : '';

        let className = classNames(
            styles.button,
            styles[this.props.className],
            styles[this.props.size],
            styles[this.props.icon]
        );

        return (
            <button
                className={className}
                disabled={this.props.disabled}>
                    {icon}
                    <span>{this.props.text}</span>
            </button>
        );
    }
}

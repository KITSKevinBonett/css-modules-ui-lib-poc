import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Link.scss';

export default class Link extends Component {
    render() {
        let className = classNames(
            styles.link,
            styles[this.props.className]
        );

        return (
            <a href="/" className={className} >
                {this.props.label}
            </a>
        );
    }
}

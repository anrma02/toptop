import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    href,
    disabled = false,
    to,
    btnText = false,
    small = false,
    large = false,
    primary = false,
    outline = false,
    rounded = false,
    onclick,
    children,
    leftIcon,
    className,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onclick, ...passProps };

    // remove event listener disabled

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        rounded,
        disabled,
        btnText,
        large,
        primary,
        outline,
        small,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}> {leftIcon}</span>}
            <span className={cx('title')}> {children}</span>
            {rightIcon && <span className={cx('icon')}> {rightIcon}</span>}
        </Comp>
    );
}
Button.prototype = {
    href: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    btnText: PropTypes.bool,
    onclick: PropTypes.string,
    leftIcon: PropTypes.node,
    className: PropTypes.func,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
};
export default Button;

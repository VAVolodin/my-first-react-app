import React from 'react';
import s from './Button.module.scss';

interface IProps {
    type: string;
    handle(): void;
    max: number;
    click: number;
}

class Button extends React.PureComponent<IProps> {
    render() {
        const { type, handle, max, click } = this.props;

        return (
            <div className={s.button_wrap}>
                <button
                    type="button"
                    onClick={handle}
                    disabled={type === 'plus' ? click >= max : click <= 1}>
                    <div className={`${type === 'plus' ? s.plus : s.minus}`} />
                </button>
            </div>
        );
    }
}

export default Button;

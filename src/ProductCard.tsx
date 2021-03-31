import React from 'react';
import s from './ProductCard.module.scss';

interface IProps {
    title: string;
    cost: number;
    click: number;
    count: number;
    name: string;
    itemReset(): void;
}

class ProductCard extends React.PureComponent<IProps> {
    render() {
        const {
            title,
            cost,
            click,
            count,
            name,
            itemReset,
            children,
        } = this.props;
        return (
            <div className={s.item_wrap}>
                <h1>
                    It&apos;s {title} at ${cost}
                </h1>
                <div className={s.count_wrap}>{children}</div>
                {click !== 0 ? (
                    <p>
                        Добавлено {click}шт. на сумму: {count}$
                    </p>
                ) : (
                    ''
                )}
                <p>{name}</p>
                <button type="button" className={s.reset} onClick={itemReset}>
                    Убрать товар
                </button>
            </div>
        );
    }
}

export default ProductCard;

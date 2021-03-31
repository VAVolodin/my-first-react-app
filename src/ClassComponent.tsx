import React from 'react';
import Button from './Button';
import style from './ClassComponent.module.scss';
import ProductCard from './ProductCard';

interface IProps {
    title: string; // title?: необязательный к вызову параметр
    max: number;
    cost: number;
}

interface IState {
    click: number;
    name: string;
    count: number;
    step: number;
}
class ClassComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            click: 0,
            name: 'Выберите необходимое количество товара.',
            count: 0,
            step: 1,
        };
        // необходимо указать this.handleClickSub непосредственную внешнюю область представления, т.к. стрелочная функция handleClickAdd не имеет своего .this то берет его из внешнего окружения, т.е. у ClassComponent, для handleClickSub объявленной как funcion decaration метод .this обращается к самой вызывающей функции  далее к конструктору, что выдает ошибку this"undefined"
        // this.handleClickSub = this.handleClickSub.bind(this);
    }

    handleClickAdd = (step: number): any => () => {
        const { click } = this.state;
        this.setState({ click: click + step, name: 'добавлено' });
        this.priceIncrement();
    };

    handleClickSub = (step: number): any => () => {
        const { click } = this.state;
        this.setState({ click: click - step, name: 'убрано' });
        this.priceDecrement();
    };

    priceIncrement = () => {
        const { count } = this.state;
        const { cost } = this.props;
        this.setState({ count: count + cost });
    };

    priceDecrement = () => {
        const { count } = this.state;
        const { cost } = this.props;
        this.setState({ count: count - cost });
    };

    itemReset = () => () => {
        this.setState({ click: 0, count: 0, name: 'Товар убран из корзины.' });
    };

    render() {
        const { title, cost, max } = this.props;
        const { click, name, count, step } = this.state;

        return (
            <>
                <ProductCard
                    title={title}
                    cost={cost}
                    click={click}
                    count={count}
                    name={name}
                    itemReset={this.itemReset()}>
                    <Button
                        max={max}
                        click={click}
                        type="plus"
                        handle={this.handleClickAdd(step)}
                    />
                    <input type="text" value={click} />
                    <Button
                        max={max}
                        click={click}
                        type="minus"
                        handle={this.handleClickSub(step)}
                    />
                </ProductCard>
            </>
        );
    }
}

export default ClassComponent;

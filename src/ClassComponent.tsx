import React from 'react';
import style from './ClassComponent.module.scss';

interface IProps {
    data?: string; // data?: необязательный к вызову параметр
    num: number;
}

interface IState {
    click: number;
    name: string;
    count: number;
}
class ClassComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { click: 0, name: 'Привет!', count: 0 };
        // необходимо указать this.handleClickSub непосредственную внешнюю область представления, т.к. стрелочная функция handleClickAdd не имеет своего .this то берет его из внешнего окружения, т.е. у ClassComponent, для handleClickSub объявленной как funcion decaration метод .this обращается к самой вызывающей функции  далее к конструктору, что выдает ошибку this"undefined"
        this.handleClickSub = this.handleClickSub.bind(this);
    }

    handleClickAdd = () => {
        const { click } = this.state;
        this.setState({ click: click + 1, name: 'Прибавляем =)' });
        this.priceIncrement();
    };

    handleClickSub() {
        const { click } = this.state;
        this.setState({ click: click - 1, name: 'Убавляем =(' });
        this.priceDecrement();
    }

    priceIncrement = () => {
        const { count } = this.state;
        const { num } = this.props;
        this.setState({ count: count + num });
    };

    priceDecrement = () => {
        const { count } = this.state;
        const { num } = this.props;
        this.setState({ count: count - num });
    };

    basketReset = () => {
        const { click, count, name } = this.state;
        this.setState({ click: 0, count: 0, name: 'Корзина пуста.' });
    };

    render() {
        const { data, num } = this.props;
        const { click, name, count } = this.state;
        return (
            <>
                <div className={style.item_wrap}>
                    <h1>
                        It&apos;s {data} at ${num}
                    </h1>
                    <div className={style.count_wrap}>
                        <div className={style.button_wrap}>
                            <button type="button" onClick={this.handleClickAdd}>
                                <div className={style.plus} />
                            </button>
                        </div>
                        <input type="text" value={click} />
                        <div className={style.button_wrap}>
                            <button type="button" onClick={this.handleClickSub}>
                                <div className={style.minus} />
                            </button>
                        </div>
                    </div>
                    <h2>
                        В корзине: {click}шт.
                        <br />
                        Итого к оплате: <span> {count}</span> $
                    </h2>
                    <h2>{name}</h2>
                    <button
                        type="button"
                        className={style.reset}
                        onClick={this.basketReset}>
                        Очистить корзинy
                    </button>
                </div>
            </>
        );
    }
}

export default ClassComponent;

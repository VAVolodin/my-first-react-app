import React from 'react';
import style from './ClassComponent.module.scss';

interface IProps {
    ass?: string; // data?: необязательный к вызову параметр
    dick?: number;
}

interface IState {
    click: number;
    name: string;
}
class ClassComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { click: 0, name: 'Жопа!' };
        // необходимо указать this.handleClickSub непосредственную внешнюю область представления, т.к. стрелочная функция handleClickAdd не имеет своего .this то берет его из внешнего окружения, т.е. у ClassComponent, для handleClickSub объявленной как funcion decaration метод .this обращается к самой вызывающей функции  далее к конструктору, что выдает ошибку this"undefined"
        this.handleClickSub = this.handleClickSub.bind(this);
    }

    handleClickAdd = () => {
        const { click } = this.state;
        this.setState({ click: click + 1 });
    };

    handleClickSub() {
        const { click } = this.state;
        this.setState({ click: click - 1 });
    }

    render() {
        const { ass, dick } = this.props;
        const { click, name } = this.state;
        return (
            <>
                <h1>Hi { ass } { dick }, I&apos;m a ClassComponent!!! =) </h1>
                <button type="button" onClick={this.handleClickAdd}>
                    push me to add +
                </button>
                <button
                    type="button"
                    className={style.wrapper}
                    onClick={this.handleClickSub}>
                    touch me to sub -1
                </button>
                <h2>{click}</h2>
                <h2>{name}</h2>
            </>
        );
    }
}

export default ClassComponent;

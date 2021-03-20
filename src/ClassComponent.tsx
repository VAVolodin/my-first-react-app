import React from 'react';

interface IProps {
    data: string;
}
class ClassComponent extends React.Component<IProps>{
    constructor (props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <h1>Hi motherFuckers, I'm a ClassComponent!!! =) </h1>;
    }
}

export default ClassComponent;
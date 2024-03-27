import React from 'react';
import { Counter } from "./Style";

const Count = (props) => {

    const { containerClass, btnClass, value } = props;

    const [num, setNum] = React.useState(1);

    const increase = () => {
        const newValue = num + 1;
        setNum(newValue);
        value(newValue);
    };

    const decrease = () => {
        const newValue = num > 1 ? num - 1 : 1;
        setNum(newValue);
        value(newValue);
    };

    return (
        <>
            <Counter className={containerClass}>
                <button onClick={decrease}>-</button>
                <div>{num}</div>
                <button className={btnClass} onClick={increase}>
                    +
                </button>
            </Counter>
        </>
    )
}

export default Count
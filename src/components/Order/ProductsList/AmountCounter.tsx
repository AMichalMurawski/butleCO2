import React from 'react';
import { AmountButton, AmountInput, AmountWrapper } from './AmountCounter.styled';

interface AmountCounterProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

const AmountCounter: React.FC<AmountCounterProps> = ({
    value,
    onChange,
    min = 0,
    max = 60,
}) => {
    const handleDecrease = () => {
        if (value > min) onChange(value - 1);
    };

    const handleIncrease = () => {
        if (value < max) onChange(value + 1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = parseInt(e.target.value.replace(/^0+/, ''), 10);
        if (isNaN(val)) val = min;
        val = Math.min(Math.max(val, min), max);
        onChange(val);
    };

    return (
        <AmountWrapper>
            <AmountButton onClick={handleDecrease}>−</AmountButton>
            <AmountInput
                type="number"
                value={value.toString()}
                onChange={handleInputChange}
                min={min}
                max={max}
            />
            <AmountButton onClick={handleIncrease}>+</AmountButton>
        </AmountWrapper>
    );
};

export default AmountCounter;
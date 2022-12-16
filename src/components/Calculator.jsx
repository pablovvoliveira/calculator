import React, { useState } from 'react';
import { Button, ButtonGrey, ButtonOrange, Wrapper, Display } from './styles';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    const inputNum = (e) => {
        let input = e.target.value;
        if(num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
        
    }

    const clear = () => {
        setNum(0)
    }

    const percentage = () => {
        setNum(num / 100);
    }

    const changeSign = () => {
        if(num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    const operatorHandle = (e) => {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    const result = () => {
        if (operator === '/') {
            setNum(oldNum / num);
        } else if (operator === '*') {
            setNum(oldNum * num);
        } else if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num));
        } else if (operator === '-') {
            setNum(oldNum - num);
        }
    }

    return (
    <>
    <Box m={5}/>
    <Container maxWidth="xs">
        <Wrapper>
            <Box m={12}/>
            <Display>{num}</Display>
            <Button onClick={clear}>
                AC
            </Button>
            <Button onClick={changeSign}>
                +/-        
            </Button>  
            <Button onClick={percentage}>
                %
            </Button>
            <ButtonOrange onClick={operatorHandle} value={'/'}>
                ÷      
            </ButtonOrange> 
            <ButtonGrey onClick={inputNum} value={7}>
                7        
            </ButtonGrey>  
            <ButtonGrey onClick={inputNum} value={8}>
                8
            </ButtonGrey>
            <ButtonGrey onClick={inputNum} value={9}>
                9        
            </ButtonGrey>  
            <ButtonOrange onClick={operatorHandle} value={'*'}>
                X
            </ButtonOrange>
            <ButtonGrey onClick={inputNum} value={4}>
                4        
            </ButtonGrey>  
            <ButtonGrey onClick={inputNum} value={5}>
                5
            </ButtonGrey>
            <ButtonGrey onClick={inputNum} value={6}>
                6        
            </ButtonGrey>  
            <ButtonOrange onClick={operatorHandle} value={'-'}>
                -
            </ButtonOrange>
            <ButtonGrey onClick={inputNum} value={1}>
                1        
            </ButtonGrey>
            <ButtonGrey onClick={inputNum} value={2}>
                2        
            </ButtonGrey>  
            <ButtonGrey onClick={inputNum} value={3}>
                3
            </ButtonGrey>            
            <ButtonOrange onClick={operatorHandle} value={'+'}>
                +
            </ButtonOrange>
            <ButtonGrey onClick={inputNum} value={0}>
                0        
            </ButtonGrey>
            <ButtonGrey style ={{visibility: "hidden"}}>
                .
            </ButtonGrey>  
            <ButtonGrey onClick={inputNum} value={'.'}>
                ,
            </ButtonGrey>
            <Button onClick={result}>
                =        
            </Button>            
        </Wrapper>
    </Container>
    </>
  )
}

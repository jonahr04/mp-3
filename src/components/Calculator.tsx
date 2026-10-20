import styled from "styled-components";
import useCalculator from "../hooks/useCalculator.ts";

const Box = styled.div`
    margin-top: 5%;
    padding: 2%;
    background-color: #667db8;
    color: #ffffff;
    border-radius: 40px;

    @media screen and (max-width: 750px) {
        padding: 1%;
        margin-top: 3%;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2% 0;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const Field = styled.label`
    margin: 1%;
    font-size: calc(14px + 0.2vw);
`;

const NumberInput = styled.input`
    margin: 1%;
    padding: 1%;
    width: 40%;
    font-size: calc(14px + 0.2vw);

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const CalcButton = styled.button`
    margin: 1%;
    padding: 1%;
    font-size: calc(14px + 0.2vw);
    background-color: #e8eef8;
    border: 2px solid #5a6fa8;
`;

const Result = styled.h3`
    font-size: calc(14px + 0.4vw);
`;

export default function Calculator() {
    const calc = useCalculator();

    return (
        <Box>
            <h2>Calculator</h2>
            <Row>
                <Field htmlFor="first-number">First Number</Field>
                <NumberInput
                    id="first-number"
                    type="text"
                    value={calc.first}
                    onChange={(event) => calc.setFirst(event.target.value)}
                />
            </Row>
            <Row>
                <Field htmlFor="second-number">Second Number</Field>
                <NumberInput
                    id="second-number"
                    type="text"
                    value={calc.second}
                    onChange={(event) => calc.setSecond(event.target.value)}
                />
            </Row>
            <Row>
                <CalcButton onClick={calc.addition}> + </CalcButton>
                <CalcButton onClick={calc.subtraction}> - </CalcButton>
                <CalcButton onClick={calc.multiplication}> * </CalcButton>
                <CalcButton onClick={calc.division}> / </CalcButton>
                <CalcButton onClick={calc.power}> ** </CalcButton>
                <CalcButton onClick={calc.clearNumbers}> Clear </CalcButton>
            </Row>
            <Result style={{ color: calc.outputColor }}>{calc.output}</Result>
        </Box>
    );
}

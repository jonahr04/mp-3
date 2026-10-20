import { useState } from "react";

// the old calculator had the same read-the-inputs code in every button
export default function useCalculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [output, setOutput] = useState("");
    const [outputColor, setOutputColor] = useState("white");

    function showResult(result: number) {
        setOutput(String(result));
        if (result < 0) {
            setOutputColor("red");
        } else {
            setOutputColor("white");
        }
    }

    function hasBothNumbers() {
        if (first === "" || second === "") {
            setOutput("Must enter numbers");
            setOutputColor("white");
            return false;
        }
        return true;
    }

    function addition() {
        if (hasBothNumbers() === false) {
            return;
        }
        let result = Number(first) + Number(second);
        showResult(result);
    }

    function subtraction() {
        if (hasBothNumbers() === false) {
            return;
        }
        let result = Number(first) - Number(second);
        showResult(result);
    }

    function multiplication() {
        if (hasBothNumbers() === false) {
            return;
        }
        let result = Number(first) * Number(second);
        showResult(result);
    }

    function division() {
        if (hasBothNumbers() === false) {
            return;
        }
        let result = Number(first) / Number(second);
        showResult(result);
    }

    // power without ** or pow(), same loop as mp-1
    function power() {
        if (hasBothNumbers() === false) {
            return;
        }
        let base = Number(first);
        let exp = Number(second);
        let result = 1;
        for (let i = 0; i < exp; i = i + 1) {
            result = result * base;
        }
        showResult(result);
    }

    function clearNumbers() {
        setFirst("");
        setSecond("");
        setOutput("");
        setOutputColor("white");
    }

    return {
        first,
        setFirst,
        second,
        setSecond,
        output,
        outputColor,
        addition,
        subtraction,
        multiplication,
        division,
        power,
        clearNumbers,
    };
}

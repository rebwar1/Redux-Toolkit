

export default function IncreaseButton({ counter , setCounter  }) {
    const increaseHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <button onClick={increaseHandler}>increase</button>
    )
}
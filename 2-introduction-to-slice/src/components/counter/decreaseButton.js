

export default function DecreaseButton({ counter , setCounter }) {
    const decreaseHandler = () => {
        setCounter(counter - 1);
    }

    return (
        <button onClick={decreaseHandler}>decrease</button>
    )
}
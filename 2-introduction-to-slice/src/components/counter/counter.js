import IncreaseButton from './increaseButton';
import DecreaseButton from './decreaseButton';

export default function Counter({ counter, setCounter }) {
  return (
    <>
      <h3>Your Number is : {counter}</h3>
      <div className="flex">
        <IncreaseButton counter={counter} setCounter={setCounter} />
        <DecreaseButton counter={counter} setCounter={setCounter} />
      </div>
    </>
  );
}

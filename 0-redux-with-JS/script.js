const counter = document.getElementById('counter');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const incIfOdd = document.getElementById('incIfOdd');
const incAsync = document.getElementById('incAsync');
const reset = document.getElementById('reset');
counter.textContent = 0;

const store = Redux.createStore((state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counterOne: state.counterOne + 1,
      };
    case 'DECREMENT':
      return {
        counterOne: state.counterOne - 1,
      };
    case 'RESET':
      return {
        counterOne: 0,
      };
  }
  return {
    counterOne: 1,
  };
});
console.log(store);
function render() {
  counter.textContent = store.getState().counterOne;
}
render();

store.subscribe(render);
inc.addEventListener('click', () => {
  //   counter.textContent++;
  store.dispatch({ type: 'INCREMENT' });
});

dec.addEventListener('click', () => {
  //   counter.textContent--;
  store.dispatch({ type: 'DECREMENT' });
});

incIfOdd.addEventListener('click', () => {
  //   if (counter.textContent % 2 !== 0) {
  //     counter.textContent++;
  //   }
  if (store.getState().counterOne % 2 !== 0) {
    store.dispatch({ type: 'INCREMENT' });
  }
});

incAsync.addEventListener('click', () => {
  //   setTimeout(() => {
  //     counter.textContent++;
  //   }, 1000);
  setTimeout(() => {
    store.dispatch({ type: 'INCREMENT' });
  }, 1000);
});

reset.addEventListener('click', () => {
  //   counter.textContent = 0;
  store.dispatch({ type: 'RESET' });
});

const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

const ImpliedReturn = () => {
    return (<>
      <h3>Implied return</h3>
      twoPlusFour = { fourTimesFive }<br />
      multiply(4, 5) = { multiply(4, 5) }<br />
    </>) //Didn't work without return statement
}

export default ImpliedReturn;
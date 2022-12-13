import './App.css';
import Head from './Head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Cartbag from './Cartbag';
import { useState } from 'react';

function App() {
  let cardArr = [{
    id: 1,
    prodtname: "Fancy Product",
    usdrange: "$40.00 - $80.00",
    price: 80.00,
    star: false,
    txtprop: '',
    sale: false,
    btnname: 'Add to cart'
  }, {
    id: 2,
    prodtname: 'Special Item',
    usdrange: '$18.00',
    price: 18.00,
    star: true,
    txtprop: '$20.00',
    sale: true,
    btnname: 'Add to cart'
  }, {
    id: 3,
    prodtname: 'Sale Item',
    usdrange: '$25.00',
    price: 25.00,
    star: false,
    txtprop: '$50.00',
    sale: true,
    btnname: 'Add to cart'
  }, {
    id: 4,
    prodtname: 'Popular Item',
    usdrange: '$40.00',
    price: 40.00,
    star: true,
    txtprop: '',
    sale: false,
    btnname: 'Add to cart'
  }, {
    id: 5,
    prodtname: 'Sale Item',
    usdrange: '$25.00',
    price: 25.00,
    star: false,
    txtprop: '$50.00',
    sale: true,
    btnname: 'Add to cart'
  }, {
    id: 6,
    prodtname: "Fancy Product",
    usdrange: "$120.00- $280.00",
    price: 250.00,
    star: false,
    txtprop: '',
    sale: false,
    btnname: 'Add to cart'
  }, {
    id: 7,
    prodtname: 'Special Item',
    usdrange: '$18.00',
    price: 18.00,
    star: true,
    txtprop: '$20.00',
    sale: true,
    btnname: 'Add to cart'
  }, {
    id: 8,
    prodtname: 'Popular Item',
    usdrange: '$900.00',
    price: 900.00,
    star: true,
    txtprop: '',
    sale: false,
    btnname: 'Add to cart'
  }];
  const [count, setCount] = useState(0)
  const [addItems, setItems] = useState([])
  const [total, setTotal] = useState(0)
  let addToCart = (arr) => {
    setItems([...addItems, arr]);
    setTotal(total + arr.price);
    setCount(count + 1);
  };
  let removeCart = (arr) => {
    let findIndx = addItems.findIndex((oneprdt) => arr.id === oneprdt.id);
    addItems.splice(findIndx, 1);
    setItems([...addItems]);
    setTotal(total - arr.price);
    setCount(count - 1);
  }
  return (
    <div className="App">
      <Head count={count} />
      <section class="sec_tion py-5">
        <div class="container px-4 px-lg-5 mt-5 colo">
          <div class="col-8">
            <div class="gx-4 gx-lg-5 justify-content-center row row-cols-2 row-cols-md-3">
              {cardArr.map((ele) => <Card arr={ele} fun={addToCart} passit={addItems} />)}
            </div>
          </div>
          <div class="col-4">
            <Cartbag each={addItems} dele={removeCart} />
            <h3>Total : ${total}</h3>
          </div>
        </div>
      </section>
      <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
      </footer>
    </div>
  );
}

export default App;

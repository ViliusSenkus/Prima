import Header from "./Header/Header";
import Input from "./Input/Input";
import List from "./List/List";
import { useState} from "react";

function Main() {

  const [item, setItem] = useState('Add Item');
  const [quantity, setquantity] = useState(1);
  const [list, setList] = useState([]);

  return (
    <div>
      <Header />
      <Input quantity={quantity} setquantity={setquantity} item={item} setItem={setItem} list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
}

export default Main;

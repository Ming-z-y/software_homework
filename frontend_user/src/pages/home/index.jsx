import { useState } from "react"
import { Product, Header, Navagate } from "../../components"

export const Home = () => {
  const [selectGoods, setselectGoods] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [money, setMoney] = useState(localStorage.getItem('money'));
  return (
    <>
      <div style={{
        position: "sticky",
        top: 0,
        left: 0
      }}>
        <Header setMoney={setMoney} setCategory={setCategory} money={money} selectGoods={selectGoods} setselectGoods={setselectGoods} setIsSearch={setIsSearch} setSearch={setSearch} />
        <Navagate setSearch={setSearch} setIsSearch={setIsSearch} setSeCategory={setCategory} />
      </div>
      <Product category={category} isSearch={isSearch} selectGoods={selectGoods} search={search} setselectGoods={setselectGoods} />
    </>
  )
}

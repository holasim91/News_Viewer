import React,{useState, useCallback} from "react";
import NewsList from './Components/NewsList'
import Categories from './Components/Categories'

function App() {
  const [category, setCategory] = useState('all')
  const OnSelect = useCallback(
    category => {
      setCategory(category)
    },
    [],
  )

  return (
    <>
    <Categories category={category} onSelect={OnSelect}/>
    <NewsList category={category}/>
    </>
  );
}

export default App;

import React, {useState} from 'react';
import Products from '../components/Products';

const Home = () => {
   
    const [keyword, setKeyword] = useState('');
    const [sort, setSort] = useState(null)

    return (
        <div className="pageContainer" id="home">
            <div>
                <input type="text" placeholder="Search Product" 
                    value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                <select name="sort" onChange={(e) => setSort(e.target.value)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </div>
            <div>
                <Products sort={sort} keyword={keyword}/>
            </div>
        </div>
    )
};

export default Home;

import { useEffect, useState } from 'react'

const data = [
    { id: 1, name: 'Apple iPhone 13', description: 'Smartphone from Apple' },
    { id: 2, name: 'Samsung Galaxy S21', description: 'Smartphone from Samsung' },
    { id: 3, name: 'OnePlus 9 Pro', description: 'Smartphone from OnePlus' },
    { id: 4, name: 'Google Pixel 6', description: 'Smartphone from Google' },
    { id: 5, name: 'Xiaomi Mi 11', description: 'Smartphone from Xiaomi' }
]
function Ex09() {
    const [input, setInput] = useState('');
    const [dataSearch, setDataSearch] = useState(data);
    useEffect(() => {
        if (input.trim() === '') return;
        const filteredData = data.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
        setDataSearch(filteredData);
        return () => setDataSearch(data);
    }, [input])
    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Search..."
            />
            {input !== "" && <p>{dataSearch.length} results found</p>}
            <ul>
                {dataSearch.map(item => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ex09

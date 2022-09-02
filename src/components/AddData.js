import React, { useState, useEffect } from 'react'
const AddData = () => {
    const [itemList, setItemList] = useState("buy apple");
    const [items, setItems] = useState([]);
    const itemEvent = (e) => {
        setItemList(e.target.value)
    }
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items)
        }
    }, [])

    const handleClick = () => {
        setItems((olditem) => {
            return [...olditem, itemList]
        })
        setItemList("")
    }
    const deleteItem = (id) => {
        setItems((olditems) => {
            return olditems.filter((arrEle, index) => {
                return index != id;
            })
        })

    }
    return (
        <div className=''>
            <input type="text" value={itemList} placeholder="Add a Item"
                onChange={itemEvent} />
            <button onClick={handleClick}>save</button>

            <ul >
                <br />
                {items.map((itemvel, index) => {
                    return (<>
                        <div style={{ minWidth: '22rem' }}>
                            <div className="d-flex justify-content-between align-items-center"  >
                                <li key={itemvel.id} id={index}>
                                    {itemvel}
                                    <button
                                        onClick={() => {
                                            deleteItem(index)

                                        }}
                                    >delete</button>

                                </li>

                            </div></div>
                    </>)

                })}
            </ul>
        </div>
    )
}


export default AddData
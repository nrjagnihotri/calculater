import React, { useState, useRef, useEffect } from 'react'

const Calc = () => {
    const [message, setMessage] = useState('');
    const [state, setState] = useState({
        num1: "",
        num2: ""
    })
    const [count, setCount] = useState('')

    const inpRef = useRef(null)
    const sum = 0
    const handleChange = (evnet) => {
        const { name, value } = evnet.target;
        setCount((privData) => {
            return {
                ...privData,
                [name]: value,
            }
        });

    }
    // const handleChange2 = (evnet) => {
    //     const { name, value } = evnet.target;
    //     setCount1((privData) => {
    //         return {
    //             ...privData,
    //             [name]: value,
    //         }
    //     });

    // }
    useEffect(() => inpRef.current.focus())
    const submit = (e) => {
        e.preventdefault()


    }
    const handleCLick = (e) => {
        setCount(count.concat(e.target.value))

    }

    const Clear = () => {
        setCount('')
    }
    const handleChange1 = event => {
        setMessage(event.target.value);
    };
    const Calculator1 = (e) => {
        try {
            setCount(eval(count).toString())
        } catch (error) {
            setCount(error)
        }
    }
    const handleClick1 = event => {
        event.preventDefault();

        // 👇️ value of input field
        console.log('old value: ', message);

        // 👇️ set value of input field
        setMessage('New value');
    };
    return (
        <>


            <form>
                <input type='text' value={count} ref={inpRef} />
            </form>
            {/* <input type="number" name='count1' value={count1} onChange={handleChange2} /><br /> */}
            <button onClick={handleCLick} name="1" value="1" >1</button>
            <button onClick={handleCLick} name="2" value="2" >2</button>
            <button onClick={handleCLick} name="3" value="3">3</button>
            <button onClick={handleCLick} name="4" value="4">4</button><br />
            <button onClick={handleCLick} name="5" value="5">5</button>
            <button onClick={handleCLick} name="6" value="6" >6</button>
            <button onClick={handleCLick} name="7" value="7">7</button>
            <button onClick={handleCLick} name="8" value="8" >8</button><br />
            <button onClick={handleCLick} name="9" value="9" >9</button>
            <button onClick={handleCLick} name="0" value="0">0</button>
            <button onClick={handleCLick} name="+" value="+" >+</button>
            <button onClick={handleCLick} name="*" value="*">*</button><br />
            <button onClick={handleCLick} name="-" value="-">-</button>
            <button onClick={handleCLick} name="/" value="/" >/</button>
            <button onClick={handleCLick} name="%" value="%">%</button><br />
            <button onClick={Clear}>clear</button>
            <button id='count' onClick={Calculator1}>result</button>
            {/* <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange1}
                value={message}
            />

            <h2>Message:</h2>

            <button onClick={handleClick1}>Click</button> */}

        </>
    )
}

export default Calc




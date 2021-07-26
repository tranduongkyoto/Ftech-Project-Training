import { useState } from 'react';

export default function ProvideState() {
    const [products, setProducts] = useState([
        {
            "_id": "dress1",
            "image": "/images/dress1.jpg",
            "title": "Item1 Midi sundress",
            "desc": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
            "sizes": ["X", "L", "XL", "XXL"],
            "price": 29.9
        },
        {
            "_id": "dress2",
            "image": "/images/dress2.jpg",
            "title": "Item2 Midi sundress",
            "desc": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
            "sizes": ["X", "M", "L"],
            "price": 18.9
        },
        {
            "_id": "dress5",
            "image": "/images/dress5.jpg",
            "title": "Item5 Frill mini dress",
            "desc": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
            "sizes": ["X", "L", "XL"],
            "price": 10.9
        },
        {
            "_id": "dress3",
            "image": "/images/dress3.jpg",
            "title": "Item3 Midi dress",
            "desc": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
            "sizes": ["X", "M", "L"],
            "price": 14.9
        },
        {
            "_id": "dress4",
            "image": "/images/dress4.jpg",
            "title": "Item4 cami maxi dress",
            "desc": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
            "sizes": ["XL"],
            "price": 25.9
        },
        {
            "_id": "dress6",
            "image": "/images/dress6.jpg",
            "title": "Item6 Midi tea dress",
            "desc": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
            "sizes": ["XL", "XXL"],
            "price": 49.9
        }
    ]);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);
    const [value, setValue] = useState("Lastest");
    const [size, setSize] = useState("All");
    const [isOpenForm, setIsOpenForm] = useState(false);
    const removeFromCart = productId => {
        let newCart = [...cart];
        newCart = newCart.filter(item => item._id !== productId);
        setCart(newCart);
        return newCart;
    };
    const addToCart = product => {
        let inCart = false;
        let newCart = [...cart];
        newCart.forEach(item => {
            if (item._id === product._id) {
                inCart = true;
                item.count++;
            }
        });
        if (!inCart) {
            newCart.push({ ...product, count: 1 });
        }
        setCart(newCart);
        return newCart;
    }
    const setValueFilter = (value) => {
        return setValue(value);
    }
    const setSizeFilter = (size) => {
        return setSize(size);
    }
    const removeAll = () => {
        setCart([]);
        return;
    }
    const changeForm = () => {
        setIsOpenForm(!isOpenForm);
        return;
    }
    return {
        products,
        cart,
        order,
        value,
        size,
        isOpenForm,
        addToCart,
        removeFromCart,
        setValueFilter,
        setSizeFilter,
        removeAll,
        changeForm
    };
}

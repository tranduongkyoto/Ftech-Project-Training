import { useState } from 'react';

export default function ProvideState() {
  const [products, setProducts] = useState([
    {
      _id: 'dress1',
      image: '/images/dress1.jpg',
      title: 'Midi sundress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'L', 'XL', 'XXL'],
      price: 29.9,
      rating: 5,
      category: 'Women',
      place: 'Ha Noi',
      brand: 'Yody',
    },
    {
      _id: 'dress2',
      image: '/images/dress2.jpg',
      title: 'Midi sundress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'M', 'L'],
      price: 18.9,
      rating: 4,
      category: 'Women',
      place: 'HCM City',
      brand: 'Choobe',
    },
    {
      _id: 'dress3',
      image: '/images/dress5.jpg',
      title: 'Frill mini dress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'L', 'XL'],
      price: 10.9,
      rating: 4,
      category: 'Women',
      place: 'Ha Noi',
      brand: 'Yody',
    },
    {
      _id: 'dress4',
      image: '/images/dress3.jpg',
      title: 'Midi dress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'M', 'L'],
      price: 15.9,
      rating: 5,
      category: 'Women',
      place: 'HCM City',
      brand: 'Nelly',
    },
    {
      _id: 'dress5',
      image: '/images/dress4.jpg',
      title: 'cami maxi dress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['XL'],
      price: 20.9,
      rating: 4,
      category: 'Women',
      place: 'HCM City',
      brand: 'Yody',
    },
    {
      _id: 'dress6',
      image: '/images/dress6.jpg',
      title: 'Midi tea dress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['XL', 'XXL'],
      price: 39.9,
      rating: 5,
      category: 'Women',
      place: 'Ha Noi',
      brand: 'Choobe',
    },
    {
      _id: 'dress7',
      image: '/images/dress7.jpg',
      title: 'Midi dress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'M', 'L'],
      price: 14.9,
      rating: 4,
      category: 'Women',
      place: 'Foreign',
      brand: 'Yody',
    },
    {
      _id: 'dress8',
      image: '/images/dress8.jpg',
      title: 'Cami maxi dress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['XL'],
      price: 25.9,
      rating: 5,
      category: 'Women',
      place: 'Ha Noi',
      brand: 'Yody',
    },
    {
      _id: 'dress9',
      image: '/images/dress9.jpg',
      title: 'Midi tea dress',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['XL', 'XXL'],
      price: 49.9,
      rating: 5,
      category: 'Women',
      place: 'Foreign',
      brand: 'Choobe',
    },
    {
      _id: 'shirt1',
      image: '/images/shirt1.jpg',
      title: 'Shirt 1',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'L', 'XL', 'XXL'],
      price: 29.9,
      rating: 5,
      category: 'Men',
      place: 'Ha Noi',
      brand: 'Yody',
    },
    {
      _id: 'shirt2',
      image: '/images/shirt2.jpg',
      title: 'Shirt 2',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'M', 'L'],
      price: 18.9,
      rating: 4,
      category: 'Men',
      place: 'Ha Noi',
      brand: 'Choobe',
    },
    {
      _id: 'shirt3',
      image: '/images/shirt5.jpg',
      title: 'Shirt 3',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'L', 'XL'],
      price: 10.9,
      rating: 4,
      category: 'Men',
      place: 'HCM City',
      brand: 'Yody',
    },
    {
      _id: 'shirt4',
      image: '/images/shirt3.jpg',
      title: 'Shirt 4',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'M', 'L'],
      price: 15.9,
      rating: 5,
      category: 'Men',
      place: 'Ha Noi',
      brand: 'Nelly',
    },
    {
      _id: 'shirt5',
      image: '/images/shirt4.jpg',
      title: 'Shirt 5',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['XL'],
      price: 20.9,
      rating: 4,
      category: 'Men',
      place: 'HCM City',
      brand: 'Yody',
    },
    {
      _id: 'shirt6',
      image: '/images/shirt6.jpg',
      title: 'Shirt 6',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['XL', 'XXL'],
      price: 39.9,
      rating: 5,
      category: 'Men',
      place: 'Ha Noi',
      brand: 'Choobe',
    },
    {
      _id: 'shirt7',
      image: '/images/shirt7.jpg',
      title: 'Shirt 7',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['X', 'M', 'L'],
      price: 14.9,
      rating: 4,
      category: 'Men',
      place: 'Ha Noi',
      brand: 'Yody',
    },
    {
      _id: 'shirt8',
      image: '/images/shirt8.jpg',
      title: 'Shirt 8',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['XL'],
      price: 25.9,
      rating: 5,
      category: 'Men',
      place: 'HCM City',
      brand: 'Yody',
    },
    {
      _id: 'shirt9',
      image: '/images/shirt9.jpg',
      title: 'Shirt 9',
      desc: 'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
      sizes: ['XL', 'XXL'],
      price: 49.9,
      rating: 5,
      category: 'Men',
      place: 'Foreign',
      brand: 'Choobe',
    },
  ]);
  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );
  const [order, setOrder] = useState([]);
  const [shippingaddress, setShippingAddress] = useState({});
  const [filter, setFilter] = useState({
    category: [],
    place: [],
    brand: [],
    price: [],
  });
  const [isOpen, setOpen] = useState(false);
  const [total, setTotal] = useState();
  const setTotalOrder = (price) => {
    setTotal(price);
  };
  const setOpenFilter = () => {
    setOpen(!isOpen);
  };
  const addFilter = (type, input) => {
    const newFilter = { ...filter };
    switch (type) {
      case 'category':
        return setFilter({ ...newFilter, category: input.category });
      case 'place':
        return setFilter({ ...newFilter, place: input.place });
      case 'brand':
        return setFilter({ ...newFilter, brand: input.brand });
      case 'price':
        return setFilter({ ...newFilter, price: input.price });
      default:
        return setFilter({
          category: [],
          place: [],
          brand: [],
          price: [],
        });
    }
    //return setFilter({ ...newFilter, input });
  };
  const removeFromCart = (productId) => {
    let newCart = [...cart];
    newCart = newCart.filter((item) => item._id !== productId);
    setCart(newCart);
    return newCart;
  };
  const addToCart = (product) => {
    let inCart = false;
    let newCart = [...cart];
    newCart.forEach((item) => {
      if (item._id === product._id) {
        inCart = true;
        item.count++;
      }
    });
    if (!inCart) {
      newCart.push({ ...product, count: 1 });
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return newCart;
  };
  const subToCart = (product) => {
    console.log(product);
    if (product.count === 1) {
      return removeFromCart(product._id);
    } else {
      var newCart = [...cart];
      const newProduct = { ...product, count: product.count - 1 };
      newCart = newCart.map((item) =>
        item._id === product._id ? newProduct : item
      );
      return setCart([...newCart]);
    }
  };

  const removeAll = () => {
    setCart([]);
    return;
  };
  const addShippingAddress = (shippingadress) => {
    setShippingAddress(shippingadress);
    return;
  };

  return {
    products,
    cart,
    order,
    shippingaddress,
    filter,
    isOpen,
    total,
    setTotalOrder,
    setOpenFilter,
    addFilter,
    addToCart,
    subToCart,
    removeFromCart,
    removeAll,
    addShippingAddress,
  };
}

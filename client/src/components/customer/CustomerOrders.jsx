import React, { useState, useEffect } from 'react'
import { textCutter } from '../../utils/textFunctions';
import NotFound from '../primary/NotFound';
export default function CustomerOrders() {

  const orders_list = [
    {
      _id: 'aslkdjjxxx89',
      createdAt: '19:00 24/10/2025',
      products: [
        {
          _id: 'prod1',
          name: 'Stylish Jute Storage Basket with Leather Handles for Laundry, Toys, and Home Organization (Size: 40 cm)',
          image: '/imgs/cycle-decoration.jpg',
          amount: 200,
          quantity: 1,
          deliveryDate: '28/10/2025',  // added deliveryDate
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
        {
          _id: 'prod2',
          name: 'Handmade Macrame Wall Hanging Tapestry for Boho Bedroom and Living Room Decor (Size: 35 in)',
          image: '/imgs/lamp.jpg',
          amount: 499,
          quantity: 1,
          deliveryDate: '29/10/2025',
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
        {
          _id: 'prod3',
          name: 'Classic Wooden Magazine Rack with Carved Design for Living Room, Bedroom, and Office',
          image: '/imgs/cycle-decoration.jpg',
          amount: 1599,
          quantity: 2,
          deliveryDate: '30/10/2025',
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
      ],
      shippingAddress: {
        name: 'Arjun Mehta',
        addressLine1: '67 MG Road',
        addressLine2: '5th Floor',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
        zipcode: '560001',
        phone: '+91 80 5555 1234',
        default: false,
      },
      paymentMode: 'online',
      totalAmount: 800,
      paymentStatus: 'paid',
      status: 'delivered',
      doraCoinsEarned: 10,
    },
    {
      _id: 'bcd123xy567',
      createdAt: '12:30 20/10/2025',
      products: [
        {
          _id: 'prod4',
          name: 'Ceramic Planter Pot with Drainage Hole for Indoor Plants (Size: 6 in)',
          image: '/imgs/planter.jpg',
          amount: 350,
          quantity: 1,
          deliveryDate: '25/10/2025',
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
        {
          _id: 'prod5',
          name: 'Cotton Throw Blanket with Fringe for Cozy Sofa and Bed Decor (Size: 50 x 60 in)',
          image: '/imgs/blanket.jpg',
          amount: 1200,
          quantity: 1,
          deliveryDate: '26/10/2025',
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
      ],
      shippingAddress: {
        name: 'Jane Smith',
        addressLine1: '456 Maple Avenue',
        addressLine2: 'Suite 12',
        city: 'Toronto',
        state: 'Ontario',
        country: 'Canada',
        zipcode: 'M4B 1B3',
        phone: '+1 416-555-5678',
        default: false,
      },
      paymentMode: 'cash on delivery',
      totalAmount: 1550,
      paymentStatus: 'pending',
      status: 'processing',
      doraCoinsEarned: 15,
    },
    {
      _id: 'klm789opq10',
      createdAt: '17:15 15/10/2025',
      products: [
        {
          _id: 'prod6',
          name: 'Handcrafted Wooden Serving Tray with Handles for Kitchen and Dining (Size: 18 in)',
          image: '/imgs/tray.jpg',
          amount: 899,
          quantity: 1,
          deliveryDate: '20/10/2025',
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
        {
          _id: 'prod7',
          name: 'Bamboo Wind Chime for Balcony and Garden Decor',
          image: '/imgs/windchime.jpg',
          amount: 299,
          quantity: 2,
          deliveryDate: '21/10/2025',
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
      ],
      shippingAddress: {
        name: 'Oliver Twist',
        addressLine1: '789 King’s Road',
        addressLine2: '',
        city: 'London',
        state: 'Greater London',
        country: 'United Kingdom',
        zipcode: 'SW3 5XP',
        phone: '+44 20 7946 0857',
        default: false,
      },
      paymentMode: 'online',
      totalAmount: 1497,
      paymentStatus: 'paid',
      status: 'shipped',
      doraCoinsEarned: 20,
    },
    {
      _id: 'xyz456abc12',
      createdAt: '09:45 10/10/2025',
      products: [
        {
          _id: 'prod8',
          name: 'Eco-Friendly Reusable Tote Bag for Grocery Shopping',
          image: '/imgs/totebag.jpg',
          amount: 150,
          quantity: 3,
          date: '15/10/2025',
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
        {
          _id: 'prod9',
          name: 'Minimalist Ceramic Vase for Home Decor (Size: 10 in)',
          image: '/imgs/vase.jpg',
          amount: 699,
          quantity: 1,
          deliveryDate: '16/10/2025',
          review: {
            image: [],
            message: '',
            rating: '',
          },
        },
      ],
      shippingAddress: {
        name: 'Marie Dubois',
        addressLine1: '101 Rue de Rivoli',
        addressLine2: '',
        city: 'Paris',
        state: 'Île-de-France',
        country: 'France',
        zipcode: '75001',
        phone: '+33 1 42 96 20 00',
        default: false,
      },
      paymentMode: 'online',
      totalAmount: 1149,
      paymentStatus: 'paid',
      status: 'delivered',
      doraCoinsEarned: 25,
    },
  ];



  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  useEffect(() => {
    setOrders(orders_list);
    setFilteredOrders(orders_list)
  }, []);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    setFilteredOrders(
      searchValue.length === 0
        ? orders
        : orders.filter((item) =>
          item._id.startsWith(searchValue) ||
          item.products.some((product) =>
            product.name,toLowerCase().includes(searchValue.toLowerCase())
          )
        )
    );
  }, [searchValue, orders]);



  return (
    <div className='CustomerOrders flex flex-col gap-5 p-5'>
      <div className="your-orders-head flex justify-between items-center">
        <p className="title font-primary text-xl ">Your Orders</p>
        <input type="search" onChange={(e) => setSearchValue(e.target.value)} placeholder='Search by Order Id or Product Name' className='w-100 text-xs p-3 bg-gray-100 rounded-lg outline-none' />
      </div>
      <div className="orders-container w-full flex flex-col gap-1">
        {filteredOrders.length == 0 ?

          <NotFound item={'Orders'} />
          :
          filteredOrders.map((order, index) => (

            <div className="order-card p-5 w-full flex flex-col shadow-1 shadow-xs gap-4" key={index}>
              <div className="head flex justify-between items-center">
                <p className="order-id text-sm">#{order?._id}</p>
                <div className="order-status flex gap-5">
                  <span className="delivery-status py-2 px-5 text-white rounded-full bg-orange-600 text-sm">{order?.status.charAt(0).toUpperCase() + order?.status.slice(1)}</span>
                </div>
              </div>
              <div className="products flex flex-col gap-2">
                <p className="title text-sm">Products</p>
                <div className="products-container flex flex-wrap gap-3 flex-1/5">
                  {order.products.map((product, index) => (
                    <div className="product-order-card flex gap-2 max-w-80" key={index}>
                      <img src={product.image} className='min-w-30 h-30 text-xs text-gray-600' alt="product-image" />
                      <div className="product-details flex flex-col gap-2 text-sm text-gray-700">
                        <p className="product-name font-primary">{textCutter(product.name, 20)}</p>
                        <span className=" text-md">&#8377;{product.amount}</span>
                        <span className=" text-sm font-medium">Quantity: {product.quantity}</span>
                        <span className='text-sm '>Expected delivery on <span className='text-green-800 text-xs font-medium'>{product.deliveryDate}</span></span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order-more-details mt-6 flex items-end gap-10 flex-wrap text-gray-700">
                  <div className='flex flex-col gap-4'>

                    <div className="payments flex gap-6 items-center">
                      <p className="text-2xl">&#8377;{order.totalAmount}</p>
                      <p className={`py-2 px-5 ${order?.paymentStatus === 'paid' ? 'bg-green-600' : 'bg-amber-700'} text-white rounded-full text-xs`}>{order?.paymentStatus.charAt(0).toUpperCase() + order?.paymentStatus.slice(1)}</p>

                    </div>

                    {order.doraCoinsEarned && order.doraCoinsEarned > 0 ?
                      <p className="text-sm flex gap-2 items-center"><img src="/icons/dora-coin.png" alt="dora-coin-icon" className='text-xsw w-5 h-5' />
                        Earned {order.doraCoinsEarned} dora coins</p>
                      : null}
                  </div>
                  <div className="address flex flex-col text-xs w-50">
                    <div className="addrress-head font-medium">Shipping Address</div>
                    <div className="addrress-head">{order.shippingAddress.name}</div>
                    <p className="addrress-head">{order.shippingAddress.addressLine1}, {order.shippingAddress.addressLine2 ? order.shippingAddress.addressLine2 + ', ' : ''}{order.shippingAddress.city} - {order.shippingAddress.zipcode} <br /> {order.shippingAddress.state}, {order.shippingAddress.country}</p>
                  </div>
                  <div className="actions flex gap-5 justify-center flex-col items-center">
                    <p className="money-saved font-medium">&#8377;500 Saved</p>
                    {order.paymentStatus != 'paid' && order.status != 'delivered' ?
                      <button className='px-5 py-2 rounded-md bg-red-100 text-sm text-red-700 hover:outline-1 hover:outline-red-500 transition-all'>Cancel Order</button>
                      :
                      <>

                        <button className="delivery-status py-2 px-5 bg-green-100 text-sm text-green-700 hover:outline-1 hover:outline-green-500 transition-all duration-300 rounded-md">Write Review</button>
                      </>
                    }
                  </div>
                </div>



              </div>
            </div>

          ))}

      </div>
    </div>
  )
}

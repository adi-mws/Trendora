import React, { useState } from 'react'

export default function CustomerOrders() {

  const orders_list = [
    {
      _id: 'aslkdjjxxx89',
      createdAt: '19:00 24/10/2025',
      products: [
        {
          name: 'Stylish Jute Storage Basket with Leather Handles for Laundry, Toys, and Home Organization (Size: 40 cm)',
          image: '/imgs/cycle-decoration.jpg',
          amount: 200,
          quantity: 1,
          review: {
            image: '',
            message: '',
            rating: '',
          },
        },
        {
          name: 'Handmade Macrame Wall Hanging Tapestry for Boho Bedroom and Living Room Decor (Size: 35 in)',
          amount: 499,
          quantity: 1,
          image: '/imgs/lamp.jpg',
          review: {
            image: '',
            message: '',
            rating: '',
          },
        },
        {
          name: 'Classic Wooden Magazine Rack with Carved Design for Living Room, Bedroom, and Office',
          amount: 1599,
          image: '/imgs/cycle-decoration.jpg',
          quantity: 2,
          review: {
            image: '',
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
          name: 'Ceramic Planter Pot with Drainage Hole for Indoor Plants (Size: 6 in)',
          image: '/imgs/planter.jpg',
          amount: 350,
          quantity: 1,
          review: {
            image: '',
            message: '',
            rating: '',
          },
        },
        {
          name: 'Cotton Throw Blanket with Fringe for Cozy Sofa and Bed Decor (Size: 50 x 60 in)',
          image: '/imgs/blanket.jpg',
          amount: 1200,
          quantity: 1,
          review: {
            image: '',
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
          name: 'Handcrafted Wooden Serving Tray with Handles for Kitchen and Dining (Size: 18 in)',
          image: '/imgs/tray.jpg',
          amount: 899,
          quantity: 1,
          review: {
            image: '',
            message: '',
            rating: '',
          },
        },
        {
          name: 'Bamboo Wind Chime for Balcony and Garden Decor',
          image: '/imgs/windchime.jpg',
          amount: 299,
          quantity: 2,
          review: {
            image: '',
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
          name: 'Eco-Friendly Reusable Tote Bag for Grocery Shopping',
          image: '/imgs/totebag.jpg',
          amount: 150,
          quantity: 3,
          review: {
            image: '',
            message: '',
            rating: '',
          },
        },
        {
          name: 'Minimalist Ceramic Vase for Home Decor (Size: 10 in)',
          image: '/imgs/vase.jpg',
          amount: 699,
          quantity: 1,
          review: {
            image: '',
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
  useEffect(() => {
    setOrders(orders_list);
  }, []);

  return (
    <div className='CustomerOrders flex flex-col gap-5 p-5'>
      <p className="title font-primary text-xl ">Your Orders</p>
      <div className="orders-container">
        <div className="order-card">
          <div className="head flex gap-4">

          </div>
        </div>
      </div>
    </div>
  )
}

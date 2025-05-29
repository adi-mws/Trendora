import React, { useEffect, useState } from 'react'
import AddressCard from '../cards/AddressCard';

export default function CustomerAddresses() {
  const addresses_items = [
    {
      name: 'John Doe',
      addressLine1: '123 Main Street',
      addressLine2: 'Apt 4B',
      city: 'Los Angeles',
      state: 'California',
      country: 'United States',
      zipcode: '90001',
      phone: '+1 310-555-1234',
      default: true,
    },
    {
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
    {
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
    {
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
    {
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
  ];
  

  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    setAddresses(addresses_items);
  }, [])
  return (
    <div className='CustomerAddresses text-sm'>
      <div className="head p-5">
        <p className="title text-xl font-primary">Your Addresses</p>

      </div>
      <h4 className='px-4 py-2'>Shipping Address</h4>
      <div className="addresses-container flex flex-wrap p-5 gap-3 flex-1/4">

        {/* Address Card */}
        {addresses.map((address, index) => (
            <AddressCard address={address} />
        ))}

        <button className="address-card p-5 bg-slate-50 rounded-md flex flex-col gap-4 items-center justify-center">
          <i className='fas fa-plus text-5xl text-gray-300'></i>
          <span className=''>Add New Address</span>

        </button>
      </div>
    </div>
  )
}

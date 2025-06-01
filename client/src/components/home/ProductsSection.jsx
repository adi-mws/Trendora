import React, { useEffect, useState } from 'react'
import ProductCardVertical from '../cards/ProductCardVertical';

export default function () {
    const products_items = [
        {
          name: 'TIED RIBBONS Cycle Shape Flower Vase with Peonies Bunches for Home Decor Center Table Bedroom Living Room Office Bathroom Decorative Gift Items (19 cm x 21 cm)',
          price: 2000,
          mrp: 2500,
          discount: '20%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 3.5,
          wishlist: false
        },
        {
          name: 'Sunshine Lighting Table Lamp with Adjustable Brightness and Sleek Metal Base for Living Room and Bedroom (20W LED)',
          price: 1800,
          mrp: 2200,
          discount: '18%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 4,
          wishlist: false
        },
        {
          name: 'Elegant Wooden Wall Clock with Roman Numerals and Quartz Movement for Home and Office (Size: 30 cm)',
          price: 1500,
          mrp: 1900,
          discount: '21%',
          image: '/imgs/lamp.jpg',
          rating: 4.2,
          wishlist: false
        },
        {
          name: 'Rustic Ceramic Flower Pot with Intricate Handcrafted Patterns for Indoor Plants and Garden Decor (Set of 2)',
          price: 1200,
          mrp: 1600,
          discount: '25%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 3.8,
          wishlist: false
        },
        {
          name: 'Vintage Wooden Wall Shelf with Three Tiers and Iron Frame for Kitchen, Living Room, and Bedroom Storage',
          price: 2500,
          mrp: 3000,
          discount: '17%',
          image: '/imgs/lamp.jpg',
          rating: 4.5,
          wishlist: false
        },
        {
          name: 'Classic Metal Candle Holder Stand for Pillar Candles, Tealights, and Home Decor (Antique Gold Finish)',
          price: 900,
          mrp: 1200,
          discount: '25%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 4,
          wishlist: false
        },
        {
          name: 'Decorative Wall Mirror with Wooden Frame for Bedroom, Living Room, and Entryway (Size: 60 cm x 40 cm)',
          price: 2200,
          mrp: 2700,
          discount: '19%',
          image: '/imgs/lamp.jpg',
          rating: 4.3,
          wishlist: false
        },
        {
          name: 'Artistic Abstract Painting Canvas Wall Art for Home and Office Decor (Size: 24 in x 36 in)',
          price: 3500,
          mrp: 4000,
          discount: '12%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 4.1,
          wishlist: false
        },
        {
          name: 'Handcrafted Wooden Jewellery Box with Brass Inlay and Velvet Lining for Storing Precious Accessories (Size: 8 in)',
          price: 1300,
          mrp: 1700,
          discount: '24%',
          image: '/imgs/lamp.jpg',
          rating: 3.9,
          wishlist: false
        },
        {
          name: 'Modern LED Wall Light Sconce with Warm White Glow for Hallways, Living Rooms, and Bedrooms (10W)',
          price: 1750,
          mrp: 2100,
          discount: '17%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 4.4,
          wishlist: false
        },
        {
          name: 'Premium Handwoven Cotton Table Runner with Tassels for Dining Table and Sideboard (Size: 72 in x 14 in)',
          price: 1100,
          mrp: 1400,
          discount: '21%',
          image: '/imgs/lamp.jpg',
          rating: 4.2,
          wishlist: false
        },
        {
          name: 'Antique Brass Photo Frame with Intricate Floral Design for 5x7 inch Pictures and Home Decor',
          price: 850,
          mrp: 1100,
          discount: '23%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 3.7,
          wishlist: false
        },
        {
          name: 'Vintage Metal Lantern with Glass Panels for Tealights, Outdoor, and Indoor Decor (Size: 12 in)',
          price: 1600,
          mrp: 2000,
          discount: '20%',
          image: '/imgs/lamp.jpg',
          rating: 4.1,
          wishlist: true
        },
        {
          name: 'Luxurious Velvet Cushion Cover with Embroidered Patterns for Sofa, Bedroom, and Living Room (16x16 in)',
          price: 600,
          mrp: 800,
          discount: '25%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 3.9,
          wishlist: false
        },
        {
          name: 'Ceramic Mug Set with Hand-painted Designs for Coffee and Tea Lovers (Set of 4, 350ml each)',
          price: 950,
          mrp: 1200,
          discount: '20%',
          image: '/imgs/lamp.jpg',
          rating: 4,
          wishlist: false
        },
        {
          name: 'Elegant Glass Vase with Gold Rim for Flower Arrangements and Home Centerpieces (Size: 25 cm)',
          price: 1400,
          mrp: 1800,
          discount: '22%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 4.3,
          wishlist: false
        },
        {
          name: 'Traditional Brass Urli Bowl with Intricate Carvings for Floating Flowers and Festive Decor (Size: 10 in)',
          price: 2000,
          mrp: 2500,
          discount: '20%',
          image: '/imgs/lamp.jpg',
          rating: 4.2,
          wishlist: false
        },
        {
          name: 'Stylish Jute Storage Basket with Leather Handles for Laundry, Toys, and Home Organization (Size: 40 cm)',
          price: 1250,
          mrp: 1600,
          discount: '22%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 4,
          wishlist: false
        },
        {
          name: 'Handmade Macrame Wall Hanging Tapestry for Boho Bedroom and Living Room Decor (Size: 35 in)',
          price: 1750,
          mrp: 2200,
          discount: '20%',
          image: '/imgs/lamp.jpg',
          rating: 4.5,
          wishlist: false
        },
        {
          name: 'Classic Wooden Magazine Rack with Carved Design for Living Room, Bedroom, and Office',
          price: 1900,
          mrp: 2300,
          discount: '17%',
          image: '/imgs/cycle-decoration.jpg',
          rating: 4.1,
          wishlist: false
        }
      ];
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(products_items);
    }, []);

    const toggleWishlist = (item) => {
        setProducts(prevProducts =>
          prevProducts.map(product =>
            product.name === item.name
              ? { ...product, wishlist: !product.wishlist }
              : product
          )
        );
      };

   
    // products fetching 
    useEffect(() => {
        // Api calling for the products fetch
    }, [])
    const addToWhishlist = (product) => {
        // logic for addint the product to wishlist 
    }
    return (
        <div className='product-section flex flex-col gap-5 mt-15'>
            <div className="title text-xl">Products For You</div>
            <div className="products-card-container flex gap-1 sm:gap-2 flex-wrap items-center w-full">
                {
                    products.map((product, index) => {
                        return <ProductCardVertical product={product}/>

                    })
                }
            </div>

        </div >
    )
}

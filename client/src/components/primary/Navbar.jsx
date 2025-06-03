import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [selectedNav, setSelectedNav] = useState('wallDecor');
    const [showNavDropdown, setShowNavDropdown] = useState(false);

    const wordSpacer = (str) => {
        // Insert a space before each capital letter (except the first one)
        const spacedStr = str.replace(/([A-Z])/g, ' $1');

        // Capitalize the first character and trim any leading space
        return spacedStr.charAt(0).toUpperCase() + spacedStr.slice(1).trim();
    };
    const navItems = {

        // Nav Items for rendering once without any frequent code
        WallDecor: [
            { name: 'Abstract Wall Art', link: '/wall-decor/abstract-wall-art' },
            { name: 'Canvas Prints', link: '/wall-decor/canvas-prints' },
            { name: 'Metal Wall Sculptures', link: '/wall-decor/metal-wall-sculptures' },
            { name: 'Wooden Wall Panels', link: '/wall-decor/wooden-wall-panels' },
            { name: 'Framed Photographs', link: '/wall-decor/framed-photographs' },
            { name: 'Vintage Posters', link: '/wall-decor/vintage-posters' },
            { name: 'Wall Plates', link: '/wall-decor/wall-plates' },
            { name: 'Decorative Mirrors', link: '/wall-decor/decorative-mirrors' },
            { name: 'Macrame Wall Hangings', link: '/wall-decor/macrame-wall-hangings' },
            { name: '3D Wall Art', link: '/wall-decor/3d-wall-art' },
            { name: 'Woven Wall Baskets', link: '/wall-decor/woven-wall-baskets' },
            { name: 'Rustic Wall Decor', link: '/wall-decor/rustic-wall-decor' },
            { name: 'Botanical Prints', link: '/wall-decor/botanical-prints' },
            { name: 'Peel-and-Stick Murals', link: '/wall-decor/peel-and-stick-murals' },
            { name: 'Typography Posters', link: '/wall-decor/typography-posters' },
            { name: 'Cork Wall Boards', link: '/wall-decor/cork-wall-boards' },
            { name: 'Wall Decals', link: '/wall-decor/wall-decals' },
            { name: 'Geometric Patterns', link: '/wall-decor/geometric-patterns' },
            { name: 'Kids Wall Art', link: '/wall-decor/kids-wall-art' },
            { name: 'Seasonal Wall Decor', link: '/wall-decor/seasonal-wall-decor' },
        ],
        Lightning: [
            { name: 'Fairy String Lights', link: '/lighting/fairy-string-lights' },
            { name: 'Table Lamps', link: '/lighting/table-lamps' },
            { name: 'Pendant Lights', link: '/lighting/pendant-lights' },
            { name: 'Chandeliers', link: '/lighting/chandeliers' },
            { name: 'Wall Sconces', link: '/lighting/wall-sconces' },
            { name: 'Floor Lamps', link: '/lighting/floor-lamps' },
            { name: 'Lanterns', link: '/lighting/lanterns' },
            { name: 'Candle Holders', link: '/lighting/candle-holders' },
            { name: 'LED Strip Lights', link: '/lighting/led-strip-lights' },
            { name: 'Outdoor Solar Lights', link: '/lighting/outdoor-solar-lights' },
            { name: 'Decorative Bulbs', link: '/lighting/decorative-bulbs' },
            { name: 'Himalayan Salt Lamps', link: '/lighting/himalayan-salt-lamps' },
            { name: 'Spotlights', link: '/lighting/spotlights' },
            { name: 'Smart Lighting', link: '/lighting/smart-lighting' },
            { name: 'Desk Lamps', link: '/lighting/desk-lamps' },
            { name: 'Recessed Lighting', link: '/lighting/recessed-lighting' },
            { name: 'Globe Lights', link: '/lighting/globe-lights' },
            { name: 'Paper Lanterns', link: '/lighting/paper-lanterns' },
            { name: 'Moroccan Lamps', link: '/lighting/moroccan-lamps' },
            { name: 'Vintage Bulbs', link: '/lighting/vintage-bulbs' },
        ],
        TableDecor: [
            { name: 'Decorative Vases', link: '/table-decor/decorative-vases' },
            { name: 'Centerpiece Bowls', link: '/table-decor/centerpiece-bowls' },
            { name: 'Figurines', link: '/table-decor/figurines' },
            { name: 'Decorative Trays', link: '/table-decor/decorative-trays' },
            { name: 'Table Runners', link: '/table-decor/table-runners' },
        ],
        SoftFurnishings: [
            { name: 'Cushion Covers', link: '/soft-furnishings/cushion-covers' },
            { name: 'Throws & Blankets', link: '/soft-furnishings/throws-blankets' },
            { name: 'Rugs & Mats', link: '/soft-furnishings/rugs-mats' },
            { name: 'Curtains & Drapes', link: '/soft-furnishings/curtains-drapes' },
            { name: 'Poufs & Ottomans', link: '/soft-furnishings/poufs-ottomans' },
        ],
        FestiveDecor: [
            { name: 'Christmas Ornaments', link: '/festive-decor/christmas-ornaments' },
            { name: 'Diwali Lights', link: '/festive-decor/diwali-lights' },
            { name: 'Seasonal Wreaths', link: '/festive-decor/seasonal-wreaths' },
            { name: 'Festive Garlands', link: '/festive-decor/festive-garlands' },
            { name: 'Themed Tableware', link: '/festive-decor/themed-tableware' },
        ],
    };

    return (
        <>
            <div className='hidden lg:flex justify-center flex-col items-center relative '>
                <div className='flex w-full justify-center align-center gap-12 text-sm py-2'>
                    {Object.keys(navItems).map((item, index) => {
                        return <p key={index} onMouseOver={() => { setShowNavDropdown(true); setSelectedNav(item) }} className={`hover:text-orange-600 ${selectedNav=== item && showNavDropdown ? 'text-orange-600' : 'text-gray-700'} cursor-pointer flex gap-2 text-xs items-center font-semibold`}>{item}</p>
                    })}  

                </div>
                <ul className={`dropdown w-full shadow-s z-400 shadow-gray-100 max-h-40 absolute top-8 py-6 px-8 text-2xs text-gray-600 bg-white ${showNavDropdown ? 'flex' : 'hidden'} flex-col flex-wrap align-middle gap-2`} onMouseOver={() => setShowNavDropdown(true)} onMouseOut={() => setShowNavDropdown(false)}>
                    {navItems[selectedNav]?.map((item, index) => {
    
                        return <li ><Link className='hover:underline' to={item?.link}>{item?.name}</Link></li>
                    })}
                </ul>
            </div>

        </>
    )
}

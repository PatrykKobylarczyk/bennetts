import sportswearImg from '../../assets/images/nike2.jpg'
import footwearImg from '../../assets/images/nike3.webp'
import outfitImg from '../../assets/images/nike4.jpg'
import shoe1 from '../../assets/images/shoe1.webp'
import shoe2 from '../../assets/images/shoe2.webp'
import shoe3 from '../../assets/images/shoe3.webp'
import shoe4 from '../../assets/images/shoe4.webp'
import shoe5 from '../../assets/images/shoe5.webp'
import shoe6 from '../../assets/images/shoe6.webp'
import shoe7 from '../../assets/images/shoe7.webp'

export const categories = [
    {
        id: 0,
        name: 'Home',
        image: '',
        path: '/bennetts/',
        onclick: () => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    },
    {
        id: 1,
        name: 'Sportswear',
        image: sportswearImg,
        path: '/bennetts/inprogress'
    },
    {
        id: 2,
        name: 'Footswear',
        image: footwearImg,
        path: '/bennetts/inprogress'
    },
    {
        id: 3,
        name: 'Outfit',
        image: outfitImg,
        path: '/bennetts/inprogress'
    },
]

export const cards = [
    {
        id: 1,
        image: shoe1,
        name: 'Nike Zion 2',
        description: `Men's Basketball Shoe`
    },
    {
        id: 2,
        image: shoe2,
        name: 'Nike Zoom Fly 5',
        description: `Men's road running shoe`
    }, {
        id: 3,
        image: shoe3,
        name: 'Nike Zoom Fly 5',
        description: `Men's road running shoe`
    },
    {
        id: 4,
        image: shoe4,
        name: 'Nike Zoom Fly 5',
        description: `Men's road running shoe`
    },
    {
        id: 5,
        image: shoe5,
        name: 'Nike Zoom Fly 5',
        description: `Men's road running shoe`
    },
    {
        id: 6,
        image: shoe6,
        name: 'Nike Zoom Fly 5',
        description: `Men's road running shoe`
    },
    {
        id: 7,
        image: shoe7,
        name: 'Nike Zoom Fly 5',
        description: `Men's road running shoe`
    },

]

export const footerMenu = [
    {
        id: 1,
        name: 'services',
        subMenu: [
            {
                name: 'become a member',
                path: '/bennetts/inprogress'
            },
            {
                name: 'bennetts journal',
                path: '/bennetts/inprogress'
            },
            {
                name: 'gift vouchers',
                path: '/bennetts/inprogress'
            },
            {
                name: 'promotional codes',
                path: '/bennetts/inprogress'
            }
        ]
    },
    {
        id: 2,
        name: 'help',
        subMenu: [
            {
                name: 'order status',
                path: '/bennetts/inprogress'
            },
            {
                name: 'delivery',
                path: '/bennetts/inprogress'
            },
            {
                name: 'returns',
                path: '/bennetts/inprogress'
            },
            {
                name: 'payment options',
                path: '/bennetts/inprogress'
            },
            {
                name: 'contacts',
                path: '/bennetts/inprogress'
            },

        ]
    },
    {
        id: 3,
        name: 'about',
        subMenu: [
            {
                name: 'news',
                path: '/bennetts/inprogress'
            },
            {
                name: 'career',
                path: '/bennetts/inprogress'
            },
            {
                name: 'sustainability',
                path: '/bennetts/inprogress'
            },
            {
                name: 'investors',
                path: '/bennetts/inprogress'
            }
        ]
    },

]
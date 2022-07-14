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
        path: '/bennetts'
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
                path: '/member'
            },
            {
                name: 'bennetts journal',
                path: '/vouchers'
            },
            {
                name: 'gift vouchers',
                path: '/vouchers'
            },
            {
                name: 'promotional codes',
                path: '/codes'
            }
        ]
    },
    {
        id: 2,
        name: 'help',
        subMenu: [
            {
                name: 'order status',
                path: '/order-status'
            },
            {
                name: 'delivery',
                path: '/delivery'
            },
            {
                name: 'returns',
                path: '/returns'
            },
            {
                name: 'payment options',
                path: '/payment'
            },
            {
                name: 'contacts',
                path: '/contacts'
            },

        ]
    },
    {
        id: 3,
        name: 'about',
        subMenu: [
            {
                name: 'news',
                path: '/news'
            },
            {
                name: 'career',
                path: '/career'
            },
            {
                name: 'sustainability',
                path: '/sustainability'
            },
            {
                name: 'investors',
                path: '/investors'
            }
        ]
    },

]
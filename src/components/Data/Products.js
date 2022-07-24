import rvwg1 from '../../assets/images/NikeReactVision/WolfGrey/1.webp'
import rvwg2 from '../../assets/images/NikeReactVision/WolfGrey/2.webp'
import rvwg3 from '../../assets/images/NikeReactVision/WolfGrey/3.webp'
import rvwg4 from '../../assets/images/NikeReactVision/WolfGrey/4.webp'
import rvwg5 from '../../assets/images/NikeReactVision/WolfGrey/5.webp'
import rvwg6 from '../../assets/images/NikeReactVision/WolfGrey/6.webp'
import rvwg7 from '../../assets/images/NikeReactVision/WolfGrey/7.jfif'
import rvwg8 from '../../assets/images/NikeReactVision/WolfGrey/8.webp'

import rvpp1 from '../../assets/images/NikeReactVision/PinkPrime/1.webp'
import rvpp2 from '../../assets/images/NikeReactVision/PinkPrime/2.webp'
import rvpp3 from '../../assets/images/NikeReactVision/PinkPrime/3.webp'
import rvpp4 from '../../assets/images/NikeReactVision/PinkPrime/4.webp'
import rvpp5 from '../../assets/images/NikeReactVision/PinkPrime/5.webp'
import rvpp6 from '../../assets/images/NikeReactVision/PinkPrime/6.webp'
import rvpp7 from '../../assets/images/NikeReactVision/PinkPrime/7.jfif'
import rvpp8 from '../../assets/images/NikeReactVision/PinkPrime/8.webp'



export const sizeTable = [
    2.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13
]

export const products = {
    name: 'Nike React Vision',
    variants: [
        {
            id: 0,
            name: 'Nike React Vision',
            variant: {
                colour: 'Wolf Grey/Cool Grey/Pink Prime/Black',
                images: [rvwg1, rvwg2, rvwg3, rvwg4, rvwg5, rvwg6, rvwg7, rvwg8],
            },
            details: {
                title: 'SURREAL COMFORT.',
                description: 'The D/MS/X collection is a story of surreal comfort. The layered structures, elegant lines and bright colors combine with a design inspired by the world of our dreams. The React foam and the ultra-soft tongue ensure a dreamlike wearing comfort. Off to dreamland - with the Nike React Vision.',
                gender: 'Woman',
                brand: 'Nike',
                collection: 'React Vision',
                technology: 'Air'
            }

        },
        {
            id: 1,
            name: 'Nike React Vision',
            variant: {
                color: 'Pink Prime',
                images: [rvpp1, rvpp2, rvpp3, rvpp4, rvpp5, rvpp6, rvpp7, rvpp8],
            },
            details: {
                title: 'SURREAL COMFORT.',
                description: 'The D/MS/X collection is a story of surreal comfort. The layered structures, elegant lines and bright colors combine with a design inspired by the world of our dreams. The React foam and the ultra-soft tongue ensure a dreamlike wearing comfort. Off to dreamland - with the Nike React Vision.',
                gender: 'Woman',
                brand: 'Nike',
                collection: 'React Vision',
                technology: 'Air'
            }
        }
    ]
}

export const productsHero = [
    {
        brand: 'nike',
        name: `NIKE AIR FORCE 1 '07'`,
        category: `MEN'S SHOE`,
        description: `The Nike Air Force 1 '07 has lost none of its charisma. The basketball original gets a fresh look and impresses with proven details: hard-wearing stitched overlays, a clean finish and that certain something that gives you shine.`
    },
    {
        brand: 'nike',
        name: `Air Jordan 1 Mid`,
        category: `women's shoe`,
        description: `The Air Jordan 1 Mid showcases all-round court style and premium comfort for a legendary look. The Air-Sole unit provides cushioning on hardwoods and the padded collar provides a supportive feel.`
    },
    {
        brand: 'nike',
        name: `Jordan Series ES`,
        category: `men's shoe`,
        description: `Inspired by Mike's backyard fights with his older brother Larry, the Jordan Series references the legendary sibling rivalry throughout the design. The rubber sole offers more than just impressive traction, it also tells a story about how Michael Jordan became the number 23. Search for the hidden memory "Swing for the Fence", a direct quote of the words Larry said to his little brother.`
    },
    {
        brand: 'nike',
        name: `Nike Air Max 90 SE`,
        category: `women's shoe`,
        description: `Traditional style with a wild touch. The Nike Air Max 90 SE stays true to its roots as a classic style with the iconic Waffle outsole, stitched overlays and classic TPU accents. The patchwork upper is made from an array of richly textured materials and features animal print graphics for an untamable look.`
    }
]




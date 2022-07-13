import React, {useState} from 'react';

import { footerMenu } from '../Data/Data';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';


const FooterMobile = () => {

    const [open, setOpen] = useState(false)

    const openPanelHandler = id => {
        if (!open) {
            switch (id) {
                case 1:
                    setOpen('services')
                    break;
                case 2:
                    setOpen('help')
                    break;
                case 3:
                    setOpen('about')
                    break;
            }
        }
        if (open) {
            setOpen(null)
        }
    }

    const footerMenuPanels = footerMenu.map(panel => {
        return (
            <div
                id={panel.id}
                key={panel.id}
                className='w-full flex flex-col p-3'
                onClick={() => openPanelHandler(panel.id)}>
                <div className='w-full flex justify-between items-center'>
                    <ul >{panel.name}</ul>
                    <AiOutlinePlus />
                </div>
                {panel.name===open &&
                    <div >{panel.name}</div>
                }
            </div>
        )
    })

    return ( 
        <section className='bg-[#0a0a0a] w-full p-5 flex'>
                <div className='w-3/5 '>
                    <div className='w-full flex flex-col text-white lg:text-sm xl:text-lg '>
                        {footerMenuPanels}
                    </div>

                </div>
                <div className='w-2/5 flex justify-center'>
                    <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center mr-4'><BsInstagram /></span>
                    <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center'><BsTwitter /></span>
                </div>
            </section>
     );
}
 
export default FooterMobile;
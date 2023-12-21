import { MessageCircleMore } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const ArticleItem:React.FC = () => {
    const openHandler = (e:React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
    }
  return (
    <Link to="/newsdata/61051/bloober_team_sozdast_horror_po_odnoy_iz_franshiz_skybound" className="">
    <div className="md:flex md:flex-row sm:flex sm:flex-col pl-2 pr-2">
        <img className='md:w-[196px] md:h-[110px] sx:w-full w-full rounded-[8px]' src="https://images.stopgame.ru/news/2023/12/21/c196x110/0xZajkxWHLFpdR67NgC_BQ/lqCB6rL.jpg" />
        <div className="flex flex-col justify-between ml-5">
            <Link onClick={openHandler} to="/newsdata/61051/bloober_team_sozdast_horror_po_odnoy_iz_franshiz_skybound" className="text-[18px] font-bold sm:mt-2">
                Bloober Team создаст хоррор по одной из франшиз Skybound
            </Link>
            <div className="mt-9 pr-4">
                <Link onClick={openHandler} to="/news/industry" className='text-[14px] pb-2'>Индустрия</Link>
                <div className="flex flex-row justify-between">
                <span className='text-gray-500 text-[17px]'>Сегодня, 21:03</span>
                    <Link onClick={openHandler} className='flex flex-row text-[17px] text-gray-500 text-[17px] align-text-top' to="/newsdata/61051/bloober_team_sozdast_horror_po_odnoy_iz_franshiz_skybound#comments">
                        <MessageCircleMore /><span className='pl-1'>4</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ArticleItem
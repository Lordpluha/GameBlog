import React from 'react'

interface IArticle {
  id: number,
  seo_title: string,
  title: string,
  image_src: string,
  category: {
    title: string,
    seo_title: string
  }[],
  date: string,
  comments: number
}
//https://stopgame.ru/newsdata/61034/
const articleList:IArticle[] = [
  {id: 61039, seo_title: 'igra_po_knige_lema_nepobedimyy_poluchila_patch_s_funkciey_perezapuska_glav', title: 'Игра по книге Лема «Непобедимый» получила патч с функцией перезапуска глав', image_src: 'https://images.stopgame.ru/news/2023/12/20/c196x110/LjeHs0moQt00jvs-FcV9hw/zVZUFqqdN.jpg', category: [{title:'PC', seo_title:'pc'}], date: 'Сегодня, 20:32', comments: 1},
  {id: 61038, seo_title: 'pressa_i_razrabotchiki_podderzhali_studiyu_insomniac_stavshuyu_zhertvoy_vzloma', title: 'Пресса и разработчики поддержали студию Insomniac, ставшую жертвой взлома', image_src: 'https://images.stopgame.ru/news/2023/12/20/c196x110/aMw3SgPOqcgLu_7vpap9xg/-DplHXKV.jpg', category: [{title:'Индустрия', seo_title:'industry'}], date: 'Сегодня, 19:30', comments: 2},
  {id: 61037, seo_title: 'novye_goroda_i_do_100_chasov_na_prohozhdenie_bolshe_detaley_o_final_fantasy_vii_rebirth', title: 'Новые города и до 100 часов на прохождение — больше деталей о Final Fantasy VII Rebirth', image_src: 'https://images.stopgame.ru/news/2023/12/20/c196x110/1-c2z6_KFcjnQFHNfTsKfQ/zjT1EFC.jpg', category: [{title:'PlayStation 5', seo_title:'ps5'}], date: 'Сегодня, 17:41', comments: 2},
  {id: 61036, seo_title: 'posle_novogodnego_apdeyta_v_the_finals_vypal_sneg', title: 'После новогоднего апдейта в THE FINALS выпал снег', image_src: 'https://images.stopgame.ru/news/2023/12/20/c196x110/AxEmbMq3_FzVxymHIwaDTw/6kehL8_.jpg', category: [{title:'PC', seo_title:'pc'},{title:'PlayStation 5', seo_title:'ps5'},{title:'Xbox Series X | S', seo_title:'xboxsx'}], date: 'Сегодня, 16:20', comments: 5},
  {id: 61035, seo_title: 'suicide_squad_kill_the_justice_league_snova_zaderzhivaetsya_no_tolko_v_egs', title: 'Suicide Squad: Kill the Justice League снова задерживается, но только в EGS ', image_src: 'https://images.stopgame.ru/news/2023/12/20/c196x110/rdRsuiAxpoRnptHHBnk-Vw/eW_QmqUn.jpg', category: [{title:'PC', seo_title:'pc'}], date: 'Сегодня, 15:15', comments: 1},
  {id: 61034, seo_title: 'utechka_tirazhi_igr_sony_i_vozmozhnye_detali_marvel_s_spider_man_3', title: 'Утечка: тиражи игр Sony и возможные детали Marvel’s Spider-Man 3', image_src: 'https://images.stopgame.ru/news/2023/12/20/c196x110/As8fTmxrx8ACPcHm49UHgg/4jE64IaXx.jpg', category: [{title:'Индустрия', seo_title:'industry'}], date: 'Сегодня, 14:35', comments: 15}
]

const ArticleList = () => {
  return (
    <div>ArticleList</div>
  )
}

export default ArticleList
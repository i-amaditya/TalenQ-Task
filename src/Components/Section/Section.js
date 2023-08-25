import React, { useState } from 'react'
import { UseData } from '../../Contexts/DataContext'
import './Section.css'
import { Card } from '../Card/Card';

export const Sections = () => {
  const { dataState: { sectionsData, cardsData } } = UseData();
  const [seeMoreSectionID, setSeeMoreSectionID] = useState(null);

  const handleSeeMore = (id) => {
    setSeeMoreSectionID(id)
  }

  const handleSeeLess = () => {
    setSeeMoreSectionID(null);
  }
  return (
    <div className='section-container'>

      {
        sectionsData?.map((card) => {
          const filteredCards = cardsData?.filter((el) => el?.parent_sec === card?.id);
          return <section key={card?.sec_no} className='section'>
            <div>
              <h3 className='section-title'>{card?.sec_no}. {card?.title}</h3>
              <p className='section-subtitle'>{card?.cN}</p>
            </div>
            <div className='section-cards-container'>
              {
                filteredCards.slice(0, seeMoreSectionID === card?.id ? filteredCards?.length : 3).map((card) => <Card key={card?.card_no} card={card} />)
              }
            </div>
            {
              filteredCards?.length > 3 && <div>
                {
                  seeMoreSectionID === card?.id ? <button onClick={handleSeeLess} className='btn-primary see-btn'>See Less</button> : <button onClick={() => handleSeeMore(card?.id)} className='btn-primary see-btn'>See More</button>
                }
              </div>
            }
          </section>
        }
        )
      }
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { UseData } from '../../Contexts/DataContext'
import './Banner.css'

export const Banner = () => {
  const { dataState: { bannersData } } = UseData();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex(prev => prev === bannersData?.length - 1 ? 0 : prev + 1)
    }, 2000);

    return () => clearInterval(bannerInterval);
  }, [currentBannerIndex]);

  const currentBanner = bannersData[currentBannerIndex];

  return (
    <div className='banners-container'>
      <div key={currentBanner?.id_no} className={`${currentBannerIndex % 2 === 0 && "change-gradient"} banner-card `}>
        <h3 className='banner-name'>{currentBanner?.id}</h3>
        <p className='banner-content'>{currentBanner?.text}</p>
        {
          currentBanner?.button && <button className='btn-primary'>{currentBanner?.btn_name}</button>
        }
      </div>
    </div>
  )
}

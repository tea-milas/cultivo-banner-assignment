import Image from 'next/image'
import React, { ReactNode } from 'react'
import analyze_icon from '../../assets/icons8-analyze (2).svg'
import styles from './Banner.module.css'

interface BannerProps {
  bannerText: ReactNode
  buttonText: string
  onClick: () => void
}

export const Banner: React.FC<BannerProps> = ({
  bannerText,
  buttonText,
  onClick,
}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.title_section}>
        <div className={styles.title_text}>
          <Image
            src={analyze_icon}
            alt='analyze icon'
            height={56.8}
            width={52}
          />
          <h2 className={styles.subtitle}>Next step</h2>
          <h1 className={styles.title}>Expert Report</h1>
        </div>
      </div>
      <div className={styles.text_section}>{bannerText}</div>
      <button className={styles.banner_button} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  )
}

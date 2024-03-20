'use client'

import { Banner } from '@/components/Banner/Banner'
import { ContactFormDialog } from '@/components/ContactFormDialog'
import { useState } from 'react'
import styles from './page.module.css'

const Home = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const onBannerButtonClick = () => {
    setShowForm(true)
  }
  const bannerText = isFormSubmitted ? (
    <p>
      We received your message. Please feel free to get in touch again if you
      would like to include any further details or ask any other questions. We
      are eager to assist you.
    </p>
  ) : (
    <>
      <p>
        Please get in touch if you would like an expert report for this site.
        Benefits include:
      </p>
      <ul>
        <li>Key insights from our expert team</li>
        <li>An in-depth analysis of the site</li>
        <li>Recommendations of next steps to take</li>
      </ul>
    </>
  )

  return (
    <main className={styles.main}>
      <Banner
        bannerText={bannerText}
        buttonText={isFormSubmitted ? 'Send another message' : 'Get in touch'}
        onClick={onBannerButtonClick}
      />

      <ContactFormDialog
        open={showForm}
        onClose={() => setShowForm(false)}
        onFormSubmitted={() => setIsFormSubmitted(true)}
      />
    </main>
  )
}

export default Home

import React from 'react'
import { useEffect, useState } from 'react'

function CheckoutWidgetButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      setIsVisible(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${
        isVisible
          ? 'fixed animate-fade-in bottom-2 inset-x-0 flex justify-center'
          : 'hidden'
      }`}
    >
      <div>
        {' '}
        <a
          href="https://checkout.arraialmelhorsooceu.com.br?utm_source=widget&utm_medium=website"
          target="_blank"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0ea5e9',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 600,
            padding: '12px 24px',
            borderRadius: '32px',
            textDecoration: 'none',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            transition: 'transform 0.2s',
          }}
        >
          Reservar Agora
        </a>{' '}
      </div>
    </div>
  )
}

export default CheckoutWidgetButton

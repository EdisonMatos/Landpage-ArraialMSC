import React from 'react'

function CheckoutWidgetHorizontal() {
  //Data definida para ios
  const today = new Date().toISOString().split('T')[0]

  //Captura apenas dispositivos ios
  const isIOS = () =>
    typeof navigator !== 'undefined' &&
    (/iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))

  const ios = isIOS()

  return (
    <div
      id="arraial-widget-horizontal"
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: '#ffffff',
        padding: '12px 20px',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <form
        action="https://checkout.arraialmelhorsooceu.com.br?utm_source=widget&utm_medium=website"
        method="get"
        target="_blank"
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'stretch',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {/* DATA */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#4b5563',
              marginBottom: '4px',
            }}
          >
            Data
          </label>
          <input
            type="date"
            name="date"
            {...(ios ? { defaultValue: today } : {})}
            required
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '16px',
              minHeight: '44px',
              boxSizing: 'border-box',
              appearance: 'none',
              WebkitAppearance: 'none',
              backgroundColor: '#fff',
              lineHeight: '1.25',
              opacity: 1,
            }}
          />
        </div>

        {/* ADULTOS */}
        <div
          style={{
            flex: 1,
            minWidth: '80px',
            alignSelf: 'flex-end',
          }}
        >
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#4b5563',
              marginBottom: '4px',
            }}
          >
            Adultos
          </label>
          <input
            type="number"
            name="adults"
            defaultValue={1}
            min={1}
            required
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* CRIANÇAS */}
        <div style={{ flex: 1, minWidth: '80px', alignSelf: 'flex-end' }}>
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 500,
              color: '#4b5563',
              marginBottom: '4px',
            }}
          >
            Crianças
          </label>
          <input
            type="number"
            name="children"
            defaultValue={0}
            min={0}
            required
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* BOTÃO */}
        <button
          type="submit"
          style={{
            ...(ios ? { margin: '0 auto' } : { alignSelf: 'flex-end' }),
            backgroundColor: '#0ea5e9',
            fontSize: '13px',
            color: 'white',
            fontWeight: 600,
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
            height: '38px',
          }}
        >
          Reservar Agora
        </button>
      </form>
    </div>
  )
}

export default CheckoutWidgetHorizontal
//teste

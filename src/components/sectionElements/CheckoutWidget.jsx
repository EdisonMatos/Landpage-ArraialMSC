import React from 'react'

function CheckoutWidget() {
  return (
    <div className="">
      <div
        id="arraial-widget"
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: '#ffffff',
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h3
          style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: 600,
            color: '#1f2937',
          }}
        >
          Agende seu Passeio
        </h3>

        <form
          action="https://checkout.arraialmelhorsooceu.com.br?utm_source=widget&utm_medium=website"
          method="get"
          target="_blank"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* Data */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 500,
                color: '#4b5563',
                marginBottom: '4px',
              }}
            >
              Data do Passeio
            </label>

            <input
              type="date"
              name="date"
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

          {/* Adultos / Crianças */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
            }}
          >
            <div style={{ flex: 1 }}>
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
                min="1"
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

            <div style={{ flex: 1 }}>
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
                min="0"
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
          </div>

          {/* Botão */}
          <button
            type="submit"
            style={{
              backgroundColor: '#0ea5e9',
              color: 'white',
              fontWeight: 600,
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
              marginTop: '4px',
              width: '100%',
            }}
          >
            Reservar Agora
          </button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutWidget

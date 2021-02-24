import * as React from 'react'
import { Svg, Header } from './styles'
import { Link } from '@reach/router'

export const Logo = (props) => {
  const userSession = window.sessionStorage.getItem('user')

  return (
    <Header>
      <Link to='/'>
        <Svg
          width={261.528}
          height={86.428}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='119.236 31.786 261.528 86.428'
          style={{
            background: '0 0'
          }}
          preserveAspectRatio='xMidYMid'
          {...props}
        >
          <defs>
            <linearGradient
              id='prefix__editing-gradient-gradient'
              x1={0}
              x2={1}
              y1={0.5}
              y2={0.5}
              gradientUnits='objectBoundingBox'
            >
              <stop offset={0} stopColor='#f0f' />
              <stop offset={1} stopColor='#0ff' />
            </linearGradient>
          </defs>
          <path
            d='M20.29-2.88q-1.77 1.79-4.18 2.75-2.42.97-4.81.97-2.4 0-3.24-.42l-1.3 7.14-8.52.84 5.79-29.82 6.85-.71-.55 2.89q1.77-2.98 5.42-2.98 4.12 0 6.3 2.65 1.93 2.39 1.93 6.05 0 3.65-.96 6.25-.97 2.61-2.73 4.39zm-9.5-11.78L8.57-2.35q.88.75 1.97.75 1.09 0 1.72-.42.63-.42 1.1-1.26 1.26-2.26 2.26-9.15.3-2.02.3-3.99 0-1.98-.44-2.61-.44-.63-1.28-.63-2.57 0-3.41 5zM43.51-7.1q1.05.72 1.05 2.29 0 1.58-.8 2.58-.79 1.01-2.1 1.68Q38.98.84 36.08.84t-4.6-.63q-1.7-.63-2.84-1.81-2.22-2.22-2.22-6.3 0-6.34 3.44-10.2 3.7-4.16 10.12-4.16 3.99 0 5.97 1.68 1.47 1.26 1.47 3.32 0 7.39-12.77 7.39-.17 1.09-.17 2.02 0 1.93.86 2.66.86.74 2.46.74t3.3-.74q1.7-.73 2.41-1.91zm-8.57-4.58q2.99 0 4.71-1.84 1.72-1.77 1.72-4.58 0-.97-.36-1.49-.35-.53-1.07-.53-.71 0-1.32.27-.61.28-1.24 1.2-1.55 2.1-2.44 6.97zM49.52-4.2q0-1.13.59-3.99l2.22-11.34h-2.48l.17-1.26q5.04-1.51 9.91-5.21h2.02l-1.01 4.58h3.28l-.38 1.89h-3.23L58.46-8.19q-.54 2.6-.54 3.49 0 2.01 1.76 2.43Q59.26-.84 57.75 0q-1.51.84-3.65.84-2.15 0-3.36-1.34-1.22-1.35-1.22-3.7zm17.3-13.36q1.43-2.01 3.59-3.36 2.17-1.34 4.81-1.34 2.65 0 3.91.84l8.23-.84L84.5-6.13Q83.03 2.1 79.93 5.33 76.94 8.4 71.15 8.4q-4.41 0-6.93-1.39-2.52-1.38-2.52-3.69 0-1.72 1.3-2.71t3.32-.99q1.76 0 3.11.8.79.42 1.17 1.01-.96.84-.96 2.22 0 1.81 1.68 1.81 2.81 0 4.41-6.64.46-1.8.84-3.61-1.89 2.31-6.18 2.31-2.98 0-4.7-1.43-1.72-1.42-1.72-4.78 0-2.1.71-4.48.71-2.37 2.14-4.39zm5.46 8.99q0 2.86 1.47 2.86 1.01 0 1.98-1.09.75-.89 1.05-2.19l2.14-10.79q-.21-.04-.42-.13-.42-.17-.97-.17-2.56 0-4.07 4.2-1.18 3.28-1.18 7.31zm29.86-3.23q1.52-2.69 1.52-5.42 0-1.81-1.31-1.81-1 0-2.05 1.73-1.1 1.72-1.43 3.94L96.68 0l-8.69.84 4.28-22.26 6.93-.84-.75 4.24q2.06-4.24 6.68-4.24 2.43 0 3.76 1.26 1.32 1.26 1.32 3.84 0 2.59-1.7 4.22-1.7 1.64-4.6 1.64-1.26 0-1.77-.5zm10.57 10.54q-.99-1.09-1.43-2.81-.44-1.73-.44-4.54t.96-5.38q.97-2.56 2.73-4.41 3.62-3.86 9.58-3.86 2.14 0 3.7.71l7.18-.71-3.11 16.38q-.13.5-.13 1.43 0 .92.57 1.51t1.41.67q-.42 1.43-1.95 2.27-1.54.84-3.26.84-1.72 0-2.88-.65-1.15-.65-1.49-1.74-.67 1.05-2.1 1.72-1.43.67-3.34.67t-3.46-.5q-1.56-.51-2.54-1.6zm8.86-17.05q-.48.75-.9 2.03-.42 1.29-1.12 4.71-.69 3.42-.69 5.86 0 2.43.38 3.15.38.71 1.05.71 1.34 0 2.33-1.28t1.36-3.55l2.23-12.3q-.88-.76-1.91-.76-1.03 0-1.64.34-.61.33-1.09 1.09zM167.5.84q-5.09 0-5.09-3.95 0-1.72.74-5.06.73-3.34.99-4.68.58-3.07.58-4.03 0-2.15-1.59-2.15-1.05 0-2.06 1.45t-1.47 4.35L157 0l-8.19.84 2.26-11.42q.38-1.89.72-4.04.33-2.14.33-2.47 0-1.94-1.42-1.94-.97 0-2.02 1.43t-1.64 4.37L144.48 0l-8.27.84 4.41-22.26 6.84-.84-.71 4.24q1.09-2.27 3.11-3.25 2.01-.99 5.16-.99 1.81 0 2.98.88 1.18.88 1.56 2.31.71-1.47 2.54-2.33 1.83-.86 4.07-.86 2.25 0 3.36.48 1.12.49 1.79 1.28 1.13 1.47 1.13 4.16 0 2.65-1.13 8.15-.59 2.69-.59 3.67 0 .99.57 1.58.56.59 1.4.67-.42 1.43-1.86 2.27-1.45.84-3.34.84z'
            fill='url(#prefix__editing-gradient-gradient)'
            transform='translate(163.358 92.2)'
          />
          <style />
        </Svg>
      </Link>
      {
      userSession &&
        <div>
          <h3>Bienvenido </h3>
          <p>{userSession}</p>
        </div>
      }
    </Header>
  )
}
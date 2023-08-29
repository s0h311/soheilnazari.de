'use client'

import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function Cal() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: {
          branding: {
            brandColor: '#000000',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  })

  return (
    <button
      className='border rounded-3xl px-3 py-2'
      data-cal-link='soheiln/30min'
      data-cal-config='{"layout":"month_view"}'
    >
      Click to Book
    </button>
  )
}

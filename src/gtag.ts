// https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
declare global {
  interface Window { gtag: any }
}

export const GA_TRACKING_ID = 'G-5YCJ2BZZ4Q'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

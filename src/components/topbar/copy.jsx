import React from 'react'

const gmail = 'khoaisme123@gmail.com'
const phone = '+(84)931444835'

export const copygmail = () => {
  navigator.clipboard.writeText(gmail)
  console.log(gmail)
  const timeout = setTimeout(alert('Copy to clipboard'), 3000)
  clearTimeout(timeout)
}
export const copyphone = () => {
  navigator.clipboard.writeText(phone)
  setTimeout(alert('Copy to clipboard'), 3000)
}

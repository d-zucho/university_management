import React from 'react'

const variantStyles = {
  extraSmall: 'book-cover_extra-small',
}

interface Props {
  className?: string
  variant: 'wide' | 'small'
  coverColor: string
  coverUrl: string
}

const BookCover = ({ className, variant, coverColor, coverUrl }: Props) => {
  return <div>BookCover</div>
}

export default BookCover

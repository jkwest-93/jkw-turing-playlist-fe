import React from 'react';
import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
  it('should render a form', () => {
    render(<Form />)

    const form = screen.getByRole('form')

    expect(form).toBeInTheDocument();
  })

  it('should have 3 inputs & a button', () => {
    render(<Form />)

    const songInput = screen.getByPlaceholderText('Song Name')
    const artistInput = screen.getByPlaceholderText('Artist Name')
    const linkInput = screen.getByPlaceholderText('Link')

    expect(songInput).toBeInTheDocument();
    expect(artistInput).toBeInTheDocument();
    expect(linkInput).toBeInTheDocument();
  })
})

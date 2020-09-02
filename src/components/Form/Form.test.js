import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
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

  it('should have inputs with new values when data is added to the form', () => {
    render(<Form />)

    const songInput = screen.getByPlaceholderText('Song Name')
    const artistInput = screen.getByPlaceholderText('Artist Name')
    const linkInput = screen.getByPlaceholderText('Link')

    fireEvent.change(songInput, { target: { value: 'Vibe (If I Back it Up)'} })
    fireEvent.change(artistInput, { target: { value: 'Cookiee Kawaii'} })
    fireEvent.change(linkInput, { target: { value: 'https://www.youtube.com/watch?v=Pf4Be8xeD9c'} })

    expect(songInput.value).toBe('Vibe (If I Back it Up)')
    expect(artistInput.value).toBe('Cookiee Kawaii')
    expect(linkInput.value).toBe('https://www.youtube.com/watch?v=Pf4Be8xeD9c')
  })
})

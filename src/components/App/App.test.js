import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should add a new song when the form is submitted', () => {
    render(<App />)

    const songInput = screen.getByPlaceholderText('Song Name')
    const artistInput = screen.getByPlaceholderText('Artist Name')
    const linkInput = screen.getByPlaceholderText('Link')

    fireEvent.change(songInput, { target: { value: 'Vibe (If I Back it Up)'} })
    fireEvent.change(artistInput, { target: { value: 'Cookiee Kawaii'} })
    fireEvent.change(linkInput, { target: { value: 'https://www.youtube.com/watch?v=Pf4Be8xeD9c'} })

    const submitButton = screen.getByText('Submit')
    fireEvent.click(submitButton)

    const songName = screen.getByText('Vibe (If I Back it Up)')
    const artistName = screen.getByText('Cookiee Kawaii')
    const link = screen.getByText('Watch video!')

    expect(songName).toBeInTheDocument()
    expect(artistName).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
})

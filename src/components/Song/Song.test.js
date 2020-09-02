import React from 'react';
import { render, screen } from '@testing-library/react'
import Song from './Song'

describe('Song', () => {
  it('should have a name, artist, and link', () => {
    render(
      <Song
        song={
          {
            songName: 'Vibe (If I Back it Up)',
            artistName: 'Cookiee Kawaii',
            link: 'https://www.youtube.com/watch?v=Pf4Be8xeD9c'
          }
        }
      />
    )
    screen.debug()
    const songName = screen.getByRole('heading')
    const artistName = screen.getByText('Cookiee Kawaii')
    const link = screen.getByRole('link')

    expect(songName).toBeInTheDocument();
    expect(artistName).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  })
})

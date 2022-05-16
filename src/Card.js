import './Card.css'

import React from 'react'

class temp {
  constructor(title, image, author, author_photo) {
    this.title = title;
    this.body = image;
    this.author = author;
    this.author_photo = author_photo;
  }

  get cardDetails() {
    return this.title + this.image + this.author
  }
}

let card1 = new temp()

card1.title = "The Big Steppers"
card1.author = "Mr Morale"
card1.body = 'https://picsum.photos/600/400/?random=1'
card1.author_photo = 'https://picsum.photos/600/400/?random=3'

let card2 = new temp();
card2.title = 'Human Business'
card2.author = 'Eazy'
card2.body = 'https://picsum.photos/600/400/?random'
card2.author_photo = 'https://picsum.photos/600/400/?random=4'



const Card = () => {
  return (
    <div className='card App-header'>

      <div className='flex justify-between space-x-6'>
        <article className="overflow-hidden rounded-lg shadow-lg bg-white">

          <a href="https://picsum.photos/600/400/?random=1">
            <img alt="Placeholder" className="block h-auto w-full" src={card1.body}/>
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                Article Title: {card1.title}
              </a>
            </h1>
            <p className="text-gray-800 text-sm">
              {new Date().toDateString()}
            </p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black" href="https://picsum.photos/32/32/?random">
              <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
              <p className="ml-2 text-sm">
                Author: {card1.author}
              </p>
            </a>
            <button className="no-underline text-gray-700 hover:text-red-600" href="#">
              <span className="hidden">Like</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </footer>

        </article>

        <article className="overflow-hidden rounded-lg shadow-lg bg-white">

          <a href="https://picsum.photos/600/400/?random">
            <img alt="Placeholder" className="block h-auto w-full" src={card2.body}/>
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                Article Title: {card2.title}
              </a>
            </h1>
            <p className="text-gray-800 text-sm">
              {new Date().toDateString()}
            </p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black" href="https://picsum.photos/32/32/?random=2">
              <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random=2"/>
              <p className="ml-2 text-sm">
                Author: {card2.author}
              </p>
            </a>
            <button className="no-underline text-gray-700 hover:text-red-600">
              <span className="hidden">Like</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </footer>

        </article>
      </div>
    </div>
  )
}

export default Card
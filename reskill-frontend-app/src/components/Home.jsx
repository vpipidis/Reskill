import foodTable from '../assets/foodTable.svg'
import flowers from '../assets/flowers.svg'
import sheep from '../assets/sheep.svg'
import Posts from './Posts'

function Home() {

  return (
    <div className="m-16">
      <div className="w-1/2 py-16">
        <h1 className='text-5xl p-4 font-bold'>Posts List</h1>
        <h4 className="text-gray-400 p-6 text-xl">Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading</h4>
      </div>
      <div className=' flex w-full  justify-center items-center ' >
        <a target="_blank">
          <img src={foodTable} className="" alt="Food Table" />
        </a>
      </div>
      <div className=" flex w-full  justify-center items-center py-16">
        <p className='w-3/5 font-semibold'>
          Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:<br /> <br />

          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          <br /> <br />
          Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
        </p>
      </div>
      <div className='grid grid-cols-2'>
        <img src={flowers} className="" alt="Flowers" />
        <img src={sheep} className="" alt="Sheep" />
      </div>

      <div className='flex w-full py-16 justify-center items-center'>
        <p className='w-3/5 font-semibold '>
          Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
          <br /> <br />
          Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.

        </p>
      </div>
      <div>
        <div>
          <h2 className='text-4xl font-bold'>Related Articles or posts</h2>
          <Posts isHome={true} />

        </div>
      </div>
    </div>
  )
}

export default Home
import foodTable from '../assets/foodTable.svg'
import flowers from '../assets/flowers.svg'
import sheep from '../assets/sheep.svg'

function Home() {

  return (
    <>
      <div className=" flex flex-col justify-center content-center p-0 gap-24 absolute h-16 left-3 right-27 top-244">
        <h1 className='flex-none order-0 justify-self-stretch flex-grow-0 font-bold font-mono'>Posts</h1>
        <h4 className="flex-none order-1 justify-self-stretch flex-grow-0 text-gray-400 font-light ">Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading</h4>
      </div>
      <a  target="_blank">
          <img src={foodTable} className="fullImage" alt="Food Table" />
      </a>
      <div className="bold-paragraph">
        <p>
        Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:<br/> <br/>

        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        <br/> <br/>
        Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
        </p>
      </div>
     <div>
     <img src={flowers} className="cardImage" alt="Flowers" />
     <img src={sheep} className="cardImage" alt="Sheep" />
     </div>

     <div className='font-bold'>
      <p>
          Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
          <br/> <br/>
          Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
        
        </p> 
     </div>
     <div>
      <div>
        <h2>Related Articles or posts</h2>
      </div>
     </div>
    </>
  )
}

export default Home
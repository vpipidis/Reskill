
import foodTable from './assets/foodTable.svg'
import flowers from './assets/flowers.svg'
import sheep from './assets/sheep.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="page-title">
        <h1>Posts</h1>
        <h4 className="sub-title">Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading</h4>
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

     <div className='normal-paragraph'>
      <p>
          Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
          <br/> <br/>
          Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
        </p> 
     </div>
    </>
  )
}

export default App

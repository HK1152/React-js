import './cardsection.css';

function CardSection({ cartCounter }) {
  const card = [
    {
      img: 'src/img/alu-vadi-patra.webp',
      name: 'Patra',
      price: 100,
    },
    {
      img: 'src/img/basundi.jpg',
      name: 'Basundi',
      price: 150,
    },
    {
      img: 'src/img/bhajiya-pakora-recipe.webp',
      name: 'Bhajiya pakora',
      price: 130,
    },
    {
      img: 'src/img/dabeli-recipe.jpg',
      name: 'Dabeli',
      price: 200,
    },
    {
      img: 'src/img/gujarati-fafda.webp',
      name: 'Fafda',
      price: 180,
    },
    {
      img: 'src/img/handvo-recipe-in-pan.webp',
      name: 'Handvo',
      price: 250,
    },
    {
      img: 'src/img/kadhi.webp',
      name: 'Kadhi',
      price: 80,
    },
    {
      img: 'src/img/khaman-recipe.webp',
      name: 'Khaman',
      price: 160,
    },
    {
      img: 'src/img/moong-dhokla-recipe.webp',
      name: 'Moong Dhokla',
      price: 220,
    },
  ];

  return (
    <>
            <section className="card-section">
        <h2>Recipe Card Section</h2>
        <div className="card-container">

          {card.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={()=>cartCounter(item)}>Add to Cart</button>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default CardSection;
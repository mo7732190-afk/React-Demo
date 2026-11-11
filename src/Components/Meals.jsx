import { useState, useEffect } from 'react'
import axios from 'axios'

const Meals = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => {
      //  console.log(res.data.meals)
        setItems(res.data.meals)

      })
      .catch((error) => {
        console.error('Error fetching meals:', error)
      })
  }, [])

  const itemsList = items.map(({strMeal, strMealThumb, idMeal}) => {  
    return (
      <section className="meal-card" key={idMeal}>
        <img className="meal-card__image" src={strMealThumb} alt={strMeal} />

        <section className="meal-card__content">
          <p className="meal-card__name">{strMeal}</p>
          <p className="meal-card__id">#{idMeal}</p>
        </section>
      </section>
    )

  })
  return (
    <div className="meals-grid">
      <style>{`
        .meals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px;
        }
        .meal-card {
          overflow: hidden;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .meal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
        }
        .meal-card__image {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        .meal-card__content { padding: 14px 16px; }
        .meal-card__name {
          margin: 0 0 8px;
          color: #222;
          font-size: 1.05rem;
          font-weight: 600;
        }
        .meal-card__id { margin: 0; color: #777; font-size: 0.9rem; }
      `}</style>
      {itemsList}
    </div>
  )
}

export default Meals

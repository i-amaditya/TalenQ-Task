import './Card.css'
export const Card = ({ card }) => {
  return (
    <div className={`${card?.cursor && "cursor-pointer"} card`}>

      <h3 className='card-title'>{card?.card_title}</h3>
      {
        card?.data_type === "progress" && <div className="progress-bar">
          <div className='progress-fill' style={{ width: `${card?.data_value}%` }} />
          <p className='progress-value'>{card?.data_value}% Completed</p>
        </div>
      }
      {
        card?.data_type === "number" && <p className='number-value'>
          {card?.data_value}
        </p>
      }
      {
        card?.data_type === "text" && <p className='text-value'>
          {card?.data_value}
        </p>
      }
      {
        card?.data_type === "tags" && <div>
          {
            card?.data_value?.map((el) => <div className='tags'>
              {el?.split(",").map(item => <span className='tag'>{item}</span>)}
            </div>)
          }
        </div>
      }
      {
        card?.data_type === "image" &&
        <img src={card?.data_value} alt="IMG" className='card-image' />
      }

      {
        card?.link && <a href={card?.redirect} className='card-link'>{card?.link_name}</a>
      }
      <div className='card-bottom'>
        {
          card?.button && <button className='card-btn'>{card?.button_name}</button>
        }
        {
          card?.note && <p className='card-note'>Note: {card?.note}</p>
        }
      </div>
    </div >
  )
}

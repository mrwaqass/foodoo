import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from '../../GetComponents'
import {Youtube, LocalOfferIcon} from '../../GetIcons'

function Card({idMeal, strMeal, strArea, strMealThumb, strYoutube, strTags}) {
    const history = useHistory()
    return (
        <article className='card'>
            {strArea && <div className='cardTag'>{strArea}</div>}
            <div className='cardContent'>
                <img
                    className='image'
                    src={`${strMealThumb && strMealThumb}`}
                    alt={`image - ${idMeal && idMeal}`}
                />
            </div>
            <div className='cardFooter'>
                {strMeal && <p className='cardFooterTitle MB05'>{strMeal}</p>}
                {strYoutube && (
                    <p className='cardFooterSubtitle MB05'>
                        <Youtube />
                        <a href={strYoutube} target='_blank'>
                            watch on youtube
                        </a>
                    </p>
                )}
                {strTags && (
                    <p className='cardPrice MT05 MB05'>
                        <LocalOfferIcon /> {strTags}
                    </p>
                )}

                <Button
                    variant='primary'
                    className='btn btnPrimary'
                    onClick={() => history.push(`/item/${idMeal}`)}
                >
                    Details
                </Button>
            </div>
        </article>
    )
}

export default Card

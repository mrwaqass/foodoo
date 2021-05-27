import React, {useEffect} from 'react'
import {
    Loading,
    Button,
    IconButton,
    Tooltip,
    SingleItemInfo,
} from '../GetComponents'
import {HomeIcon} from '../GetIcons'
import {useParams, useHistory} from 'react-router-dom'
import './SingleItem.css'
import {useGlobalContext} from '../context'
const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=`

const SingleItem = () => {
    const history = useHistory()
    const {id} = useParams()
    const {loading, getItemById, itemToGet, data} = useGlobalContext()

    useEffect(() => {
        if (data.length > 0) {
            getItemById(id)
        }
    }, [data])

    if (loading) {
        return <Loading />
    }
    const {
        idMeal,
        strMeal,
        strArea,
        strMealThumb,
        strTags,
        strCategory,
        strInstructions,
        strYoutube,
    } = itemToGet

    return (
        <div className='singleItem section'>
            <Tooltip title={<p className='tooltip'>Back to home</p>}>
                <IconButton onClick={() => history.push('/')}>
                    <HomeIcon />
                </IconButton>
            </Tooltip>
            <div className='singleItemContainer'>
                <div className='singleItemLeft'>
                    <img
                        src={`${strMealThumb && strMealThumb}`}
                        alt={strMeal}
                    />
                </div>
                <div className='singleItemRight'>
                    {strArea && <SingleItemInfo h='Area' d={strArea} />}
                    {strInstructions && (
                        <SingleItemInfo h='Instructions' d={strInstructions} />
                    )}
                    {strCategory && (
                        <SingleItemInfo h='Category' d={strCategory} />
                    )}
                    {strTags && <SingleItemInfo h='Tags' d={strTags} />}
                    {/* hard code SingleItemInfo */}
                    {strYoutube && (
                        <div className='singleItemRightItem'>
                            <div className='singleItemRightItemTitle'>
                                <p>Video:</p>
                            </div>
                            <div className='singleItemRightItemInfo'>
                                <a href={strYoutube} target='_blank'>
                                    <Button className='btn btnPrimaryOutlined'>
                                        Watch now
                                    </Button>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleItem

import React from 'react'
import {Link} from 'react-router-dom'

function SingleLinksColumn({title, links}) {
    return (
        <article className='singleLinksColumn'>
            <p className='footerTitle'>{title}</p>
            {links.map(item => {
                const {id, name, url, target} = item
                return (
                    <p key={id} className='footerLinksTitle'>
                        {target ? (
                            <a href={url} target={target}>
                                {name}
                            </a>
                        ) : (
                            <Link to={url}>{name}</Link>
                        )}
                    </p>
                )
            })}
        </article>
    )
}

export default SingleLinksColumn

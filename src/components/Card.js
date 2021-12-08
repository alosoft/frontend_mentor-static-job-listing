import React from 'react'


const Card = ({ data, selections, updateQuery }) => {
    return (
        <div className="job__listing__item">
            <div className="job__listing__item__head">
                <div className="job__listing__item__image">
                    <img src={data.logo.default} alt=" " />
                </div>
                <div className="job__listing__item__info">
                    <div className="job__listing__item__top">
                        <p className="text_only" href="#">{data.company}</p>
                        {data.new ? <p className="round_color" href="#">New!</p> : null}
                        {data.featured ? <p className="black_white" href="#">Featured</p> : null}
                    </div>
                    <p className="job__listing__item__job">{data.position}</p>
                    <div className="job__listing__item__bottom">
                        <button className="job__listing__item__bottom__info">{data.postedAt}</button>
                        <span className="dot"></span>
                        <button className="job__listing__item__bottom__info">{data.contract}</button>
                        <span className="dot"></span>
                        <button className="job__listing__item__bottom__info">{data.location}</button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="job__listing__item__body">
                <div className="job__listing__item__skills">
                    <button onClick={() => updateQuery(data.level)} className={`${selections.includes(data.level) ? 'active' : ''} job__listing__item__skill`}>{data.level}</button>
                    <button onClick={() => updateQuery(data.role)} className={`${selections.includes(data.role) ? 'active' : ''} job__listing__item__skill`}>{data.role}</button>
                    {data.languages.map((item, index) => (<button key={index} onClick={() => updateQuery(item)} className={`${selections.includes(item) ? 'active' : ''} job__listing__item__skill`}>{item}</button>))}
                    {data.tools.map((item, index) => (<button key={index} onClick={() => updateQuery(item)} className={`${selections.includes(item) ? 'active' : ''} job__listing__item__skill`}>{item}</button>))}
                </div>
            </div>
        </div>
    )
}

export default Card

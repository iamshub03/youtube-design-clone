import React from 'react'
import tagData from '../../DataSet/tagData'
import TagList from './TagList'
import './tagsection.css'

function TagsList(props)
{
    const TagListData = tagData.map(value => {
        return <TagList name={value.name} />
      })
    return(
        <div className="taglist-container">
            {TagListData}
        </div>
    )
}

export default TagsList
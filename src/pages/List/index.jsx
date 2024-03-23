import React, { useState } from 'react'
import { rawPageList } from './mock'
import './index.scss'

export default function List() {
    // const [pageList, setPageList] = useState(rawPageList)
    return (
        rawPageList.map(item => {
            const { id, title, createAt } = item;
            return (
                <div className='list-container' key={id}>
                    <span className='list-title'>标题：{title}</span>
                    <span className='list-createAt'>创建日期：{createAt}</span>
                    <button className='list-edit'>编辑</button>
                </div>
            )
        })
    )
}

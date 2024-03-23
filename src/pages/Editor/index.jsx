import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { useTitle } from 'ahooks'
// import { changeSelectedId } from '../../../store/componentsReducer'
// import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
// import useGetPageInfo from '../../../hooks/useGetPageInfo'
import EditHeader from './EditHeader'
// import EditCanvas from './EditCanvas'
// import LeftPanel from './LeftPanel'
// import RightPanel from './RightPanel'
import styles from './index.module.scss'

const Edit = () => {
  // const { id = '' } = useParams()
  // const dispatch = useDispatch()

  // const { loading } = useLoadQuestionData()

  // function clearSelectedId() {
  //   dispatch(changeSelectedId(''))
  // }

  // 修改标题
  // const { title } = useGetPageInfo()
  // useTitle(`问卷编辑 - ${title}`)

  return (
    <div className={styles.container}>
      <EditHeader />
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            {/* <LeftPanel /> */}
            LeftPanel
          </div>
          <div
            className={styles.main}
          // onClick={clearSelectedId}
          >
            <div className={styles['canvas-wrapper']}>
              {/* <EditCanvas /> */}
              EditCanvas
            </div>
          </div>
          <div className={styles.right}>
            Right
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit

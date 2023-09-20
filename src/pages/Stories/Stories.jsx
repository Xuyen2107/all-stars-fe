import { useEffect, useState } from 'react';
import storiesAPI from '../../apis/storiesAPI';
import Card from '../../components/Layouts/Card/Card';
import styles from './stories.module.scss'
import StoriesClick from '../../components/StoriesClick/StoriesClick';







const Stories = () => {
  const [stories, setStories] = useState([])
  const [open, setOpen] = useState(false)
  const [close, setClose] = useState(true)



  const onStoriesFullView = () => {
    setOpen(!open)
  }
  const closeStoriesFullView = () => {
    setOpen(!open)
  }



  const storiesVid = async () => {
    const result = await storiesAPI.getStories()
    console.log('result', result.data.data);
    setStories(result?.data?.data || [])
  }

  useEffect(() => {
    storiesVid()

  }, [])


  return (
    <div className={`${styles.wrapper} flex flex-col pt-3 max-w-[85%] mx-auto relative `} >
      <div className={styles.body}>
        <div className='flex-[9]'>Stories</div>
        <div className={`${styles.boxIcon} flex-[2]`}>
          <div className={styles.boxInput}>
            <div className={styles.input}>
              <input className='text-sm' placeholder='Search here...' name='Search' />
              <div className='pr-[4px] pl-[12px] text-[25px]'>
                <i className="fa-solid fa-magnifying-glass fa-2xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.icon} `}>
          <i className="fa-solid fa-filter fa-2xs"></i>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-flow-rows gap-4 px-3 py-3">
        {stories.map((item, index) => {
          console.log(item.user._id);
          return (
            <div>
              <Card
                screen={true}
                onStoriesFullView={onStoriesFullView}
                type={item.type}
                url={item.url}
                picAva={item.user.profilePicture}
                name={item.user.username} />
            </div>
          )
        })}
      </div>
      <StoriesClick open={open} listStr={stories} closeStr={closeStoriesFullView} />
    </div>
  );
};

export default Stories;

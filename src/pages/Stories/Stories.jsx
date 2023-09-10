import Card from '../../components/Layouts/Card/Card';
import styles from './stories.module.scss'

const stories = [
  { to: "/video/video.mp4" },
  { to: "/video/video.mp4" },
]


const Stories = () => {
  return (
    <div className={`${styles.wrapper} flex flex-col pt-3 max-w-[85%] m-auto `} >
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
          return (
            <div>
              <Card video={item.to} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Stories;

import Image from "next/image";
import Logo from '../static/banner.png'

const styles = {
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
    content: `max-w-7xl flex-1 flex items-center justify-between`,
    wrapper: `h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black`,
}
const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className='space-y-5 px-10 flex-[3]'>
                    <h1 className='max-w-xl text-[6rem] font-mediumSerif text-black'>
                        Stay Curious.
                    </h1>
                    <h3 className='text-2xl text-black'>
                        Discover Stories, Thinking, and Expertise from writers on any topic.
                    </h3>
                    <button className={styles.accentedButton}>
                        Start Reading
                    </button>
            </div>
                <Image
                    className='hidden h-full md:inline-flex object-contain flex-1'
                    src={Logo}
                    alt={Logo}
                    width={500}
                    height={400}
                />
        </div>
        </div>
    )
}

export default Banner

import Logo from '../static/logo.png'
import Image from "next/image";

const styles = {
    authorContainer: `flex gap-[.4rem]`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    authorImage: `object-cover`,
    title: `font-bold text-2xl text-black`,
    briefing: `text-[#787878]`,
    detailsContainer: ``,
    articleDetails: ``,
    postDetails: ``,
    authorName: `font-semibold text-black`,
}
const PostCard = () => {
    return (
        <div className={styles.postDetails}>
            <div className={styles.authorContainer}>
                <div className={styles.authorImageContainer}>
                    <Image src={Logo} className={styles.authorImage} width={40} height={40}/>

                </div>
                <div className={styles.authorName}>
                    Subhanshu Bansal
                </div>
            </div>
            <h1 className={styles.title}>
                How to Calculate Log of a number ?
            </h1>
            <div>
                Calculating the log of a no.
            </div>
            <span>
                Jan 27
            </span>
        </div>

    )
}

export default PostCard
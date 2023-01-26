import Header from "../components/Header";
import Banner from "../components/Banner"
import PostCard from "@/components/PostCard";

export default function Home() {

    return (
        <div className='bg-white'>
            <Header/>
            <Banner/>
            <PostCard/>
        </div>
    )
}

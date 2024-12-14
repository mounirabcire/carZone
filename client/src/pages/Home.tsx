import { postsData } from "../data/data";
import Posts from "../features/posts/Posts";

function Home() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                fontSize: 120,
                marginTop: 100,
                // background: "blue",
                // marginBottom: 1170,
            }}
        >
            {/* Home */}
            <Posts posts={postsData} />
        </div>
    );
}

export default Home;

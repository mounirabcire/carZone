import { partnersData, postsData } from "../../data/data";
import Container from "../../ui/Container";
import Partners from "../../ui/Partners";
import HomeStyle from "../../styles/HomeStyle";
import FilterOptions from "../../ui/FilterOptions";
import Posts from "../../features/posts/Posts";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Header from "./Header";

function Home() {
    return (
        <HomeStyle>
            <Header />

            <main className="main">
                <section className="partners">
                    <Container>
                        <Heading as="h3">
                            Meet Our Auto Accessory & Rental Partners
                        </Heading>
                    </Container>
                    <Partners partners={partnersData} />
                </section>

                <section className="posts--latest">
                    <Container>
                        <div className="posts__heading-container">
                            <Heading as="h3">
                                Explore The Latest Arrivals
                            </Heading>
                            <FilterOptions
                                options={["view all", "cars", "accessories"]}
                            />
                        </div>
                        <Posts posts={postsData} />
                        <Button
                            className="posts__btn"
                            as="a"
                            $variation="ghostLinked"
                        >
                            View More &rarr;
                        </Button>
                    </Container>
                </section>

                <section className="cta">
                    <div className="cta__text-box">
                        <Heading as="h2" color="#fff">
                            Everything You Need for Your Car, All in One Stop
                        </Heading>
                        <p className="cta__text">
                            Your car journey starts here. From finding the
                            perfect vehicle to equipping it with the latest
                            accessories, we make it easy for you to get
                            everything you need. Begin today and transform your
                            car experience.
                        </p>
                    </div>
                    <Button $variation="ghostWhiteBordered">
                        Start Now
                        <span className="icon-container">
                            <i className="ri-arrow-right-up-line"></i>
                        </span>
                    </Button>
                </section>
            </main>
        </HomeStyle>
    );
}

export default Home;

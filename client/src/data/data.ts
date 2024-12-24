// NOTE: DATA FOR TESTING ONLY;

export const partnersData = [
    {
        fullName: "Daniel Foster",
        profession: "Founder of a premium car sellal agency",
        img: "/assets/images/partners/partner__img.jpg",
    },
    {
        fullName: "Robert Mitchell",
        profession: "Auto accessories business innovator",
        img: "/assets/images/partners/partner__img-2.jpg",
    },
    {
        fullName: "James Cooper",
        profession: "Expert in luxury car sellals",
        img: "/assets/images/partners/partner__img-3.jpg",
    },
    {
        fullName: "Alex Carter",
        profession: "Owner of a popular auto accessories brand",
        img: "/assets/images/partners/partner__img-4.jpg",
    },
    {
        fullName: "Sophia Morgan",
        profession: "CEO of an electric car sellal startup",
        img: "/assets/images/partners/partner__img-5.jpg",
    },
    {
        fullName: "Lucas Barnes",
        profession: "Automotive marketing consultant",
        img: "/assets/images/partners/partner__img-6.jpg",
    },
    {
        fullName: "Evelyn Brooks",
        profession: "Specialist in performance car modifications",
        img: "/assets/images/partners/partner__img-7.jpg",
    },
    {
        fullName: "Liam Rodriguez",
        profession: "Founder of eco-friendly car accessories line",
        img: "/assets/images/partners/partner__img-8.jpg",
    },
];

export const postsData = [
    {
        postImage: "/assets/images/cars/car-5.jpg",
        postName: "BMW M3",
        postCategory: {
            mainCategory: "cars",
            secondaryCategory: "rent",
        },
        PostMainDetails: {
            transmission: "automatic",
            fuel: "petrol",
            rentalPeriod: "per month",
            seatingCapacity: "5 Seats",
        },
        price: { newPrice: 3500, oldPrice: 4000 },
        currency: "USD",
        saved: 160,
        isSaved: true, // temporarily
    },
    {
        postImage: "/assets/images/cars/car-2.jpg",
        postName: "Toyota Camry",
        postCategory: {
            mainCategory: "cars",
            secondaryCategory: "sell",
        },
        PostMainDetails: {
            year: "2021",
            transmission: "automatic",
            fuel: "hybrid",
            mileage: "10,000km",
        },
        price: { newPrice: 28000, oldPrice: 30000 },
        currency: "USD",
        saved: 85,
        isSaved: false, // temporarily
    },
    {
        postImage: "/assets/images/cars/car-4.jpg",
        postName: "Honda Accord",
        postCategory: {
            mainCategory: "cars",
            secondaryCategory: "sell",
        },
        PostMainDetails: {
            year: "2020",
            transmission: "automatic",
            fuel: "petrol",
            mileage: "15,000km",
        },
        price: { newPrice: null, oldPrice: 27000 },
        currency: "USD",
        saved: 95,
        isSaved: false, // temporarily
    },
    {
        postImage: "/assets/images/accessories/accessory-2.jpg",
        postName: "Roof Rack",
        postCategory: {
            mainCategory: "accessories",
            secondaryCategory: "accessories", // No secondary category
        },
        PostMainDetails: {
            compatibility: "All vehicle types with roof bars",
            colors: ["Black", "Silver"],
            material: "Aluminum",
            condition: "new",
        },
        price: { newPrice: 300, oldPrice: 350 },
        currency: "USD",
        saved: 60,
        isSaved: false, // temporarily
    },
    {
        postImage: "/assets/images/cars/car-6.jpg",
        postName: "Chevrolet Silverado",
        postCategory: {
            mainCategory: "cars",
            secondaryCategory: "sell",
        },
        PostMainDetails: {
            year: "2019",
            transmission: "automatic",
            fuel: "diesel",
            mileage: "25,000km",
        },
        price: { newPrice: null, oldPrice: 38000 },
        currency: "USD",
        saved: 75,
        isSaved: true, // temporarily
    },
    {
        postImage: "/assets/images/cars/car-3.jpg",
        postName: "Ford Mustang",
        postCategory: {
            mainCategory: "cars",
            secondaryCategory: "rent",
        },
        PostMainDetails: {
            transmission: "manual",
            fuel: "petrol",
            rentalPeriod: "per day",
            seatingCapacity: "2 Seats",
        },
        price: { newPrice: 750, oldPrice: 800 },
        currency: "USD",
        saved: 190,
        isSaved: true, // temporarily
    },
    {
        postImage: "/assets/images/accessories/accessory-1.jpg",
        postName: "All-Weather Floor Mats",
        postCategory: {
            mainCategory: "accessories",
            secondaryCategory: "accessories", // No secondary category
        },
        PostMainDetails: {
            compatibility: "SUVs, Sedans",
            colors: ["Black", "Gray", "Beige"],
            material: "Rubber",
            condition: "new",
        },
        price: { newPrice: 150, oldPrice: 200 },
        currency: "USD",
        saved: 40,
        isSaved: false, // temporarily
    },
    {
        postImage: "/assets/images/cars/car-7.jpg",
        postName: "Range Rover SVR",
        postCategory: {
            mainCategory: "cars",
            secondaryCategory: "sell",
        },
        PostMainDetails: {
            year: "2022",
            transmission: "automatic",
            fuel: "petrol",
            mileage: "5,000km",
        },
        price: { newPrice: null, oldPrice: 55000 },
        currency: "USD",
        saved: 0,
        isSaved: false, // temporarily
    },
];

export const sliderContent = [
    {
        title: "Your Ultimate <br> Car Platform",
        paragraph:
            "Find everything you need buy, sell, rent, or explore cars with ease.",
        button: "Explore CarZone",
        image: "/assets/images/cars/home__header-img--2.png",
    },
    {
        title: "Marketplace <br> for Cars",
        paragraph: "Shop, rent, or list cars effortlessly in our marketplace.",
        button: "Start Shopping",
        image: "/assets/images/cars/home__header-img--1.jpg",
    },
    {
        title: "Expert Blogs <br> for Car Lovers",
        paragraph: "Stay informed with car reviews, tips, and news.",
        button: "Read Our Blogs",
        image: "/assets/images/cars/home__header-img--3.jpg",
    },
    {
        title: "Explore Cars <br> in Action",
        paragraph: "Enjoy photos, reels, and videos from the car community.",
        button: "Browse Gallery",
        image: "/assets/images/cars/home__header-img--4.jpg",
    },
];

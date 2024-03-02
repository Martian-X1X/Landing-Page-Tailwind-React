import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '550k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Legend",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "K Swiss",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike MD Runner 2",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "New Balance-247 OL",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Abdullah Matin',
        rating: 4.5,
        feedback: "Exceptional quality and comfort!! Martian Shop's shoes exceeded my expectations – a perfect blend of style and durability."
    },
    {
        imgURL: customer2,
        customerName: 'Nayla Nuren Snigdha',
        rating: 4.5,
        feedback: "Simply love the unique designs!!1 Martian's diverse collection caters to every taste, making it my go-to for stylish and affordable footwear."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Nike Air Force", link: "/" },
            { name: "Adidas", link: "/" },
            { name: "Fila", link: "/" },
            { name: "nike Jordans", link: "/" },
            { name: "Puma", link: "/" },
            { name: "Converse", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@martian.com", link: "customer@martian.com" },
            { name: "+8801704717819", link: "tel:+8801704717819" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
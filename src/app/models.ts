export interface Menu {
    name: string;
    title: string;
    type: string;
    url: string;
    icon: string;
}

export interface Process {
    sno: string;
    title: string;
    icon: string;
    description: string;
}

export interface Card {
    url:string;
    img: string;
    content: string;
}

export interface HouseCards {
    id: string;
    images : Images[]
    title: string;
    price: string;
    location: string;
    rooms: string;
    washrooms: string;
    description: string;
}

export interface Images {
    image: string;
}

const IMAGES: Images[] = [
    {image : "../../assets/img/istockphoto-458324715-612x612.jpg" },
    {image : "../../assets/img/istockphoto-458324715-612x612.jpg" },
    {image : "../../assets/img/istockphoto-458324715-612x612.jpg" },
]

export const HOUSECARDS: HouseCards[] = [

    {id: '1.0', images: IMAGES, title: 'Fully Furnished 1 Kanal Upper Portion Is Available For Rent In Bahria', price: '50k',
    location: 'Rawalpindi, Punjab',rooms: '2', washrooms: '2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi possimus modi commodi, iure, optio suscipit corrupti, magnam error provident quidem dolorum vero! Laboriosam, nulla dicta optio voluptatibus debitis nam.' },
    {id: '1.1', images: IMAGES, title: 'Fully Furnished 1 Kanal Upper Portion Is Available For Rent In Bahria', price: '50k',
    location: 'Rawalpindi, Punjab',rooms: '2', washrooms: '2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi possimus modi commodi, iure, optio suscipit corrupti, magnam error provident quidem dolorum vero! Laboriosam, nulla dicta optio voluptatibus debitis nam.' },
    {id: '1.2', images: IMAGES, title: 'Fully Furnished 1 Kanal Upper Portion Is Available For Rent In Bahria', price: '50k',
    location: 'Rawalpindi, Punjab',rooms: '2', washrooms: '2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi possimus modi commodi, iure, optio suscipit corrupti, magnam error provident quidem dolorum vero! Laboriosam, nulla dicta optio voluptatibus debitis nam.' },
    {id: '1.3',images: IMAGES, title: 'Fully Furnished 1 Kanal Upper Portion Is Available For Rent In Bahria', price: '50k',
    location: 'Rawalpindi, Punjab',rooms: '2', washrooms: '2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi possimus modi commodi, iure, optio suscipit corrupti, magnam error provident quidem dolorum vero! Laboriosam, nulla dicta optio voluptatibus debitis nam.' },
]

export const PROCESS: Process[] = [
    {sno: '1', title: "Select Your Apartment/Flat", icon: '../../assets/img/house.png', description: 'Choose from a wide range of Apartments/Flats in Islamabad/Rawalpindi'},
    {sno: '2', title: "Call Us for Details", icon: '../../assets/img/call.png', description: 'Call Us to get the Owner Contact Information'},
    {sno: '3', title: "Find your Place", icon: '../../assets/img/deal.png', description: 'Find your Favourite Place without any brokerage fees'}
]

export const CARDS: Card[] = [
    {url: 'Rawalpindilisting',img: "../../assets/img/istockphoto-458324715-612x612.jpg", content: "Listings of Rawalpindi"},
    {url: 'Islamabadlisting',img: "../../assets/img/z3.jpg", content: "Listings of Islamabad"},
    {url: 'BahriaTownlisting',img: "../../assets/img/bahria.jpg", content: "Listings of Bahria Town Rawalpindi"}
]


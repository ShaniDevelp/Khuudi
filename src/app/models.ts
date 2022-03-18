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


// Gulberg green Listings

const GULBERGIMAGES: Images[] = [
    {image : "../../assets/img/Capture16.PNG" },
    {image : "../../assets/img/Capture18.PNG" },
    {image : "../../assets/img/Capture20.PNG" },
    {image : "../../assets/img/Capture22.PNG" },
    {image : "../../assets/img/Capture24.PNG" },
]

export const GULBERGHOUSECARDS: HouseCards[] = [

    {id: '1.0', images: GULBERGIMAGES, title: '1 bed non furnished apartment', price: '28k',
    location: 'Gulberg Green Islamabad, Punjab',rooms: '1', washrooms: '1', description: '1 bed non furnished apartment available for rent in Gulberg Green Islamabad' },
    {id: '1.1', images: GULBERGIMAGES, title: '2 bed fully furnished apartment', price: '80k',
    location: 'Gulberg Green Islamabad, Punjab',rooms: '2', washrooms: '2', description: '2 bed fully furnished apartment available for rent in Gulberg Green Islamabad' },
    {id: '1.0', images: GULBERGIMAGES, title: '3 bed non furnished apartment', price: '50k',
    location: 'Gulberg Green Islamabad, Punjab',rooms: '3', washrooms: '4', description: '3 bed non furnished apartment available for rent in Gulberg Green Islamabad' },
    {id: '1.0', images: GULBERGIMAGES, title: '2 bed non furnished apartment', price: '45k',
    location: 'Gulberg Green Islamabad, Punjab',rooms: '2', washrooms: '2', description: '2 bed non furnished apartment available for rent in Gulberg Green Islamabad' },
    {id: '1.0', images: GULBERGIMAGES, title: '3 bed furnished apartment', price: '55k',
    location: 'Gulberg Green Islamabad, Punjab',rooms: '3', washrooms: '3', description: '3 bed furnished apartment available for rent in Gulberg Green Islamabad' },
]


// Gulberg green Listings

const BAHRIAIMAGES: Images[] = [
    {image : "../../assets/img/Capture26.PNG" },
    {image : "../../assets/img/Capture28.PNG" },
    {image : "../../assets/img/Capture30.PNG" },
    {image : "../../assets/img/Capture32.PNG" },
    {image : "../../assets/img/Capture34.PNG" },
]

export const BAHRIAHOUSECARDS: HouseCards[] = [

    {id: '1.0', images: BAHRIAIMAGES, title: '2 bedroom  furnished apartment', price: '60k',
    location: 'Bahria Town Phase 6 Empire Height, Islamabad',rooms: '2', washrooms: '2', description: '2 bedroom  furnished apartment with attach bathroom Tv lounge and Kitchen' },
    {id: '1.1', images: BAHRIAIMAGES, title: '2 bed unfurnished apartments', price: '80k',
    location: 'Bahria Town ,Islamabad',rooms: '2', washrooms: '2', description: '2 bedroom  furnished apartment with attach bathroom'},
    {id: '1.2', images: BAHRIAIMAGES, title: '1 bed fully furnished apartment', price: '65k',
    location: 'Bahria Town ,Rawalpindi',rooms: '1', washrooms: '2', description: '1 bed fully furnished apartment in Bahria Town Rawalpindi with attach bathrooms  ' },
    {id: '1.3', images: BAHRIAIMAGES, title: '2 bed fully furnished apartment', price: '80k',
    location: 'Bahria Town ,Rawalpindi',rooms: '2', washrooms: '2', description: '2 bed fully furnished apartment available for rent in Bahria Town' },
    {id: '1.4', images: BAHRIAIMAGES, title: '2 bed fully  furnished luxury apartment', price: '100k',
    location: 'Bahria Heights ,Rawalpindi',rooms: '2', washrooms: '3', description: '2 bed fully  furnished luxury apartment available for rent in Bahria Heights' },
]


// Islamabad Listings

const ISLAMABADIMAGES: Images[] = [
    {image : "../../assets/img/Capture.PNG" },
    {image : "../../assets/img/Capture2.PNG" },
    {image : "../../assets/img/Capture4.PNG" },
    {image : "../../assets/img/Capture6.PNG" },
    {image : "../../assets/img/Capture8.PNG" },
    {image : "../../assets/img/Capture10.PNG" },
    {image : "../../assets/img/Capture12.PNG" },
    {image : "../../assets/img/Capture14.PNG" },
    {image : "../../assets/img/Capture38.PNG" },
    {image : "../../assets/img/Capture39.PNG" },
]

export const ISLAMABADHOUSECARDS: HouseCards[] = [

    {id: '1.0', images: ISLAMABADIMAGES, title: '2 bedroom  furnished apartment', price: '35k',
    location: 'I 10/3, Islamabad',rooms: '2', washrooms: '2', description: '2 bedroom  furnished apartment with attach bathroom Tv lounge and Kitchen' },
    {id: '1.1', images: ISLAMABADIMAGES, title: '2 bed unfurnished apartments', price: '30k',
    location: 'I 10 markaz ,Islamabad',rooms: '2', washrooms: '1', description: '2 bedroom  furnished apartment with attach bathroom'},
    {id: '1.2', images: ISLAMABADIMAGES, title: '1 bed fully furnished apartment', price: '28k',
    location: 'I 10/1 , Islamabad',rooms: '2', washrooms: '1', description: '1 bed fully furnished apartment in I 10/1 , Islamabad with attach bathrooms  ' },
    {id: '1.3', images: ISLAMABADIMAGES, title: '2 bed fully furnished apartment', price: '55k',
    location: 'I 10/1 , Islamabad',rooms: '1', washrooms: '1', description: '1 bed fully furnished apartment available for rent in I 10, Islamabad' },
    {id: '1.4', images: ISLAMABADIMAGES, title: '2 bed fully  furnished luxury apartment', price: '65k',
    location: 'I 8/2 , Islamabad',rooms: '2', washrooms: '2', description: '2 bed fully  furnished luxury apartment available for rent in I 8' },
    {id: '1.5', images: ISLAMABADIMAGES, title: '2 bedroom  furnished apartment', price: '50k',
    location: 'I 8/1, Islamabad',rooms: '3', washrooms: '2', description: '3 bedroom  furnished apartment with attach bathroom Tv lounge and Kitchen' },
    {id: '1.6', images: ISLAMABADIMAGES, title: '1bed unfurnished apartments', price: '60k',
    location: 'I 8 markaz ,Islamabad',rooms: '', washrooms: '1', description: '1 bedroom  furnished apartment with attach bathroom'},
    {id: '1.7', images: ISLAMABADIMAGES, title: '1 bed fully furnished apartment', price: '25k',
    location: 'I 8/1 , Islamabad',rooms: '1', washrooms: '1', description: '1 bed fully furnished apartment in I 8/1 , Islamabad with attach bathrooms  ' },
    {id: '1.8', images: ISLAMABADIMAGES, title: '3 bed fully furnished apartment', price: '45k',
    location: 'E 11 , Islamabad',rooms: '3', washrooms: '3', description: '3 bed fully furnished apartment available for rent in E 11, Islamabad' },
    {id: '1.9', images: ISLAMABADIMAGES, title: '2 bed fully  furnished luxury apartment', price: '35k',
    location: 'E 11 markaz , Islamabad',rooms: '2', washrooms: '1', description: '2 bed fully  furnished luxury apartment available for rent in E 11 markaz' },
]
                                                                                                                                                                                               











export const PROCESS: Process[] = [
    {sno: '1', title: "Select Your Apartment/Flat", icon: '../../assets/img/house.png', description: 'Choose from a wide range of Apartments/Flats in Islamabad/Rawalpindi'},
    {sno: '2', title: "Call Us for Details", icon: '../../assets/img/call.png', description: 'Call Us to get the Owner Contact Information'},
    {sno: '3', title: "Find your Place", icon: '../../assets/img/deal.png', description: 'Find your Favourite Place without any brokerage fees'}
]

export const CARDS: Card[] = [
    {url: 'Rawalpindilisting',img: "../../assets/img/gulberg-greens.jpg", content: "Listings of Gulberg Islamabad"},
    {url: 'Islamabadlisting',img: "../../assets/img/z3.jpg", content: "Listings of Islamabad "},
    {url: 'BahriaTownlisting',img: "../../assets/img/bahria.jpg", content: "Listings of Bahria Town Rawalpindi"}
]


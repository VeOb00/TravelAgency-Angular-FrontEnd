export let travelDestinations: Array<TravelDestination> = [];
var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };

class TravelDestination {
    destinationPlace: string;
    destinationCountry: string;
    description: string;
    startDate: string;
    duration: number;
    price: number;
    image?: string;
    descriptionLong?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;

    constructor(place: string, country: string, description: string, startDate: Date, duration: number, price: number, image?: string, descriptionLong?: string,image1?: string, image2?: string, image3?: string, image4?: string) {
        this.destinationPlace = place;
        this.destinationCountry = country;
        this.description = description;
        this.startDate = startDate.toLocaleString("en-DE", options);
        this.duration = duration;
        this.price = price;
        this.image = image;
        this.descriptionLong = descriptionLong;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
    }

    display() { }
}

travelDestinations.push(
    new TravelDestination(
        "Kreta, Sunstar Hotel",
        "Greece",
        "All inclusive",
        new Date(2020, 7, 18), 14, 768.00, 
        "../../assets/img/travel-greece-kreta.jpg",
        "Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.",
        "../../assets/img/travel-greece-kreta (1).jpg",
        "../../assets/img/travel-greece-kreta (2).jpg",
        "../../assets/img/travel-greece-kreta (3).jpg",
        "../../assets/img/travel-greece-kreta (4).jpg",
    )
);
travelDestinations.push(
    new TravelDestination(
        "Rwai, Palm Beach Resort",
        "Thailand",
        "Breakfast, incl. Transfer",
        new Date(2020, 8, 1), 10, 800.00, 
        "../../assets/img/travel-thailand.jpg",
        "Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.",
        "../../assets/img/travel-thailand (1).jpg",
        "../../assets/img/travel-thailand (2).jpg",
        "../../assets/img/travel-thailand (3).jpg",
        "../../assets/img/travel-thailand (4).jpg",
    )
);
travelDestinations.push(
    new TravelDestination(
        "Paris",
        "France",
        "Breakfast, Transportation included",
        new Date(2020, 7, 8), 3, 199.00, 
        "../../assets/img/travel-paris.jpg",
        "Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.",
        "../../assets/img/travel-paris (1).jpg",
        "../../assets/img/travel-paris (2).jpg",
        "../../assets/img/travel-paris (3).jpg",
    )
);
travelDestinations.push(
    new TravelDestination(
        "Dubrovnik",
        "Croatia",
        "All inclusive",
        new Date(2020, 8, 1), 3, 499.00, 
        "../../assets/img/travel-dubrovnik.jpg",
        "Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.",
        "../../assets/img/travel-dubrovnik (1).jpg",
        "../../assets/img/travel-dubrovnik (2).jpg",
        "../../assets/img/travel-dubrovnik (3).jpg",
        "../../assets/img/travel-dubrovnik (4).jpg",
    )
);

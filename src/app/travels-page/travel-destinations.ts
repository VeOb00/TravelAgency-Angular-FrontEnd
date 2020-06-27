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
        "Duis at tellus at urna condimentum mattis pellentesque. Purus sit amet volutpat consequat mauris nunc congue nisi. Mi proin sed libero enim sed faucibus turpis. Morbi tempus iaculis urna id. Amet risus nullam eget felis eget. Tempus iaculis urna id volutpat lacus laoreet. Lobortis mattis aliquam faucibus purus in. Quam vulputate dignissim suspendisse in. Faucibus et molestie ac feugiat sed. Orci sagittis eu volutpat odio. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Dolor magna eget est lorem ipsum. Platea dictumst quisque sagittis purus.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa ultricies mi quis. Sed cras ornare arcu dui vivamus arcu. Arcu dui vivamus arcu felis. Odio pellentesque diam volutpat commodo. Lacus vestibulum sed arcu non odio euismod. In hac habitasse platea dictumst quisque sagittis. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Dui sapien eget mi proin sed libero enim. Elit duis tristique sollicitudin nibh sit. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Interdum varius sit amet mattis. Mauris pharetra et ultrices neque ornare. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Fermentum odio eu feugiat pretium nibh ipsum.",
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
        "Mattis enim ut tellus elementum sagittis vitae et. Praesent tristique magna sit amet purus gravida quis blandit. A lacus vestibulum sed arcu non odio euismod lacinia at. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Posuere urna nec tincidunt praesent semper. Risus at ultrices mi tempus imperdiet. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Cum sociis natoque penatibus et magnis dis parturient montes. Augue mauris augue neque gravida in fermentum et. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Eu non diam phasellus vestibulum lorem. Purus sit amet luctus venenatis lectus magna fringilla urna. Nunc non blandit massa enim nec dui nunc. Vitae turpis massa sed elementum. Elementum nibh tellus molestie nunc non. Commodo odio aenean sed adipiscing diam donec. Risus commodo viverra maecenas accumsan lacus.",
        "../../assets/img/travel-dubrovnik (1).jpg",
        "../../assets/img/travel-dubrovnik (2).jpg",
        "../../assets/img/travel-dubrovnik (3).jpg",
        "../../assets/img/travel-dubrovnik (4).jpg",
    )
);
travelDestinations.push(
    new TravelDestination(
        "Istanbul",
        "Turkey",
        "All inclusive",
        new Date(2020, 7, 19), 7, 455.00, 
        "../../assets/img/travel-istanbul.jpg",
        "Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.",
        "../../assets/img/travel-istanbul (1).jpg",
        "../../assets/img/travel-istanbul (2).jpg",
    )
);
travelDestinations.push(
    new TravelDestination(
        "Malta Sliema",
        "Malta",
        "Transportation not included",
        new Date(2020, 10, 18), 7, 780.00, 
        "../../assets/img/travel-malta.jpg",
        "Nibh tellus molestie nunc non blandit massa enim nec. Enim praesent elementum facilisis leo. Ipsum dolor sit amet consectetur adipiscing. Nam libero justo laoreet sit. Fermentum et sollicitudin ac orci phasellus. Nullam non nisi est sit amet facilisis magna. Eget gravida cum sociis natoque penatibus et magnis dis. At varius vel pharetra vel turpis. Convallis convallis tellus id interdum velit laoreet id. Vitae auctor eu augue ut. Vitae tempus quam pellentesque nec nam aliquam sem et. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.",
        "../../assets/img/travel-malta (1).jpg",
        "../../assets/img/travel-malta (2).jpg",
        "../../assets/img/travel-malta (3).jpg",
        "../../assets/img/travel-malta (4).jpg",
    )
);
travelDestinations.push(
    new TravelDestination(
        "Linz",
        "Austria",
        "Transportation not included",
        new Date(2020, 10, 18), 2, 199.00, 
        "../../assets/img/travel-linz.jpg",
        "Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.",
        // "../../assets/img/travel-linz (1).jpg",
        // "../../assets/img/travel-linz (2).jpg",
        // "../../assets/img/travel-linz (3).jpg",
        // "../../assets/img/travel-linz (4).jpg",
    )
);
travelDestinations.push(
    new TravelDestination(
        "Berlin",
        "Germany",
        "inclusive transport",
        new Date(2020, 10, 18), 2, 180.00, 
        "../../assets/img/travel-berlin.jpg",
        "Arcu ac tortor dignissim convallis aenean et tortor at risus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Enim neque volutpat ac tincidunt. Pellentesque habitant morbi tristique senectus et netus. Turpis in eu mi bibendum neque. Lacus sed viverra tellus in hac habitasse. Vitae congue eu consequat ac felis donec. A scelerisque purus semper eget duis at tellus. Et magnis dis parturient montes nascetur. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt lobortis feugiat vivamus at. Elit duis tristique sollicitudin nibh sit. Ipsum suspendisse ultrices gravida dictum. Lectus mauris ultrices eros in cursus turpis massa tincidunt.",
        "../../assets/img/travel-berlin (1).jpg",
        "../../assets/img/travel-berlin (2).jpg",
        "../../assets/img/travel-berlin (3).jpg",
        "../../assets/img/travel-berlin (4).jpg",
    )
);

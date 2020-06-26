export let locations: Array<MyLocation> = [];
var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };

class MyLocation {
    blogTitle: string;
    place: string;
    country: string;
    teaserImage: string;
    dateTimeCreated: Date;
    date: string;
    description?: string;

    constructor(name: string, country: string, place: string, image: string, timeCreated: Date, description?: string) {
        this.blogTitle = name;
        this.place = place;
        this.country = country;
        this.teaserImage = image;
        this.dateTimeCreated = timeCreated;
        this.date = this.dateTimeCreated.toLocaleString("en-DE", options);
        this.description = description;
    }
    
    display() { }

}


locations.push(new MyLocation("Things you didn't know about Dubrovnik", "Croatia", "Dubrovnik", "../assets/img/travel-dubrovnik (4).jpg", new Date(2019, 10, 24), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));
locations.push(new MyLocation("What to do in Paris", "France", "Paris", "../assets/img/travel-paris.jpg", new Date(2019, 12, 5), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
locations.push(new MyLocation("Top COVID-19 destinations", "", "", "../assets/img/blog-covid.jpg", new Date(2018, 8, 12), "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
locations.push(new MyLocation("Best museums in Vienna", "Austria", "Vienna", "../assets/img/blog-vienna-museum.jpg", new Date(2019, 3, 4), "Sed adipiscing diam donec adipiscing tristique risus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae."));
locations.push(new MyLocation("Travel survival tips", "", "", "../assets/img/blog-travel-survival.jpg", new Date(2017, 7, 24), "Libero nunc consequat interdum varius sit amet mattis. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Massa eget egestas purus viverra accumsan in nisl nisi."));
// locations.push(new MyLocation("Belvedere Palace", "Prinz Eugen-Straße 58", "Vienna", "../assets/img/loc-belvedere.jpg", new Date(2016, 4, 11)));
// locations.push(new MyLocation("Hunderwasser House", "Kegelgasse 36-38", "Vienna", "../assets/img/loc-hundertw.jpg", new Date(2015, 9, 1)));

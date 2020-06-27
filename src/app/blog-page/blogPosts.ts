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
    descriptionLong?: string;

    constructor(name: string, country: string, place: string, image: string, timeCreated: Date, description?: string, descriptionLong?: string) {
        this.blogTitle = name;
        this.place = place;
        this.country = country;
        this.teaserImage = image;
        this.dateTimeCreated = timeCreated;
        this.date = this.dateTimeCreated.toLocaleString("en-DE", options);
        this.description = description;
        this.descriptionLong = descriptionLong;
    }
    
    display() { }

}


locations.push(new MyLocation("Things you didn't know about Dubrovnik", "Croatia", "Dubrovnik", "../assets/img/travel-dubrovnik (4).jpg", new Date(2019, 10, 24), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Mattis enim ut tellus elementum sagittis vitae et. Praesent tristique magna sit amet purus gravida quis blandit. A lacus vestibulum sed arcu non odio euismod lacinia at. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Posuere urna nec tincidunt praesent semper. Risus at ultrices mi tempus imperdiet. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Cum sociis natoque penatibus et magnis dis parturient montes. Augue mauris augue neque gravida in fermentum et. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Eu non diam phasellus vestibulum lorem. Purus sit amet luctus venenatis lectus magna fringilla urna. Nunc non blandit massa enim nec dui nunc. Vitae turpis massa sed elementum. Elementum nibh tellus molestie nunc non. Commodo odio aenean sed adipiscing diam donec. Risus commodo viverra maecenas accumsan lacus."));
locations.push(new MyLocation("What to do in Paris", "France", "Paris", "../assets/img/travel-paris.jpg", new Date(2019, 12, 5), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Arcu ac tortor dignissim convallis aenean et tortor at risus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Enim neque volutpat ac tincidunt. Pellentesque habitant morbi tristique senectus et netus. Turpis in eu mi bibendum neque. Lacus sed viverra tellus in hac habitasse. Vitae congue eu consequat ac felis donec. A scelerisque purus semper eget duis at tellus. Et magnis dis parturient montes nascetur. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt lobortis feugiat vivamus at. Elit duis tristique sollicitudin nibh sit. Ipsum suspendisse ultrices gravida dictum. Lectus mauris ultrices eros in cursus turpis massa tincidunt."));
locations.push(new MyLocation("Top COVID-19 destinations", "", "", "../assets/img/blog-covid.jpg", new Date(2018, 8, 12), "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Sit amet commodo nulla facilisi nullam vehicula ipsum. Bibendum neque egestas congue quisque. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Eget gravida cum sociis natoque penatibus et magnis. Iaculis eu non diam phasellus vestibulum lorem. Nunc eget lorem dolor sed. Ultricies lacus sed turpis tincidunt id. Nibh venenatis cras sed felis eget. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Vestibulum rhoncus est pellentesque elit ullamcorper. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Nulla malesuada pellentesque elit eget gravida cum sociis. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Nulla facilisi cras fermentum odio eu feugiat. Amet cursus sit amet dictum."));
locations.push(new MyLocation("Best museums in Vienna", "Austria", "Vienna", "../assets/img/blog-vienna-museum.jpg", new Date(2019, 3, 4), "Sed adipiscing diam donec adipiscing tristique risus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.", "Vitae tortor condimentum lacinia quis vel eros donec ac odio. A scelerisque purus semper eget duis. Tempor orci dapibus ultrices in. Mauris pellentesque pulvinar pellentesque habitant. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Egestas purus viverra accumsan in. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet. Nam aliquam sem et tortor consequat id porta nibh. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Sed odio morbi quis commodo odio. Morbi tristique senectus et netus et malesuada fames. Sit amet mauris commodo quis imperdiet."));
locations.push(new MyLocation("Travel survival tips", "", "", "../assets/img/blog-travel-survival.jpg", new Date(2017, 7, 24), "Libero nunc consequat interdum varius sit amet mattis. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Massa eget egestas purus viverra accumsan in nisl nisi.", "Euismod quis viverra nibh cras. Placerat duis ultricies lacus sed turpis tincidunt. Magna fringilla urna porttitor rhoncus. Sed turpis tincidunt id aliquet risus feugiat in ante. Nec feugiat nisl pretium fusce id velit ut tortor. Est ante in nibh mauris cursus mattis molestie a iaculis. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Habitant morbi tristique senectus et netus et malesuada. Tortor pretium viverra suspendisse potenti nullam. In iaculis nunc sed augue lacus viverra vitae congue eu. Feugiat in ante metus dictum at tempor commodo. Mus mauris vitae ultricies leo integer malesuada nunc vel. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Risus commodo viverra maecenas accumsan lacus vel facilisis. Neque egestas congue quisque egestas diam in. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Aenean vel elit scelerisque mauris. Fusce id velit ut tortor pretium viverra."));
// locations.push(new MyLocation("Belvedere Palace", "Prinz Eugen-Straße 58", "Vienna", "../assets/img/loc-belvedere.jpg", new Date(2016, 4, 11)));
// locations.push(new MyLocation("Hunderwasser House", "Kegelgasse 36-38", "Vienna", "../assets/img/loc-hundertw.jpg", new Date(2015, 9, 1)));

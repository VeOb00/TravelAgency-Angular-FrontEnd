import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeHttpClient {
  get<T>(url: string): Observable<T> {
    if (url.startsWith('/api/destinations')) {
      return this.resolveDestinations<T>(url);
    }

    if (url.startsWith('/api/blog')) {
      return this.resolveBlogposts<T>(url);
    }
    return EMPTY;
  }

  private resolveDestinations<T>(url: string): Observable<T> {
    if (url == '/api/destinations') {
      return of((destinations as any) as T);
    }
    const destinationId: number = this.extractId(url);

    if (Number.isNaN(destinationId)) {
      return throwError('Could not parse destination id.');
    }
	
	const destination = destinations.find((e) => e.destinationId == destinationId);
	if (destination == null) {
	  return throwError(`Unable to find destination with id ${destinationId}`);
	}
    
	return of((destination as any) as T);
  }

  private extractId(url: string): number {
    return +url.substring(url.lastIndexOf('/') + 1);
  }

  private resolveBlogposts<T>(url: string): Observable<T> {
    if (url == '/api/blog') {
      return of((blogposts as any) as T);
    }
    const blogpost = blogposts[this.extractId(url)];
    if (blogpost == null) {
      return throwError('Unable to find post.');
    }
    return of((blogpost as any) as T);
  }
}

const blogposts = [
  {
    title: "Things you didn't know about Dubrovnik",
    place: 'Dubrovnik',
    country: 'Croatia',
    image: '../assets/img/travel-dubrovnik.jpg',
    createDate: '2019-11-23T23:00:00.000Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    descriptionLong:
      'Mattis enim ut tellus elementum sagittis vitae et. Praesent tristique magna sit amet purus gravida quis blandit. A lacus vestibulum sed arcu non odio euismod lacinia at. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Posuere urna nec tincidunt praesent semper. Risus at ultrices mi tempus imperdiet. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Cum sociis natoque penatibus et magnis dis parturient montes. Augue mauris augue neque gravida in fermentum et. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Eu non diam phasellus vestibulum lorem. Purus sit amet luctus venenatis lectus magna fringilla urna. Nunc non blandit massa enim nec dui nunc. Vitae turpis massa sed elementum. Elementum nibh tellus molestie nunc non. Commodo odio aenean sed adipiscing diam donec. Risus commodo viverra maecenas accumsan lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla turpis vitae dui consequat, eu bibendum mauris rutrum. Proin laoreet mauris in sagittis dapibus. Aliquam erat volutpat. Donec facilisis lectus id nisi pellentesque ultricies. Integer eget rutrum dui. Quisque venenatis nisi eget risus iaculis ultricies. Duis consequat eleifend odio, quis dignissim enim commodo nec. Fusce eu leo nec nisl aliquet aliquet. Nunc sed faucibus sem. Vestibulum in vestibulum orci, sed imperdiet enim. Nulla tincidunt felis eu dolor maximus, non vulputate arcu maximus. Phasellus pellentesque tincidunt nisi mattis interdum. Suspendisse ut blandit libero. Morbi quis lectus mollis lectus venenatis dapibus et quis nisl. Praesent accumsan ex orci, at pretium eros ornare at. Suspendisse felis nisi, sodales quis justo sed, tempor fringilla sem. Nulla at fringilla nisl. Quisque feugiat eleifend felis in convallis. Mauris ut nisl magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce non dui id quam aliquet dictum at et purus. Vivamus pulvinar rutrum purus, quis feugiat turpis scelerisque scelerisque. Nunc porta risus ac molestie sollicitudin. Donec non dolor non neque scelerisque mollis. Vivamus consectetur, tortor sed interdum sollicitudin, arcu metus eleifend est, ac elementum leo sem quis est. Quisque finibus congue massa id blandit. Ut in maximus urna. Nulla aliquet nisl rhoncus vestibulum faucibus. Aenean fringilla, diam sed iaculis suscipit, ipsum sapien fringilla turpis, sit amet scelerisque odio velit id leo. Sed sit amet varius tortor. Etiam sit amet eleifend lorem. Duis vitae lacus vitae arcu molestie tincidunt. Suspendisse sed sem sed libero egestas sodales ut sed enim. Suspendisse viverra vitae ante vel faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla turpis vitae dui consequat, eu bibendum mauris rutrum. Proin laoreet mauris in sagittis dapibus. Aliquam erat volutpat. Donec facilisis lectus id nisi pellentesque ultricies. Integer eget rutrum dui. Quisque venenatis nisi eget risus iaculis ultricies. Duis consequat eleifend odio, quis dignissim enim commodo nec. Fusce eu leo nec nisl aliquet aliquet. Nunc sed faucibus sem. Vestibulum in vestibulum orci, sed imperdiet enim. Nulla tincidunt felis eu dolor maximus, non vulputate arcu maximus. Phasellus pellentesque tincidunt nisi mattis interdum. Suspendisse ut blandit libero. Morbi quis lectus mollis lectus venenatis dapibus et quis nisl. Praesent accumsan ex orci, at pretium eros ornare at. Suspendisse felis nisi, sodales quis justo sed, tempor fringilla sem. Nulla at fringilla nisl. Quisque feugiat eleifend felis in convallis. Mauris ut nisl magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce non dui id quam aliquet dictum at et purus. Vivamus pulvinar rutrum purus, quis feugiat turpis scelerisque scelerisque. Nunc porta risus ac molestie sollicitudin. Donec non dolor non neque scelerisque mollis. Vivamus consectetur, tortor sed interdum sollicitudin, arcu metus eleifend est, ac elementum leo sem quis est. Quisque finibus congue massa id blandit. Ut in maximus urna. Nulla aliquet nisl rhoncus vestibulum faucibus. Aenean fringilla, diam sed iaculis suscipit, ipsum sapien fringilla turpis, sit amet scelerisque odio velit id leo. Sed sit amet varius tortor. Etiam sit amet eleifend lorem. Duis vitae lacus vitae arcu molestie tincidunt. Suspendisse sed sem sed libero egestas sodales ut sed enim. Suspendisse viverra vitae ante vel faucibus.',
    image1: '../../assets/img/travel-dubrovnik (1).jpg',
    image2: '../../assets/img/travel-dubrovnik (2).jpg',
    image3: '../../assets/img/travel-dubrovnik (3).jpg',
    image4: '../../assets/img/travel-dubrovnik (4).jpg',
  },
  {
    title: 'What to do in Paris',
    place: 'Paris',
    country: 'France',
    image: '../assets/img/travel-paris.jpg',
    createDate: '2020-01-04T23:00:00.000Z',
    date: 'Sun, 5 January 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    descriptionLong:
      'Pellentesque interdum egestas enim non iaculis. Nulla facilisi. Integer quis leo mollis, sollicitudin odio eu, suscipit lacus. Fusce posuere nibh sit amet neque maximus tempor. Cras sollicitudin sed ex ut bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus turpis blandit ligula elementum, ac fermentum odio auctor. Pellentesque hendrerit in metus vel vulputate. Nullam finibus, mauris vitae maximus facilisis, massa arcu ultrices orci, et varius lacus nisl a nulla. Donec et ultrices velit, eget lobortis nulla. Suspendisse justo augue, finibus in elementum id, sagittis rutrum purus. Donec varius interdum tellus sit amet gravida. Cras sit amet blandit felis. In quis eros ut sapien vehicula tempor eget in tellus. Nullam at convallis quam, eu finibus turpis. Aliquam fringilla turpis sit amet congue ornare. Etiam a sapien eu enim fringilla tincidunt nec sit amet nisl. Morbi luctus aliquam laoreet. Etiam quis ex massa. Donec eleifend viverra suscipit. Integer facilisis, neque eu suscipit pretium, magna sem vestibulum magna, vel eleifend ex libero nec sem. Sed vitae orci velit. Cras pretium justo vel augue finibus blandit. Aenean nunc lorem, vestibulum sed vulputate sed, tempus sit amet dui. In elementum ipsum ut elit fringilla, ut aliquam est ornare. Fusce nunc est, porta id mi id, interdum sodales ipsum. Pellentesque blandit commodo odio id faucibus. Etiam id rutrum tortor, sit amet dapibus augue. Arcu ac tortor dignissim convallis aenean et tortor at risus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Enim neque volutpat ac tincidunt. Pellentesque habitant morbi tristique senectus et netus. Turpis in eu mi bibendum neque. Lacus sed viverra tellus in hac habitasse. Vitae congue eu consequat ac felis donec. A scelerisque purus semper eget duis at tellus. Et magnis dis parturient montes nascetur. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt lobortis feugiat vivamus at. Elit duis tristique sollicitudin nibh sit. Ipsum suspendisse ultrices gravida dictum. Lectus mauris ultrices eros in cursus turpis massa tincidunt.',
    image1: '../../assets/img/travel-paris (1).jpg',
    image2: '../../assets/img/travel-paris (2).jpg',
    image3: '../../assets/img/travel-paris (3).jpg',
  },
  {
    title: 'Top COVID-19 destinations',
    place: '',
    country: '',
    image: '../assets/img/blog-covid.jpg',
    createDate: '2018-09-11T22:00:00.000Z',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    descriptionLong:
      'Quisque rutrum nunc quis urna pulvinar, vitae molestie tellus tempus. Vivamus varius venenatis vehicula. Duis finibus nec neque sed egestas. Nulla quis magna sed tortor efficitur tempus laoreet non nisl. Praesent vitae massa dolor. Aenean sit amet quam velit. Proin tempor justo vel justo dapibus feugiat. Suspendisse potenti. Donec consequat massa eros, ut commodo enim molestie vitae. Nulla condimentum pulvinar convallis. Morbi mattis, tortor in dignissim consectetur, nibh ante tempor nisi, quis convallis tortor tortor eu dolor. Praesent semper, mi a feugiat vestibulum, est libero interdum dui, quis dapibus ipsum ipsum et orci. Nunc suscipit, ante non hendrerit laoreet, arcu lectus efficitur ante, egestas lacinia purus ipsum fermentum est. Sed sollicitudin tellus vitae ipsum lobortis, et placerat nisl rhoncus. Quisque rutrum nunc quis urna pulvinar, vitae molestie tellus tempus. Vivamus varius venenatis vehicula. Duis finibus nec neque sed egestas. Nulla quis magna sed tortor efficitur tempus laoreet non nisl. Praesent vitae massa dolor. Aenean sit amet quam velit. Proin tempor justo vel justo dapibus feugiat. Suspendisse potenti. Donec consequat massa eros, ut commodo enim molestie vitae. Nulla condimentum pulvinar convallis. Morbi mattis, tortor in dignissim consectetur, nibh ante tempor nisi, quis convallis tortor tortor eu dolor. Praesent semper, mi a feugiat vestibulum, est libero interdum dui, quis dapibus ipsum ipsum et orci. Nunc suscipit, ante non hendrerit laoreet, arcu lectus efficitur ante, egestas lacinia purus ipsum fermentum est. Sed sollicitudin tellus vitae ipsum lobortis, et placerat nisl rhoncus. Sit amet commodo nulla facilisi nullam vehicula ipsum. Bibendum neque egestas congue quisque. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Eget gravida cum sociis natoque penatibus et magnis. Iaculis eu non diam phasellus vestibulum lorem. Nunc eget lorem dolor sed. Ultricies lacus sed turpis tincidunt id. Nibh venenatis cras sed felis eget. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Vestibulum rhoncus est pellentesque elit ullamcorper. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Nulla malesuada pellentesque elit eget gravida cum sociis. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Nulla facilisi cras fermentum odio eu feugiat. Amet cursus sit amet dictum.',
    image1: '../../assets/img/travel-thailand (1).jpg',
    image2: '../../assets/img/travel-dubrovnik (2).jpg',
    image3: '../../assets/img/travel-greece-kreta (3).jpg',
    image4: '../../assets/img/travel-malta (2).jpg',
  },
  {
    title: 'Best museums in Vienna',
    place: 'Vienna',
    country: 'Austria',
    image:
      'https://cdn.pixabay.com/photo/2016/05/26/06/32/museum-1416573_960_720.jpg',
    createDate: '2019-04-03T22:00:00.000Z',
    description:
      'Sed adipiscing diam donec adipiscing tristique risus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.',
    descriptionLong:
      'Aliquam erat volutpat. Sed vitae nibh metus. Donec quis facilisis nisi, ac luctus quam. Suspendisse nec congue nulla, eget consectetur odio. Pellentesque sagittis, enim ut tempus efficitur, dui augue vehicula augue, sed placerat odio lectus sed metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu ligula, tempor ut enim a, tristique laoreet urna. Duis placerat leo a orci consectetur eleifend. Etiam eu fermentum massa. Curabitur luctus elementum mi, a volutpat tortor facilisis eu. Cras leo nibh, tincidunt vel varius a, finibus eget libero. Vitae tortor condimentum lacinia quis vel eros donec ac odio. A scelerisque purus semper eget duis. Tempor orci dapibus ultrices in. Mauris pellentesque pulvinar pellentesque habitant. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Egestas purus viverra accumsan in. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet. Nam aliquam sem et tortor consequat id porta nibh. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Sed odio morbi quis commodo odio. Morbi tristique senectus et netus et malesuada fames. Sit amet mauris commodo quis imperdiet.',
    image1:
      'https://cdn.pixabay.com/photo/2019/08/16/05/43/vienna-4409455_960_720.jpg',
    image2:
      'https://cdn.pixabay.com/photo/2019/07/16/15/59/natural-history-museum-of-vienna-4342177_960_720.jpg',
  },
  {
    title: 'Travel survival tips',
    place: '',
    country: '',
    image: '../assets/img/blog-travel-survival.jpg',
    createDate: '2017-08-23T22:00:00.000Z',
    description:
      'Libero nunc consequat interdum varius sit amet mattis. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Massa eget egestas purus viverra accumsan in nisl nisi.',
    descriptionLong:
      'Sed tincidunt dolor risus, a fermentum urna rutrum sed. Nam varius dictum efficitur. Aenean tempor nisi dapibus orci iaculis eleifend. Mauris a felis erat. Phasellus sollicitudin nisi at sagittis ullamcorper. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat eget odio a lobortis. Vestibulum bibendum sapien tempus, ornare justo eget, dapibus justo. Integer convallis blandit orci. Morbi gravida enim et odio euismod, id varius ipsum consequat. In vitae orci varius, finibus justo consequat, ullamcorper arcu. Nulla non velit auctor, aliquam felis in, eleifend nisl. Mauris rutrum fringilla quam, efficitur vestibulum nisl sagittis non. Cras volutpat felis diam, sed mollis lectus posuere imperdiet. Morbi urna dui, convallis consectetur accumsan vitae, viverra eu enim. Pellentesque interdum egestas enim non iaculis. Nulla facilisi. Integer quis leo mollis, sollicitudin odio eu, suscipit lacus. Fusce posuere nibh sit amet neque maximus tempor. Cras sollicitudin sed ex ut bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus turpis blandit ligula elementum, ac fermentum odio auctor. Pellentesque hendrerit in metus vel vulputate. Nullam finibus, mauris vitae maximus facilisis, massa arcu ultrices orci, et varius lacus nisl a nulla. Donec et ultrices velit, eget lobortis nulla. Suspendisse justo augue, finibus in elementum id, sagittis rutrum purus. Donec varius interdum tellus sit amet gravida. Cras sit amet blandit felis. In quis eros ut sapien vehicula tempor eget in tellus. Euismod quis viverra nibh cras. Placerat duis ultricies lacus sed turpis tincidunt. Magna fringilla urna porttitor rhoncus. Sed turpis tincidunt id aliquet risus feugiat in ante. Nec feugiat nisl pretium fusce id velit ut tortor. Est ante in nibh mauris cursus mattis molestie a iaculis. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Habitant morbi tristique senectus et netus et malesuada. Tortor pretium viverra suspendisse potenti nullam. In iaculis nunc sed augue lacus viverra vitae congue eu. Feugiat in ante metus dictum at tempor commodo. Mus mauris vitae ultricies leo integer malesuada nunc vel. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Risus commodo viverra maecenas accumsan lacus vel facilisis. Neque egestas congue quisque egestas diam in. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Aenean vel elit scelerisque mauris. Fusce id velit ut tortor pretium viverra.',
  },
];

const destinations = [
  {
    destinationId: 1,
    destinationPlace: 'Kreta, Sunstar Hotel',
    destinationCountry: 'Greece',
    continent: 'Europe',
    description: 'All inclusive',
    startDate: '2021-08-17T08:00:00.000Z',
    duration: 14,
    price: 768,
    currency: 'EUR',
    image: '../../assets/img/travel-greece-kreta.jpg',
    descriptionLong:
      'Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.',
    image1: '../../assets/img/travel-greece-kreta (1).jpg',
    image2: '../../assets/img/travel-greece-kreta (2).jpg',
    image3: '../../assets/img/travel-greece-kreta (3).jpg',
    image4: '../../assets/img/travel-greece-kreta (4).jpg',
  },
  {
    destinationId: 2,
    destinationPlace: 'Rwai, Palm Beach Resort',
    destinationCountry: 'Thailand',
    continent: 'Asia',
    description: 'Breakfast, transport included',
    startDate: '2021-09-01T05:00:00.000Z',
    duration: 10,
    price: 800,
    currency: 'EUR',
    image: '../../assets/img/travel-thailand.jpg',
    descriptionLong:
      'Duis at tellus at urna condimentum mattis pellentesque. Purus sit amet volutpat consequat mauris nunc congue nisi. Mi proin sed libero enim sed faucibus turpis. Morbi tempus iaculis urna id. Amet risus nullam eget felis eget. Tempus iaculis urna id volutpat lacus laoreet. Lobortis mattis aliquam faucibus purus in. Quam vulputate dignissim suspendisse in. Faucibus et molestie ac feugiat sed. Orci sagittis eu volutpat odio. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Dolor magna eget est lorem ipsum. Platea dictumst quisque sagittis purus.',
    image1: '../../assets/img/travel-thailand (1).jpg',
    image2: '../../assets/img/travel-thailand (2).jpg',
    image3: '../../assets/img/travel-thailand (3).jpg',
    image4: '../../assets/img/travel-thailand (4).jpg',
  },
  {
    destinationId: 3,
    destinationPlace: 'Paris',
    destinationCountry: 'France',
    continent: 'Europe',
    description: 'Breakfast, transport included',
    startDate: '2021-07-08T09:00:00.000Z',
    duration: 3,
    price: 199,
    currency: 'EUR',
    image: '../../assets/img/travel-paris.jpg',
    descriptionLong:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa ultricies mi quis. Sed cras ornare arcu dui vivamus arcu. Arcu dui vivamus arcu felis. Odio pellentesque diam volutpat commodo. Lacus vestibulum sed arcu non odio euismod. In hac habitasse platea dictumst quisque sagittis. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Dui sapien eget mi proin sed libero enim. Elit duis tristique sollicitudin nibh sit. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Interdum varius sit amet mattis. Mauris pharetra et ultrices neque ornare. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Fermentum odio eu feugiat pretium nibh ipsum.',
    image1: '../../assets/img/travel-paris (1).jpg',
    image2: '../../assets/img/travel-paris (2).jpg',
    image3: '../../assets/img/travel-paris (3).jpg',
  },
  {
    destinationId: 4,
    destinationPlace: 'Dubrovnik',
    destinationCountry: 'Croatia',
    continent: 'Europe',
    description: 'All inclusive',
    startDate: '2021-09-01T06:00:00.000Z',
    duration: 3,
    price: 499,
    currency: 'EUR',
    image: '../../assets/img/travel-dubrovnik.jpg',
    descriptionLong:
      'Mattis enim ut tellus elementum sagittis vitae et. Praesent tristique magna sit amet purus gravida quis blandit. A lacus vestibulum sed arcu non odio euismod lacinia at. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Posuere urna nec tincidunt praesent semper. Risus at ultrices mi tempus imperdiet. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Cum sociis natoque penatibus et magnis dis parturient montes. Augue mauris augue neque gravida in fermentum et. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Eu non diam phasellus vestibulum lorem. Purus sit amet luctus venenatis lectus magna fringilla urna. Nunc non blandit massa enim nec dui nunc. Vitae turpis massa sed elementum. Elementum nibh tellus molestie nunc non. Commodo odio aenean sed adipiscing diam donec. Risus commodo viverra maecenas accumsan lacus.',
    image1: '../../assets/img/travel-dubrovnik (1).jpg',
    image2: '../../assets/img/travel-dubrovnik (2).jpg',
    image3: '../../assets/img/travel-dubrovnik (3).jpg',
    image4: '../../assets/img/travel-dubrovnik (4).jpg',
  },
  {
    destinationId: 5,
    destinationPlace: 'Istanbul',
    destinationCountry: 'Turkey',
    continent: 'Asia',
    description: 'All inclusive',
    startDate: '2021-04-19T10:00:00.000Z',
    duration: 7,
    price: 455,
    currency: 'EUR',
    image: '../../assets/img/travel-istanbul.jpg',
    descriptionLong:
      'Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.',
    image1: '../../assets/img/travel-istanbul (1).jpg',
    image2: '../../assets/img/travel-istanbul (2).jpg',
  },
  {
    destinationId: 6,
    destinationPlace: 'Malta Sliema',
    destinationCountry: 'Malta',
    continent: 'Europe',
    description: 'transportation not included',
    startDate: '2021-11-18T13:00:00.000Z',
    duration: 7,
    price: 780,
    currency: 'EUR',
    image: '../../assets/img/travel-malta.jpg',
    descriptionLong:
      'Nibh tellus molestie nunc non blandit massa enim nec. Enim praesent elementum facilisis leo. Ipsum dolor sit amet consectetur adipiscing. Nam libero justo laoreet sit. Fermentum et sollicitudin ac orci phasellus. Nullam non nisi est sit amet facilisis magna. Eget gravida cum sociis natoque penatibus et magnis dis. At varius vel pharetra vel turpis. Convallis convallis tellus id interdum velit laoreet id. Vitae auctor eu augue ut. Vitae tempus quam pellentesque nec nam aliquam sem et. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.',
    image1: '../../assets/img/travel-malta (1).jpg',
    image2: '../../assets/img/travel-malta (2).jpg',
    image3: '../../assets/img/travel-malta (3).jpg',
    image4: '../../assets/img/travel-malta (4).jpg',
  },
  {
    destinationId: 7,
    destinationPlace: 'Linz',
    destinationCountry: 'Austria',
    continent: 'Europe',
    description: 'transportation not included',
    startDate: '2021-08-04T09:00:00.000Z',
    duration: 1,
    price: 199,
    currency: 'EUR',
    image: '../../assets/img/travel-linz.jpg',
    descriptionLong:
      'Quam nulla porttitor massa id neque aliquam vestibulum. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Consequat semper viverra nam libero justo laoreet sit. Tristique senectus et netus et malesuada fames ac turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae turpis massa sed. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.',
  },
  {
    destinationId: 8,
    destinationPlace: 'Berlin',
    destinationCountry: 'Germany',
    continent: 'Europe',
    description: 'transport included',
    startDate: '2021-06-10T04:00:00.000Z',
    duration: 0,
    price: 180,
    currency: 'EUR',
    image: '../../assets/img/travel-berlin.jpg',
    descriptionLong:
      'Arcu ac tortor dignissim convallis aenean et tortor at risus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Enim neque volutpat ac tincidunt. Pellentesque habitant morbi tristique senectus et netus. Turpis in eu mi bibendum neque. Lacus sed viverra tellus in hac habitasse. Vitae congue eu consequat ac felis donec. A scelerisque purus semper eget duis at tellus. Et magnis dis parturient montes nascetur. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt lobortis feugiat vivamus at. Elit duis tristique sollicitudin nibh sit. Ipsum suspendisse ultrices gravida dictum. Lectus mauris ultrices eros in cursus turpis massa tincidunt.',
    image1: '../../assets/img/travel-berlin (1).jpg',
    image2: '../../assets/img/travel-berlin (2).jpg',
    image3: '../../assets/img/travel-berlin (3).jpg',
    image4: '../../assets/img/travel-berlin (4).jpg',
  },
  {
    destinationId: 9,
    destinationPlace: 'Gran Canaria',
    destinationCountry: 'Spain',
    continent: 'Africa',
    description: 'all inclusive',
    startDate: '2022-01-05T18:00:00.000Z',
    duration: 3,
    price: 366,
    currency: 'EUR',
    image:
      'https://cdn.pixabay.com/photo/2019/07/24/11/59/canary-4360002_960_720.jpg',
    descriptionLong:
      'Arcu ac tortor dignissim convallis aenean et tortor at risus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Enim neque volutpat ac tincidunt. Pellentesque habitant morbi tristique senectus et netus. Turpis in eu mi bibendum neque. Lacus sed viverra tellus in hac habitasse. Vitae congue eu consequat ac felis donec. A scelerisque purus semper eget duis at tellus. Et magnis dis parturient montes nascetur. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt lobortis feugiat vivamus at. Elit duis tristique sollicitudin nibh sit. Ipsum suspendisse ultrices gravida dictum. Lectus mauris ultrices eros in cursus turpis massa tincidunt.',
    image1:
      'https://cdn.pixabay.com/photo/2017/04/27/14/57/gran-canaria-2265694_960_720.jpg',
    image2:
      'https://cdn.pixabay.com/photo/2016/09/21/12/50/gran-canaria-1684745_960_720.jpg',
    image3:
      'https://cdn.pixabay.com/photo/2020/04/20/18/14/surf-5069328_960_720.jpg',
    image4:
      'https://cdn.pixabay.com/photo/2016/09/11/16/48/bikini-1661772_960_720.jpg',
  },
  {
    destinationId: 10,
    destinationPlace: 'New York',
    destinationCountry: 'USA',
    continent: 'America',
    description: 'transport included',
    startDate: '2021-04-21T10:00:00.000Z',
    duration: 3,
    price: 670,
    currency: 'EUR',
    image:
      'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_960_720.jpg',
    descriptionLong:
      'Arcu ac tortor dignissim convallis aenean et tortor at risus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Enim neque volutpat ac tincidunt. Pellentesque habitant morbi tristique senectus et netus. Turpis in eu mi bibendum neque. Lacus sed viverra tellus in hac habitasse. Vitae congue eu consequat ac felis donec. A scelerisque purus semper eget duis at tellus. Et magnis dis parturient montes nascetur. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt lobortis feugiat vivamus at. Elit duis tristique sollicitudin nibh sit. Ipsum suspendisse ultrices gravida dictum. Lectus mauris ultrices eros in cursus turpis massa tincidunt.',
    image1:
      'https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg',
    image2:
      'https://cdn.pixabay.com/photo/2014/07/01/12/35/taxi-381233_960_720.jpg',
    image3:
      'https://cdn.pixabay.com/photo/2015/06/08/15/06/new-york-city-801867_960_720.jpg',
  },
];

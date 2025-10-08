export interface Country {
  id: number;
  name: string;
  isoCode: string;
  continent: string;
  difficulty: 'easy' | 'medium' | 'hard'; // For adaptive selection
  flagUrl: string;
  description: string; // Fun fact for detail views
}

export const countries: Country[] = [
  { id: 1, name: "United States", isoCode: "us", continent: "North America", difficulty: "easy", flagUrl: "https://flagcdn.com/256x192/us.png", description: "Known for its stars and stripes, symbolizing the 50 states." },
  { id: 2, name: "Canada", isoCode: "ca", continent: "North America", difficulty: "easy", flagUrl: "https://flagcdn.com/256x192/ca.png", description: "The maple leaf represents the country's natural beauty and unity." },
  { id: 3, name: "United Kingdom", isoCode: "gb", continent: "Europe", difficulty: "easy", flagUrl: "https://flagcdn.com/256x192/gb.png", description: "The Union Jack combines flags of England, Scotland, and Ireland." },
  { id: 4, name: "France", isoCode: "fr", continent: "Europe", difficulty: "easy", flagUrl: "https://flagcdn.com/256x192/fr.png", description: "The tricolor blue, white, and red stands for liberty, equality, fraternity." },
  { id: 5, name: "Germany", isoCode: "de", continent: "Europe", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/de.png", description: "Black, red, and gold colors from the 19th-century revolutions." },
  { id: 6, name: "Italy", isoCode: "it", continent: "Europe", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/it.png", description: "Green for plains, white for mountains, red for blood of heroes." },
  { id: 7, name: "Spain", isoCode: "es", continent: "Europe", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/es.png", description: "Red and yellow with the coat of arms representing Spanish history." },
  { id: 8, name: "Brazil", isoCode: "br", continent: "South America", difficulty: "easy", flagUrl: "https://flagcdn.com/256x192/br.png", description: "Green for forests, yellow for gold, blue globe for the sky." },
  { id: 9, name: "Australia", isoCode: "au", continent: "Oceania", difficulty: "easy", flagUrl: "https://flagcdn.com/256x192/au.png", description: "Union Jack for British heritage, Southern Cross for location." },
  { id: 10, name: "Japan", isoCode: "jp", continent: "Asia", difficulty: "easy", flagUrl: "https://flagcdn.com/256x192/jp.png", description: "The red circle is the sun, from which Japan gets its name 'Land of the Rising Sun'." },
  { id: 11, name: "China", isoCode: "cn", continent: "Asia", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/cn.png", description: "Red for revolution, five stars for unity under communism." },
  { id: 12, name: "India", isoCode: "in", continent: "Asia", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/in.png", description: "Saffron for courage, white for truth, green for faith; chakra for progress." },
  { id: 13, name: "South Africa", isoCode: "za", continent: "Africa", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/za.png", description: "Rainbow nation colors symbolizing unity after apartheid." },
  { id: 14, name: "Nigeria", isoCode: "ng", continent: "Africa", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/ng.png", description: "Green for agriculture, white for unity and peace." },
  { id: 15, name: "Egypt", isoCode: "eg", continent: "Africa", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/eg.png", description: "Red, white, black for the 1952 revolution; eagle from Saladin." },
  { id: 16, name: "Mexico", isoCode: "mx", continent: "North America", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/mx.png", description: "Green for hope, white for purity, red for blood; eagle on cactus." },
  { id: 17, name: "Argentina", isoCode: "ar", continent: "South America", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/ar.png", description: "Light blue for skies, white for snow; sun of May for independence." },
  { id: 18, name: "Sweden", isoCode: "se", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/se.png", description: "Blue and yellow from the coat of arms, symbolizing Nordic heritage." },
  { id: 19, name: "Norway", isoCode: "no", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/no.png", description: "Red, white, blue cross for Christianity and Nordic Council." },
  { id: 20, name: "Finland", isoCode: "fi", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/fi.png", description: "Blue cross on white for lakes and snow." },
  { id: 21, name: "Greece", isoCode: "gr", continent: "Europe", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/gr.png", description: "Blue and white stripes for the sea and islands; cross for Orthodox faith." },
  { id: 22, name: "Turkey", isoCode: "tr", continent: "Asia", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/tr.png", description: "Red with white crescent and star, Islamic symbols." },
  { id: 23, name: "Russia", isoCode: "ru", continent: "Europe", difficulty: "easy", flagUrl: "https://flagcdn.com/256x192/ru.png", description: "White for snow, blue for sky, red for strength." },
  { id: 24, name: "Poland", isoCode: "pl", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/pl.png", description: "White and red from the 13th century, eagle on coat of arms." },
  { id: 25, name: "Netherlands", isoCode: "nl", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/nl.png", description: "Red, white, blue horizontal tricolor." },
  { id: 26, name: "Belgium", isoCode: "be", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/be.png", description: "Black, yellow, red vertical tricolor from the coat of arms." },
  { id: 27, name: "Switzerland", isoCode: "ch", continent: "Europe", difficulty: "medium", flagUrl: "https://flagcdn.com/256x192/ch.png", description: "White cross on red, symbolizing the Swiss Confederacy." },
  { id: 28, name: "Austria", isoCode: "at", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/at.png", description: "Red-white-red from the Babenberg dynasty." },
  { id: 29, name: "Denmark", isoCode: "dk", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/dk.png", description: "Red with white Nordic cross, the world's oldest flag." },
  { id: 30, name: "Iceland", isoCode: "is", continent: "Europe", difficulty: "hard", flagUrl: "https://flagcdn.com/256x192/is.png", description: "Blue for ocean, white for snow, red for volcanoes; cross for Christianity." },
];
'use strict';

const dateFacts = {
  '0101': {
    videoKey: 'VZTSYcFTNSA',
    title: 'BlackFacts Minute: January 1',
    description:
      'Fact-Of-The-Day for: January 01 - On this day in 1997 Kofi Annan becomes the Secretary General of the United Nations.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/VZTSYcFTNSA/maxresdefault.jpg',
    index: 0,
  },
  '0102': {
    videoKey: '5wfrJKOntTE',
    title: 'BlackFacts Minute: January 2',
    description:
      'BlackFacts.com Fact Of The Day for January 2, On this Day in 1965, Martin Luther King Jr. drove a registration vote.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #mlk #martinlutherkingjr #martinlutherkingday #drmartinlutherkingjr',
    thumbnail: 'https://i.ytimg.com/vi/5wfrJKOntTE/maxresdefault.jpg',
    index: 1,
  },
  '0103': {
    videoKey: 'JZoTW9xAki4',
    title: 'BlackFacts Minute: January 3',
    description:
      'Fact-Of-The-Day for January 03 - On this day in 1867 Thaddeus Stevens spoke in from of the House of Representatives in support of full voting rights for African Americans.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/JZoTW9xAki4/maxresdefault.jpg',
    index: 2,
  },
  '0104': {
    videoKey: 'l700ZI1yZlw',
    title: 'BlackFacts Minute: January 4',
    description:
      'Fact-Of-The-Day for: January 4th - On this day in 1937, Opera Signer Grace Bumbry was born in St. Louis Missouri.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/l700ZI1yZlw/maxresdefault.jpg',
    index: 3,
  },
  '0105': {
    videoKey: 'Y6R-h5hatbI',
    title: 'BlackFacts.com celebrates Founders Day (Jan 5th) for Kappa Alpha Psi Fraternity.',
    description:
      'Fact-Of-The-Day for: January 05 - On this day in 1911, Kappa Alpha Psi Fraternity, Incorporated was founded at Indiana University.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #kappaalphapsi #divinenine',
    thumbnail: 'https://i.ytimg.com/vi/Y6R-h5hatbI/maxresdefault.jpg',
    index: 4,
  },
  '0106': {
    videoKey: 'MqpAalEylP4',
    title: 'BlackFacts Minute: January 6',
    description:
      'Fact-Of-The-Day for: January 6 - On this day in 1867 The Peabody Fund was established to provide resources for newly freed slaves.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #emancipation',
    thumbnail: 'https://i.ytimg.com/vi/MqpAalEylP4/maxresdefault.jpg',
    index: 5,
  },
  '0107': {
    videoKey: 'uu-8R8Fkfx0',
    title: 'BlackFacts Minute: January 7',
    description:
      'BlackFacts.com Fact Of The Day for January 7, On this Day in 1927, The Harlem Globetrotters played their first game.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #harlemglobetrotters',
    thumbnail: 'https://i.ytimg.com/vi/uu-8R8Fkfx0/maxresdefault.jpg',
    index: 6,
  },
  '0108': {
    videoKey: 'FkVSfdZnICI',
    title: 'BlackFacts Minute: January 8',
    description:
      'Fact-Of-The-Day for: January 8th - on this day in 1937, Vocalist Dame Shirley Veronica Bassey was born in Cardiff Welsh.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/FkVSfdZnICI/maxresdefault.jpg',
    index: 7,
  },
  '0109': {
    videoKey: 'aziiu_lDWMc',
    title: 'BlackFacts.com celebrates Founders Day (Jan 9th) for Phi Beta Sigma Fraternity.',
    description:
      'Fact-Of-The-Day for: January 09 - On this day in 1914, Phi Beta Sigma Fraternity, Incorporated was founded in Howard University.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #phibetasigma #divinenine',
    thumbnail: 'https://i.ytimg.com/vi/aziiu_lDWMc/maxresdefault.jpg',
    index: 8,
  },
  '0110': {
    videoKey: 'mzOUC9_TNVc',
    title: 'BlackFacts Minute: January 10',
    description:
      'BlackFacts.com Fact Of The Day for January 10, On this Day in 1988, Walter Payton retired from the National Football League.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #nfl #walterpayton #nflhalloffame',
    thumbnail: 'https://i.ytimg.com/vi/mzOUC9_TNVc/maxresdefault.jpg',
    index: 9,
  },
  '0111': {
    videoKey: 'DVh-YW9lvV0',
    title: 'BlackFacts Minute: January 11',
    description:
      'Fact-Of-The-Day for: January 11th - On this day in 1985, Reuben V. Anderson was appointed to the State Supreme Court of Mississippi - becoming the first black judge on that tribunal.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/DVh-YW9lvV0/maxresdefault.jpg',
    index: 10,
  },
  '0112': {
    videoKey: 'BzHpsJWUlPw',
    title: 'BlackFacts Minute: January 12',
    description:
      'Fact-Of-The-Day for: January 12 - On this day in 1965, Lorraine Hansberry, Playwright and author of  A Raisin in the Sun  passed away.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/BzHpsJWUlPw/maxresdefault.jpg',
    index: 11,
  },
  '0113': {
    videoKey: '7IXOJg2dR4c',
    title: 'BlackFacts.com celebrates Founders Day (Jan 13th) for Delta Sigma Theta Sorority.',
    description:
      'Fact-Of-The-Day for: January 13 - On this day in 1913, Delta Sigma Theta Sorority, Incorporated was founded at Howard University.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #deltasigmatheta #divinenine',
    thumbnail: 'https://i.ytimg.com/vi/7IXOJg2dR4c/maxresdefault.jpg',
    index: 12,
  },
  '0114': {
    videoKey: '146GaPEK1lU',
    title: 'BlackFacts Minute: January 14',
    description:
      'Fact-Of-The-Day for: January 14 - On this day in 1972, the first Episode of Sanford and Son aired on NBC as the first Black Sitcom to be nationally televised.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #sanfordandson',
    thumbnail: 'https://i.ytimg.com/vi/146GaPEK1lU/maxresdefault.jpg',
    index: 13,
  },
  '0115': {
    videoKey: 'rxlADUV2Gus',
    title: 'BlackFacts.com celebrates Founders Day (Jan 15th) for Alpha Kappa Alpha Sorority',
    description:
      'Fact-Of-The-Day for: January 15th - On this day in 1908, Alpha Kappa Alpha Sorority, Incorporated was founded at Howard University.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #alphakappaalpha #divinenine',
    thumbnail: 'https://i.ytimg.com/vi/rxlADUV2Gus/maxresdefault.jpg',
    index: 14,
  },
  '0116': {
    videoKey: 'fwbkiClADzw',
    title: 'BlackFacts.com celebrates Founders Day (Jan 16th) for Zeta Phi Beta Sorority.',
    description:
      'Fact-Of-The-Day for: January 16 - On this day in 1920, Zeta Phi Beta Sorority, Incorporated was founded at Howard University.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #zeta #zetaphibeta',
    thumbnail: 'https://i.ytimg.com/vi/fwbkiClADzw/maxresdefault.jpg',
    index: 15,
  },
  '0117': {
    videoKey: '1kt3sy2Cnew',
    title: 'BlackFacts Minute: January 17',
    description:
      'Fact-Of-The-Day for: January 17th - On this day in 1942, Boxer, Heavyweight Champion, Civil Rights Activist, Muhammad Ali was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #muhammadali',
    thumbnail: 'https://i.ytimg.com/vi/1kt3sy2Cnew/maxresdefault.jpg',
    index: 16,
  },
  '0118': {
    videoKey: 'wswjh5ZL5Sw',
    title: 'BlackFacts Minute: January 18',
    description:
      "Fact-Of-The-Day for: January 18th - On this day in 1958, Willie O'Ree the first black player in the NHL was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm",
    thumbnail: 'https://i.ytimg.com/vi/wswjh5ZL5Sw/maxresdefault.jpg',
    index: 17,
  },
  '0119': {
    videoKey: '1jMBTMY-teM',
    title: 'BlackFacts Minute: January 19',
    description:
      'Fact-Of-The-Day for: January 19th - On this day in 1856, Bridget  Biddy  Mason was born.  She successfully filed suite against her masters to secure her freedom.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #slavery #emancipation',
    thumbnail: 'https://i.ytimg.com/vi/1jMBTMY-teM/maxresdefault.jpg',
    index: 18,
  },
  '0120': {
    videoKey: '1My-UkCqFvU',
    title: 'BlackFacts Minute: January 20',
    description:
      'Fact-Of-The-Day for: January 20 - On this day in 2009, Barack Obama was sworn in as the 44th president of the United States.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #obama #barackobama',
    thumbnail: 'https://i.ytimg.com/vi/1My-UkCqFvU/maxresdefault.jpg',
    index: 19,
  },
  '0121': {
    videoKey: 'Dm0oBHOPluE',
    title: 'BlackFacts Minute: January 21',
    description:
      'Fact-Of-The-Day for: January 21 - On this day in 1773, Phillis Wheatley, the first black author of published poetry was freed.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/Dm0oBHOPluE/maxresdefault.jpg',
    index: 20,
  },
  '0122': {
    videoKey: 'wIrQC-f2EVc',
    title: 'BlackFacts Minute: January 22',
    description:
      'Fact-Of-The-Day for: January 22 - On this day in 1920, William Warfield, Actor and Baritone Singer of  Old Man River  was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/wIrQC-f2EVc/maxresdefault.jpg',
    index: 21,
  },
  '0123': {
    videoKey: '7bU3rOOskTk',
    title: 'BlackFacts Minute: January 23',
    description:
      'Fact-Of-The-Day for: January 23 - On this day in 1847 - The Republic of Liberia was founded as a haven for Freed American Slaves.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #liberia_first',
    thumbnail: 'https://i.ytimg.com/vi/7bU3rOOskTk/maxresdefault.jpg',
    index: 22,
  },
  '0124': {
    videoKey: 'XLirPfJhVY8',
    title: 'BlackFacts Minute: January 24',
    description:
      'Fact-Of-The-Day for: January 24 - On this day in 1874, Arturo Schomburg, historian, writer, activist was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #harlem',
    thumbnail: 'https://i.ytimg.com/vi/XLirPfJhVY8/maxresdefault.jpg',
    index: 23,
  },
  '0125': {
    videoKey: '7nSQSuuOudU',
    title: 'BlackFacts Minute: January 25',
    description:
      'BlackFacts.com Fact Of The Day for January 25, On this Day in 1890, The National Afro-American League was founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/7nSQSuuOudU/maxresdefault.jpg',
    index: 24,
  },
  '0126': {
    videoKey: 'T-RrGMwczgE',
    title: 'BlackFacts Minute: January 26',
    description:
      'Fact-Of-The-Day for: January 26 - On this day in 1887 The Ethiopians defeated the Italians in the Italo-Abyssinian War.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #africa',
    thumbnail: 'https://i.ytimg.com/vi/T-RrGMwczgE/maxresdefault.jpg',
    index: 25,
  },
  '0127': {
    videoKey: 'w1Vh5mJTlHc',
    title: 'BlackFacts Minute: January 27',
    description:
      'BlackFacts.com Fact Of The Day for January 27, On this Day in 1961, Singer Leontyne Price makes her debut at the Metropolitan Opera House.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/w1Vh5mJTlHc/maxresdefault.jpg',
    index: 26,
  },
  '0128': {
    videoKey: '3XMxs-NpiNw',
    title: 'BlackFacts Minute: January 28',
    description:
      'Fact-Of-The-Day for: January 28 - On this day in 1997, 4 police officers in South Africa confessed to the murder of Steve Biko.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/3XMxs-NpiNw/maxresdefault.jpg',
    index: 27,
  },
  '0129': {
    videoKey: 'vEUYHdML4rY',
    title: 'BlackFacts Minute: January 29',
    description:
      'Fact-Of-The-Day for: January 29 - On this day in 1954, Oprah Winfrey was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #oprah',
    thumbnail: 'https://i.ytimg.com/vi/vEUYHdML4rY/maxresdefault.jpg',
    index: 28,
  },
  '0130': {
    videoKey: 'T3Rp_-cvTj0',
    title: 'BlackFacts Minute: January 30',
    description:
      'Fact-Of-The-Day for: January 30 - On this day in 1965, Leroy  Satchel  Paige was name All-Time Outstanding Player by the National Baseball Congress.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #mlb',
    thumbnail: 'https://i.ytimg.com/vi/T3Rp_-cvTj0/maxresdefault.jpg',
    index: 29,
  },
  '0131': {
    videoKey: '9xjUfchh7pc',
    title: 'BlackFacts. Minute: January 31',
    description:
      'Fact-Of-The-Day for: January 31 - On this day in 1919, Jackie Robinson (Jack Roosevelt Washington), baseball hall of famer, activist, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #mlb #jackierobinson',
    thumbnail: 'https://i.ytimg.com/vi/9xjUfchh7pc/maxresdefault.jpg',
    index: 30,
  },
  '0201': {
    videoKey: 'XzI3huqpCi4',
    title: 'BlackFacts Minute: February 1',
    description:
      'BlackFacts.com Fact Of The Day for February 1st, On this Day in 1901, Poet, Activist and Writer Langston Hughes was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/XzI3huqpCi4/maxresdefault.jpg',
    index: 31,
  },
  '0202': {
    videoKey: '15Xakp_hqWQ',
    title: 'BlackFacts Minute: February 2',
    description:
      'BlackFacts.com Fact Of The Day for February 2, On this Day in 1862, District of Columbia abolishes slavery.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #slavery',
    thumbnail: 'https://i.ytimg.com/vi/15Xakp_hqWQ/maxresdefault.jpg',
    index: 32,
  },
  '0203': {
    videoKey: 'RcX1GaqMXZQ',
    title: 'BlackFacts Minute: February 3',
    description:
      'BlackFacts.com Fact Of The Day for February 3, On this Day in 1956, First black student attended the University of Alabama.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #alabama',
    thumbnail: 'https://i.ytimg.com/vi/RcX1GaqMXZQ/maxresdefault.jpg',
    index: 33,
  },
  '0204': {
    videoKey: 'wbsYSzTBKuQ',
    title: 'BlackFacts Minute: February 4',
    description:
      'BlackFacts.com Fact Of The Day for February 4, On this Day in 1913, Rosa Parks was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #rosaparks',
    thumbnail: 'https://i.ytimg.com/vi/wbsYSzTBKuQ/maxresdefault.jpg',
    index: 34,
  },
  '0205': {
    videoKey: 'dSVLf7gkAso',
    title: 'BlackFacts Minute: February 5',
    description:
      'BlackFacts.com Fact Of The Day for February 5, On this Day in 1934, Hank Aaron was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #mlb #hankaaron',
    thumbnail: 'https://i.ytimg.com/vi/dSVLf7gkAso/maxresdefault.jpg',
    index: 35,
  },
  '0206': {
    videoKey: 'cptzJceha2w',
    title: 'BlackFacts Minute: February 6',
    description:
      'BlackFacts.com Fact Of The Day for February 6, On this Day in 1867, Robert Tanner Jackson becomes first African American to receive a degree in dentistry.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/cptzJceha2w/maxresdefault.jpg',
    index: 36,
  },
  '0207': {
    videoKey: 'y5ZY0n3o9Nk',
    title: 'BlackFacts Minute: February 7',
    description:
      'BlackFacts.com Fact Of The Day for February 7, On this Day in 1926, Carter G. Woodson created the Negro History Week.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/y5ZY0n3o9Nk/maxresdefault.jpg',
    index: 37,
  },
  '0208': {
    videoKey: 'YmMC-9YgIW0',
    title: 'BlackFacts Minute: February 8',
    description:
      'BlackFacts.com Fact Of The Day for February 8, On this Day in 1944, Harry S. McAlpin became the first black journalist to admitted to a White House press conference.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/YmMC-9YgIW0/maxresdefault.jpg',
    index: 38,
  },
  '0209': {
    videoKey: 'IGi1gHpu79g',
    title: 'BlackFacts Minute: February 9',
    description:
      'BlackFacts.com Fact Of The Day for February 9, On this Day in 1995, Astronaut Bernard Harris became the first African American to perform a spacewalk.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/IGi1gHpu79g/maxresdefault.jpg',
    index: 39,
  },
  '0210': {
    videoKey: '2lnYSWiXBQ0',
    title: 'BlackFacts Minute: February 10',
    description:
      'BlackFacts.com Fact Of The Day for February 10, On this Day in 1989, Ron Brown elected Chairman of the Democratic Party.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/2lnYSWiXBQ0/maxresdefault.jpg',
    index: 40,
  },
  '0211': {
    videoKey: 'N00-AcZugEc',
    title: 'BlackFacts Minute: February 11',
    description:
      'BlackFacts.com Fact Of The Day for February 11, On this Day in 1958, Ruth C. Taylor became the first Black American flight attendant in the US.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/N00-AcZugEc/maxresdefault.jpg',
    index: 41,
  },
  '0212': {
    videoKey: 'YWVuU5B1QVI',
    title: 'BlackFacts Minute: February 12',
    description:
      'BlackFacts.com Fact Of The Day for February 12, On this Day in 1909, NAACP was founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #naacp',
    thumbnail: 'https://i.ytimg.com/vi/YWVuU5B1QVI/maxresdefault.jpg',
    index: 42,
  },
  '0213': {
    videoKey: 'SZ8NWMsMWcY',
    title: 'BlackFacts Minute: February 13',
    description:
      'BlackFacts.com Fact Of The Day for February 13, On this Day in 1965, Malcolm X  Speech at Ford Auditorium .  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/SZ8NWMsMWcY/maxresdefault.jpg',
    index: 43,
  },
  '0214': {
    videoKey: '0rGUeuzd5aI',
    title: 'BlackFacts Minute: February 14',
    description:
      'BlackFacts.com Fact Of The Day for February 14, On this Day in 1818, Possible birthday of Frederick Douglass.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #frederickdouglass',
    thumbnail: 'https://i.ytimg.com/vi/0rGUeuzd5aI/maxresdefault.jpg',
    index: 44,
  },
  '0215': {
    videoKey: '0JgMJqVIemE',
    title: 'BlackFacts Minute: February 15',
    description:
      'BlackFacts.com Fact Of The Day for February 15, On this Day in 1972, Henry Lewis becomes the first African American to lead a symphony orchestra in the U.S.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/0JgMJqVIemE/maxresdefault.jpg',
    index: 45,
  },
  '0216': {
    videoKey: 't9KbKzPnAec',
    title: 'BlackFacts Minute: February 16',
    description:
      'BlackFacts.com Fact Of The Day for February 16, On this Day in 1951, New York City Council passed bill prohibiting racial discrimination in city-assisted housing developments.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/t9KbKzPnAec/maxresdefault.jpg',
    index: 46,
  },
  '0217': {
    videoKey: 'NMqRjiapNv4',
    title: 'BlackFacts Minute: February 17',
    description:
      'BlackFacts.com Fact Of The Day for February 17, On this Day in 1870, Congress passed resolution readmitting Mississippi on condition that it would never change its constitution to disenfranchise blacks.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/NMqRjiapNv4/maxresdefault.jpg',
    index: 47,
  },
  '0218': {
    videoKey: '98ugR5gYxH0',
    title: 'BlackFacts Minute: February 18',
    description:
      'BlackFacts.com Fact Of The Day for February 18, On this Day in 1870, First Formal Protest Against Slavery (1688).  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/98ugR5gYxH0/maxresdefault.jpg',
    index: 48,
  },
  '0219': {
    videoKey: 'lrj3NfQKwQA',
    title: 'BlackFacts Minute: February 19',
    description:
      'BlackFacts.com Fact Of The Day for February 19, On this Day in 1942, The Tuskegee Airmen were initiated into the armed forces.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #tuskegee',
    thumbnail: 'https://i.ytimg.com/vi/lrj3NfQKwQA/maxresdefault.jpg',
    index: 49,
  },
  '0220': {
    videoKey: '451kA90ehvA',
    title: 'BlackFacts Minute: February 20',
    description:
      'BlackFacts.com Fact Of The Day for February 20, On this Day in 1992, John Singleton was nominated for Best Director at the Oscars.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/451kA90ehvA/maxresdefault.jpg',
    index: 50,
  },
  '0221': {
    videoKey: 'Nrnrnpj4gNg',
    title: 'BlackFacts Minute: February 21',
    description:
      'BlackFacts.com Fact Of The Day for February 21, On this Day in 1965, Malcolm X was assassinated.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #malcolmx',
    thumbnail: 'https://i.ytimg.com/vi/Nrnrnpj4gNg/maxresdefault.jpg',
    index: 51,
  },
  '0222': {
    videoKey: 'GvD9vQAYEJ4',
    title: 'BlackFacts Minute: February 22',
    description:
      'BlackFacts.com Fact Of The Day for February 22, On this Day in 1989, DJ Jazzy Jeff & The Fresh Prince won the first Grammy for Rap Music.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #willsmith #freshprince',
    thumbnail: 'https://i.ytimg.com/vi/GvD9vQAYEJ4/maxresdefault.jpg',
    index: 52,
  },
  '0223': {
    videoKey: '3jU1lviDnTM',
    title: 'BlackFacts Minute: February 23',
    description:
      'BlackFacts.com Fact Of The Day for February 23, On this Day in 1868, W.E.B. DuBois was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #webdubois',
    thumbnail: 'https://i.ytimg.com/vi/3jU1lviDnTM/maxresdefault.jpg',
    index: 53,
  },
  '0224': {
    videoKey: 'j78knUttXvU',
    title: 'BlackFacts Minute: February 24',
    description:
      'BlackFacts.com Fact Of The Day for February 24, On this Day in 1864, Rebecca Lee Crumpler became the first black woman to receive an M.D. Degree at the New England Female Medical College.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/j78knUttXvU/maxresdefault.jpg',
    index: 54,
  },
  '0225': {
    videoKey: '5kEiBJweu00',
    title: 'BlackFacts Minute: February 25',
    description:
      "BlackFacts.com Fact Of The Day for February 25, On this Day in 1837, Cheyney University of Pennsylvania was founded and became the nation's first Historically Black College and University (HBCU).  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #hbcu",
    thumbnail: 'https://i.ytimg.com/vi/5kEiBJweu00/maxresdefault.jpg',
    index: 55,
  },
  '0226': {
    videoKey: '1ZcFqMKA7fc',
    title: 'BlackFacts Minute: February 26',
    description:
      'BlackFacts.com Fact Of The Day for February 26, On this Day in 1869, Fifteenth Amendment guaranteeing the right to vote sent to the states for ratification.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/1ZcFqMKA7fc/maxresdefault.jpg',
    index: 56,
  },
  '0227': {
    videoKey: 'PzTGR-nWTk0',
    title: 'BlackFacts Minute: February 27',
    description:
      'BlackFacts.com Fact Of The Day for February 27, On this Day in 1869, John Willis Menard became the first African American to address the chamber.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/PzTGR-nWTk0/maxresdefault.jpg',
    index: 57,
  },
  '0228': {
    videoKey: 'bp9Vv5R2Xg0',
    title: 'BlackFacts Minute: February 28',
    description:
      'BlackFacts.com Fact Of The Day for February 28, On this Day in 1989, Philip Emeagwali receives the Gordon Bell Prize, considered the Nobel Prize of computing.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/bp9Vv5R2Xg0/maxresdefault.jpg',
    index: 58,
  },
  '0301': {
    videoKey: 'hmpjy5tfEIM',
    title: 'BlackFacts Minute: March 1',
    description:
      'Black Fact Of The Day for: March 01 - On This Day in 1913, writer, Ralph Ellison was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/hmpjy5tfEIM/maxresdefault.jpg',
    index: 59,
  },
  '0302': {
    videoKey: 'HJQQACBwFN4',
    title: 'BlackFacts Minute: March 2',
    description:
      'Black Fact Of The Day for: March 02 - On This Day in 1867, Howard University was Founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #hbcu #howarduniversity',
    thumbnail: 'https://i.ytimg.com/vi/HJQQACBwFN4/maxresdefault.jpg',
    index: 60,
  },
  '0303': {
    videoKey: 'Y5LELoFnC-M',
    title: 'BlackFacts Minute: March 3',
    description:
      'Black Fact Of The Day for: March 03 - On This Day in 1821, Thomas L. Jennings became the first black man to receive a patent.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/Y5LELoFnC-M/maxresdefault.jpg',
    index: 61,
  },
  '0304': {
    videoKey: 'ivslRJelGdc',
    title: 'BlackFacts Minute: March 4',
    description:
      'Black Fact Of The Day for: March 4th - On This Day in 1867, Ida Gray, the first African-American female dentist in the USA, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/ivslRJelGdc/maxresdefault.jpg',
    index: 62,
  },
  '0305': {
    videoKey: 'SkVClfCk6Zw',
    title: 'BlackFacts Minute: March 5',
    description:
      'Black Fact Of The Day for: March 05 - On this day in 1897, the American Negro Academy was Founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/SkVClfCk6Zw/maxresdefault.jpg',
    index: 63,
  },
  '0306': {
    videoKey: 'l1nIBsibSHY',
    title: 'BlackFacts Minute: March 6',
    description:
      "Black Fact Of The Day for: March 06 - On this day in 1972, Shaquille O'Neal was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #shaq #shaquilleoneal",
    thumbnail: 'https://i.ytimg.com/vi/l1nIBsibSHY/maxresdefault.jpg',
    index: 64,
  },
  '0307': {
    videoKey: 'FtyVJj3AAS0',
    title: 'BlackFacts Minute: March 7',
    description:
      'Black Fact Of The Day for: March 07 - On this day in 1985,  We are the World  was released.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/FtyVJj3AAS0/maxresdefault.jpg',
    index: 65,
  },
  '0308': {
    videoKey: 'VeyMpF7UsOw',
    title: 'BlackFacts Minute: March 8',
    description:
      'Black Fact Of The Day for: March 08 - On this day in 1921, Marjorie Edwina P. King was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/VeyMpF7UsOw/maxresdefault.jpg',
    index: 66,
  },
  '0309': {
    videoKey: 'gwoQQ8h9PfI',
    title: 'BlackFacts Minute: March 9',
    description:
      'Black Fact Of The Day for: March 09 - On This Day in 1931 Walter Francis White was named the NAACP Executive Secretary.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #naacp',
    thumbnail: 'https://i.ytimg.com/vi/gwoQQ8h9PfI/maxresdefault.jpg',
    index: 67,
  },
  '0310': {
    videoKey: '5IrLaqCNzhs',
    title: 'BlackFacts Minute:  March 10',
    description:
      'Black Fact Of The Day for: March 10 - On This Day in 1972, rapper, Timberland was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/5IrLaqCNzhs/maxresdefault.jpg',
    index: 68,
  },
  '0311': {
    videoKey: '5ziKA7VqmUo',
    title: 'BlackFacts Minute: March 11',
    description:
      'BlackFacts.com Fact Of The Day for March 11, On this Day in 1911, Birthday of Edward R. Dudley.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/5ziKA7VqmUo/maxresdefault.jpg',
    index: 69,
  },
  '0312': {
    videoKey: 'Bvl-jR6V87s',
    title: 'BlackFacts Minute: March 12',
    description:
      'Black Fact Of The Day for: March 12 - On this day in 1932, politician, Andrew Young was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/Bvl-jR6V87s/maxresdefault.jpg',
    index: 70,
  },
  '0313': {
    videoKey: 'togVHKMcmgA',
    title: 'BlackFacts Minute: March 13',
    description:
      'Black Fact Of The Day for: March 13 - On This Day in 1932, Atlanta Daily World was published as the first Black Daily Newspaper.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/togVHKMcmgA/maxresdefault.jpg',
    index: 71,
  },
  '0314': {
    videoKey: 'eIfXYzi8c0A',
    title: 'BlackFacts Minute: March 14',
    description:
      'BlackFacts.com Fact Of The Day for March 14, On this Day in 1977, Fannie Lou Hamer passed away.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/eIfXYzi8c0A/maxresdefault.jpg',
    index: 72,
  },
  '0315': {
    videoKey: 'x86LQPF_Fh8',
    title: 'BlackFacts Minute: March 15',
    description:
      'Black Fact Of The Day for: March 15 - On This Day in 1959, writer, Ben Okri was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/x86LQPF_Fh8/maxresdefault.jpg',
    index: 73,
  },
  '0316': {
    videoKey: '8EIE5_2csBA',
    title: 'BlackFacts Minute: March 16',
    description:
      'BlackFacts.com Fact Of The Day for March 16, On this Day in 1846, Birthday of Rebecca Cole.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/8EIE5_2csBA/maxresdefault.jpg',
    index: 74,
  },
  '0317': {
    videoKey: 'rgosH0u5Ybw',
    title: 'BlackFacts Minute: March 17',
    description:
      'BlackFacts.com Fact Of The Day for March 17, On this Day in 1999, Maurice Ashley became the first African American to earn an International Grandmaster chess title.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/rgosH0u5Ybw/maxresdefault.jpg',
    index: 75,
  },
  '0318': {
    videoKey: 'euCNszexX_8',
    title: 'BlackFacts Minute: March 18',
    description:
      'BlackFacts.com Fact Of The Day for March 18, On this Day in 1963, Birthday of Vanessa Williams.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/euCNszexX_8/maxresdefault.jpg',
    index: 76,
  },
  '0319': {
    videoKey: '1kMYUEsf8rU',
    title: 'BlackFacts Minute: March 19',
    description:
      'BlackFacts.com Fact Of The Day for March 19, On this Day in 1883, Jan E. Matzeliger patented his revolutionary shoe machine.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/1kMYUEsf8rU/maxresdefault.jpg',
    index: 77,
  },
  '0320': {
    videoKey: '-6hatSkwFpU',
    title: 'BlackFacts Minute: March 20',
    description:
      'BlackFacts.com Fact Of The Day for March 20, On this Day in 1915, Birthday of Rosetta Tharpe.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/-6hatSkwFpU/maxresdefault.jpg',
    index: 78,
  },
  '0321': {
    videoKey: 'WE3GCLe1krs',
    title: 'BlackFacts Minute: March 21',
    description:
      'Black Fact Of The Day for: March 21 - On This Day in 1947, actor and singer, James Baskett becomes the first African American to win an Academy Award.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/WE3GCLe1krs/maxresdefault.jpg',
    index: 79,
  },
  '0322': {
    videoKey: 'RCVExkFd0TY',
    title: 'BlackFacts Minute: March 22',
    description:
      'BlackFacts.com Fact Of The Day for March 22, On this Day in 1873, Slavery was abolished in Puerto Rico.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #slavery #puertorico',
    thumbnail: 'https://i.ytimg.com/vi/RCVExkFd0TY/maxresdefault.jpg',
    index: 80,
  },
  '0323': {
    videoKey: '-1d2qCIhSig',
    title: 'BlackFacts Minute: March 23',
    description:
      'BlackFacts.com Fact Of The Day for March 23, On this Day in 1971, Walter Fauntroy became the first non-voting Congressional delegate from the District of Columbia since Reconstruction.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #dc #districtofcolumbia',
    thumbnail: 'https://i.ytimg.com/vi/-1d2qCIhSig/maxresdefault.jpg',
    index: 81,
  },
  '0324': {
    videoKey: '39tiqb0cF7A',
    title: 'BlackFacts Minute: March 24',
    description:
      'BlackFacts.com Fact Of The Day for March 24, On this Day in 2002, Halle Berry became the first African American woman to win an Oscar for Best Actress.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #oscars #halleberry',
    thumbnail: 'https://i.ytimg.com/vi/39tiqb0cF7A/maxresdefault.jpg',
    index: 82,
  },
  '0325': {
    videoKey: '18Ltp7UCHYs',
    title: 'BlackFacts Minute: March 25',
    description:
      'BlackFacts.com Fact Of The Day for March 25, On this Day in 1942, Birthday of Aretha Franklin.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #arethafranklin',
    thumbnail: 'https://i.ytimg.com/vi/18Ltp7UCHYs/maxresdefault.jpg',
    index: 83,
  },
  '0326': {
    videoKey: 'jrWmQTjsotw',
    title: 'BlackFacts Minute: March 26',
    description:
      'BlackFacts.com Fact Of The Day for March 26, On this Day in 1937, William H. Hastie became the first black federal judge.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/jrWmQTjsotw/maxresdefault.jpg',
    index: 84,
  },
  '0327': {
    videoKey: 'DUFWETgHkOo',
    title: 'BlackFacts Minute: March 27',
    description:
      'BlackFacts.com Fact Of The Day for March 27, On this Day in 1969, Black Academy of Arts and Letters was founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/DUFWETgHkOo/maxresdefault.jpg',
    index: 85,
  },
  '0328': {
    videoKey: 'LFrwBJwWzTw',
    title: 'BlackFacts Minute: March 28',
    description:
      'BlackFacts.com Fact Of The Day for March 28, On this Day in 1966, Bill Russell became the first African American to coach an NBA team.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #billrussell',
    thumbnail: 'https://i.ytimg.com/vi/LFrwBJwWzTw/maxresdefault.jpg',
    index: 86,
  },
  '0329': {
    videoKey: 'bgBhoZSK7VA',
    title: 'BlackFacts Minute: March 29',
    description:
      'BlackFacts.com Fact Of The Day for March 29, On this Day in 1918, Birthday of Pearl Bailey.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/bgBhoZSK7VA/maxresdefault.jpg',
    index: 87,
  },
  '0330': {
    videoKey: '8JeLk60_Pwg',
    title: 'BlackFacts Minute: March 30',
    description:
      'BlackFacts.com Fact Of The Day for March 30, On this Day in 1870, The 15th Amendment was ratified and gave blacks the right to vote.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #voting',
    thumbnail: 'https://i.ytimg.com/vi/8JeLk60_Pwg/maxresdefault.jpg',
    index: 88,
  },
  '0331': {
    videoKey: 'Ifr9abitrgg',
    title: 'BlackFacts Minute: March 31',
    description:
      'BlackFacts.com Fact Of The Day for March 31, On this Day in 1870, Toni Morrison wins the Pulitzer.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #tonimorrison #pulitzerprize #pulitzer',
    thumbnail: 'https://i.ytimg.com/vi/Ifr9abitrgg/maxresdefault.jpg',
    index: 89,
  },
  '0401': {
    videoKey: 'apRtuIwJT3c',
    title: 'BlackFacts Minute: April 1',
    description:
      'BlackFacts.com Fact Of The Day for April 1st, On this Day in 1966, First world festival of black arts was held.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/apRtuIwJT3c/maxresdefault.jpg',
    index: 90,
  },
  '0402': {
    videoKey: 'cQtJ29jcA1c',
    title: 'BlackFacts Minute: April 2',
    description:
      'BlackFacts.com Fact of the Day for April 02, On this day in 1939, Legendary Singer Marvin Gaye was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/cQtJ29jcA1c/maxresdefault.jpg',
    index: 91,
  },
  '0403': {
    videoKey: 'L-8vKt5_It0',
    title: 'BlackFacts Minute: April 3',
    description:
      'BlackFacts.com Fact of the Day for April 03, On This Day in 1950, Carter G. Woodson the  Father  of Black History Month, passed away.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/L-8vKt5_It0/maxresdefault.jpg',
    index: 92,
  },
  '0404': {
    videoKey: '1xicT4Y8lBo',
    title: 'BlackFacts Minute: April 4',
    description:
      'BlackFacts.com Fact of the Day for April 04, On This Day in 1968, Reverend Dr. Martin Luther King, Jr. was assassinated.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/1xicT4Y8lBo/maxresdefault.jpg',
    index: 93,
  },
  '0405': {
    videoKey: '5s6vqB7Y1SE',
    title: 'BlackFacts Minute: April 5',
    description:
      'BlackFact.com Fact of the Day for April 05, On This Day in 1973, Pharrell Williams was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/5s6vqB7Y1SE/maxresdefault.jpg',
    index: 94,
  },
  '0406': {
    videoKey: 'E61R1t1VfJY',
    title: 'BlackFacts Minute: April 6',
    description:
      'BlackFacts.com Fact of the Day for April 06, On this day in 1931, the Scottsboro Trials began.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/E61R1t1VfJY/maxresdefault.jpg',
    index: 95,
  },
  '0407': {
    videoKey: 'FOp7tDaiQso',
    title: 'BlackFacts Minute: April 7',
    description:
      'BlackFacts.com Fact of the Day for April 07, On This Day in 1915, Legendary singer Billie Holiday was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/FOp7tDaiQso/maxresdefault.jpg',
    index: 96,
  },
  '0408': {
    videoKey: 'J27leNRbYdA',
    title: 'BlackFacts Minute: April 8',
    description:
      "BlackFacts.com Fact of the Day for April 08, On this day in 1974, Hank Aaron broke Babe Ruth's legendary homerun record.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ",
    thumbnail: 'https://i.ytimg.com/vi/J27leNRbYdA/maxresdefault.jpg',
    index: 97,
  },
  '0409': {
    videoKey: 'l0F-v0NEwpY',
    title: 'BlackFacts Minute: April 9',
    description:
      'BlackFacts.com Fact of the Day for April 09, On this Day in 1950, Juanita Hall become the first African American to win the Tony Award for Best Supporting Actress.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/l0F-v0NEwpY/maxresdefault.jpg',
    index: 98,
  },
  '0410': {
    videoKey: 'lGiSPokSCCw',
    title: 'BlackFacts Minute: April 10',
    description:
      'BlackFacts.com Fact of the Day for April 10, On This Day in 1981, Preacher and Theologian, The first African American Dean of Chapel at a White University, Passed away.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/lGiSPokSCCw/maxresdefault.jpg',
    index: 99,
  },
  '0411': {
    videoKey: 'ZwFqKHhmYnE',
    title: 'BlackFacts Minute: April 11',
    description:
      'BlackFacts.com Fact Of The Day for April 11th, On This Day in 1899, the Chemist, Percy Julian was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/ZwFqKHhmYnE/maxresdefault.jpg',
    index: 100,
  },
  '0412': {
    videoKey: 'KA1eFRrNV1A',
    title: 'BlackFacts Minute: April 12',
    description:
      'BlackFacts.com Fact Of The Day for April 12th, On This Day in 1975, Josephine Baker passed away.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/KA1eFRrNV1A/maxresdefault.jpg',
    index: 101,
  },
  '0413': {
    videoKey: 'r1nivGyUVtU',
    title: 'BlackFacts Minute: April 13',
    description:
      'BlackFacts.com Fact Of The Day for April 13th, On This Day in 1873, The Colfax Massacre occurred.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/r1nivGyUVtU/maxresdefault.jpg',
    index: 102,
  },
  '0414': {
    videoKey: 'VFpty849hu8',
    title: 'BlackFacts Minute: April 14',
    description:
      'BlackFacts.com Fact Of The Day for April 14th, On This Day in 2002, Tiger Woods wins his third Masters Golf Tournament.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/VFpty849hu8/maxresdefault.jpg',
    index: 103,
  },
  '0415': {
    videoKey: 'HaV8xcicYqA',
    title: 'BlackFacts Minute: April 15',
    description:
      'BlackFacts.com Fact Of The Day for April 15th, On This Day in 1926, Norma Merrick Sklarek, the first licensed black female architect, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/HaV8xcicYqA/maxresdefault.jpg',
    index: 104,
  },
  '0416': {
    videoKey: 'bAMyg_V-iOo',
    title: 'BlackFacts Minute: April 16',
    description:
      'BlackFacts.com Fact Of The Day for April 16th, On This Day in 1957, Essex Hemphill, Poet, Editor and Performance Artist, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/bAMyg_V-iOo/maxresdefault.jpg',
    index: 105,
  },
  '0417': {
    videoKey: 'WFt9a1cQDow',
    title: 'BlackFacts Minute: April 17',
    description:
      'BlackFacts.com Fact Of The Day for April 17th, On This Day in 1990, Ralph Abernathy, Pastor, Civil Rights Leader and Close associate of Dr. Martin Luther King during the Civil Rights Movement, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/WFt9a1cQDow/maxresdefault.jpg',
    index: 106,
  },
  '0418': {
    videoKey: '3vfkZMk9VDg',
    title: 'BlackFacts Minute: April 18',
    description:
      'BlackFacts.com Fact of the Day for April 18th, On This Day in 1877, The American Nicodemus Town Company was Founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/3vfkZMk9VDg/maxresdefault.jpg',
    index: 107,
  },
  '0419': {
    videoKey: 'HttJgra5rXk',
    title: 'BlackFacts Minute: April 19',
    description:
      'BlackFacts.com Fact of the Day for April 19th, On this day in 1978, Max Robinson became the first African-American journalist to anchor the nightly news.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/HttJgra5rXk/maxresdefault.jpg',
    index: 108,
  },
  '0420': {
    videoKey: 'h-sOSNw-VRc',
    title: 'BlackFacts Minute: April 20',
    description:
      'BlackFacts.com Fact of the Day for April 20th, On this Day in 1971, the Supreme Court Upheld the use of busing to achieve racial desegregation in public schools.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/h-sOSNw-VRc/maxresdefault.jpg',
    index: 109,
  },
  '0421': {
    videoKey: 'nbPUTiETmSw',
    title: 'BlackFacts Minute: April 21st',
    description:
      'BlackFacts.com Fact Of The Day for April 21st, On This Day in 2016, Hall of Fame Musician and Artist, Prince passed away.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/nbPUTiETmSw/maxresdefault.jpg',
    index: 110,
  },
  '0422': {
    videoKey: 'W5TuRJlf_Zo',
    title: 'BlackFacts Minute: April 22nd',
    description:
      'BlackFacts.com Fact Of The Day for April 22nd, On This Day in 1978, Bob Marley kicked off his One Love Concert in Kingston, Jamaica as part of  Third World Woodstock .  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/W5TuRJlf_Zo/maxresdefault.jpg',
    index: 111,
  },
  '0423': {
    videoKey: 'eBAhoxxdMIE',
    title: 'BlackFacts Minute: April 23rd',
    description:
      'BlackFacts.com Fact Of The Day for April 23rd, On This Day in 1865, Inventor Granville T. Woods was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/eBAhoxxdMIE/maxresdefault.jpg',
    index: 112,
  },
  '0424': {
    videoKey: 'ckmOLB0elQU',
    title: 'BlackFacts Minute: April 24th',
    description:
      'BlackFacts.com Fact Of The Day for April 24th, On This Day in 1919, Mathematician David Blackwell was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/ckmOLB0elQU/maxresdefault.jpg',
    index: 113,
  },
  '0425': {
    videoKey: '5D3e922aXRo',
    title: 'BlackFacts Minute: April 25th',
    description:
      'BlackFacts.com Fact Of The Day for April 25th, On This Day in 1944, The United Negro College Fund was founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/5D3e922aXRo/maxresdefault.jpg',
    index: 114,
  },
  '0426': {
    videoKey: 'SuFJDrkTxzM',
    title: 'BlackFacts Minute: April 26th',
    description:
      'BlackFacts.com Fact Of The Day for April 26th, On This Day in 1886, Gertrude  Ma  Rainey was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/SuFJDrkTxzM/maxresdefault.jpg',
    index: 115,
  },
  '0427': {
    videoKey: 'YJfJQtL0E2A',
    title: 'BlackFacts Minute: April 27th',
    description:
      'BlackFacts.com Fact of the Day for April 27th, On This Day in 1927, Coretta Scott King was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/YJfJQtL0E2A/maxresdefault.jpg',
    index: 116,
  },
  '0428': {
    videoKey: 'YZN2OwBmdto',
    title: 'BlackFacts Minute: April 28th',
    description:
      'BlackFacts.com Fact Of The Day for April 28th, On This Day in 1971, Samuel Lee Gravely Jr. became the first Black Admiral in the US Navy.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/YZN2OwBmdto/maxresdefault.jpg',
    index: 117,
  },
  '0429': {
    videoKey: 'xKrM7j5CvH4',
    title: 'BlackFacts Minute: April 29th',
    description:
      'BlackFacts.com Fact Of The Day for April 29th, On This Day in 1899, Singer and Performer, Duke Ellington, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/xKrM7j5CvH4/maxresdefault.jpg',
    index: 118,
  },
  '0430': {
    videoKey: 'qr_fzRO8gKo',
    title: 'BlackFacts Minute: April 30th',
    description:
      'BlackFacts.com Fact Of The Day for April 30th, On This Day in 1960, Michelle Howard, the First African American Woman to Command a USA Navy Ship, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/qr_fzRO8gKo/maxresdefault.jpg',
    index: 119,
  },
  '0501': {
    videoKey: 'lCkrLDOK-P4',
    title: 'BlackFacts Minute: May 1st',
    description:
      'BlackFacts.com Fact Of The Day for May 1st, On This Day in 1950, Gwendolyn Brooks became the first African America Woman to receive a Pulitzer Prize.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/lCkrLDOK-P4/maxresdefault.jpg',
    index: 120,
  },
  '0502': {
    videoKey: '25lkct6S068',
    title: 'BlackFacts Minute: May 2nd',
    description:
      'BlackFacts.com Fact Of The Day for May 2nd, On This Day in 1920, the first game of the Negro National Baseball League was played.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/25lkct6S068/maxresdefault.jpg',
    index: 121,
  },
  '0503': {
    videoKey: 'BEJKWdO-cJ4',
    title: 'BlackFacts Minute: May 3rd',
    description:
      'BlackFacts.com Fact Of The Day for May 3rd, On This Day in 1921, Boxer, Sugar Ray Robinson was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/BEJKWdO-cJ4/maxresdefault.jpg',
    index: 122,
  },
  '0504': {
    videoKey: '8bHm_K723Yc',
    title: 'BlackFacts Minute: May 4th',
    description:
      'BlackFacts.com Fact Of The Day for May 4th, On This Day in 1975, Kimora Lee Simmons was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/8bHm_K723Yc/maxresdefault.jpg',
    index: 123,
  },
  '0505': {
    videoKey: 'ARW-bkI-XUA',
    title: 'BlackFacts Minute: May 5th',
    description:
      'BlackFacts.com Fact Of The Day for May 5th, On This Day in 1865, Adam Clayton Powell Sr. was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/ARW-bkI-XUA/maxresdefault.jpg',
    index: 124,
  },
  '0506': {
    videoKey: 'kRrQdINKMfM',
    title: 'BlackFacts Minute: May 6th',
    description:
      'BlackFacts.com Fact Of The Day for May 6th, On This Day in 1960, President Eisenhower signed the Civil Rights Act.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/kRrQdINKMfM/maxresdefault.jpg',
    index: 125,
  },
  '0507': {
    videoKey: 'YKim_jM6E1k',
    title: 'BlackFacts Minute: May 7th',
    description:
      'BlackFacts.com Fact Of The Day for May 7th, On This Day in 1878, J. R. Winters received a patent for the Fire Escape Ladder.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/YKim_jM6E1k/maxresdefault.jpg',
    index: 126,
  },
  '0508': {
    videoKey: 'SvN0FXCsFkM',
    title: 'BlackFacts Minute: May 8th',
    description:
      'BlackFacts.com Fact Of The Day for May 8th, On This Day in 1969, Miss USA, Carole Gist was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/SvN0FXCsFkM/maxresdefault.jpg',
    index: 127,
  },
  '0509': {
    videoKey: 'L7jXB04QimM',
    title: 'BlackFacts Minute: May 9th',
    description:
      'BlackFacts.com Fact Of The Day for May 9th, On This Day in 1960, Baseball Star, Tony Gwynn was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/L7jXB04QimM/maxresdefault.jpg',
    index: 128,
  },
  '0510': {
    videoKey: 'CsEkobXoGLc',
    title: 'BlackFacts Minute: May 10th',
    description:
      'BlackFacts.com Fact Of The Day for May 10th, On This Day in 1994, Nelson Mandela was sworn in as the first black President of South Africa.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/CsEkobXoGLc/maxresdefault.jpg',
    index: 129,
  },
  '0511': {
    videoKey: 'sODx-uEmAvY',
    title: 'BlackFacts Minute: May 11',
    description:
      'BlackFacts.com Fact Of The Day for May 11th, On This Day in 1895, William Grant Still was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/sODx-uEmAvY/maxresdefault.jpg',
    index: 130,
  },
  '0512': {
    videoKey: 'L1uW6frYf5U',
    title: 'BlackFacts Minute: May 12',
    description:
      'BlackFacts.com Fact Of The Day for May 12th, On This Day in 1959, Actor, Ving Rhames was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/L1uW6frYf5U/maxresdefault.jpg',
    index: 131,
  },
  '0513': {
    videoKey: 'R1x0EtfrO5E',
    title: 'BlackFacts Minute: May 13',
    description:
      'BlackFacts.com Fact Of The Day for May 13th, On This Day in 1950, Singer and Performer, Stevie Wonder, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/R1x0EtfrO5E/maxresdefault.jpg',
    index: 132,
  },
  '0514': {
    videoKey: '5MAWe5mYOBQ',
    title: 'BlackFacts Minute: May 14',
    description:
      'BlackFacts.com Fact Of The Day for May 14th, On This Day in 1913, Clara Stanton Jones, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/5MAWe5mYOBQ/maxresdefault.jpg',
    index: 133,
  },
  '0515': {
    videoKey: 'P5qOpchaaXQ',
    title: 'BlackFacts Minute: May 15',
    description:
      'BlackFacts.com Fact Of The Day for May 15th, On This Day in 1946, Opera Singer and Performer, Camilla Williams became the first Black Woman to Act in a Leading Role in a Major American Opera Company.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/P5qOpchaaXQ/maxresdefault.jpg',
    index: 134,
  },
  '0516': {
    videoKey: 'L2EKHlmTsBM',
    title: 'BlackFacts Minute: May 16',
    description:
      'BlackFacts.com Fact Of The Day for May 16th, On This Day in 1966, Singer and Performer, Janet Jackson, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/L2EKHlmTsBM/maxresdefault.jpg',
    index: 135,
  },
  '0517': {
    videoKey: 'ufMBlddP_vA',
    title: 'BlackFacts Minute: May 17',
    description:
      'BlackFacts.com Fact Of The Day for May 17th, On This Day in 1988, Patricia Bath patented an apparatus that removes cataracts.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/ufMBlddP_vA/maxresdefault.jpg',
    index: 136,
  },
  '0518': {
    videoKey: 'CssNrFcbbi4',
    title: 'BlackFacts Minute: May 18',
    description:
      "BlackFacts.com Fact Of The Day for May 18th, On This Day in 1893, Anna Julia Cooper delivered an address at the World's Congress of Representative Women.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ",
    thumbnail: 'https://i.ytimg.com/vi/CssNrFcbbi4/maxresdefault.jpg',
    index: 137,
  },
  '0519': {
    videoKey: 'HXGuNgqgDZg',
    title: 'BlackFacts Minute: May 19',
    description:
      'BlackFacts.com Fact Of The Day for May 19th, On This Day in 1925, Malcolm X was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/HXGuNgqgDZg/maxresdefault.jpg',
    index: 138,
  },
  '0520': {
    videoKey: 'lfCMZSEzg-Q',
    title: 'BlackFacts Minute: May 20',
    description:
      'BlackFacts.com Fact Of The Day for May 20, On this Day in 1865, Emancipation in the State of Florida was proclaimed.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/lfCMZSEzg-Q/maxresdefault.jpg',
    index: 139,
  },
  '0521': {
    videoKey: '5eHKlEJ8Jfg',
    title: 'BlackFacts Minute: May 21',
    description:
      'BlackFacts.com Fact Of The Day for May 21st, On This Day in 1975, Lowell Perry was confirmed as chairman of the Equal Opportunity Commission.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/5eHKlEJ8Jfg/maxresdefault.jpg',
    index: 140,
  },
  '0522': {
    videoKey: 'FdOi7jRFjDA',
    title: 'BlackFacts Minute: May 22',
    description:
      'BlackFacts.com Fact Of The Day for May 22nd, On This Day in 1959, Benjamin O. Davis Jr. became the first Black Brigadier General in the U.S. Air Force.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/FdOi7jRFjDA/maxresdefault.jpg',
    index: 141,
  },
  '0523': {
    videoKey: '8MtGFfEnE6A',
    title: 'BlackFacts Minute: May 23',
    description:
      'BlackFacts.com Fact Of The Day for May 23rd, On This Day in 1921, Shuffle Along, the 1st Black Hit Musical opened in New York City.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/8MtGFfEnE6A/maxresdefault.jpg',
    index: 142,
  },
  '0524': {
    videoKey: 'hQUn2jRqOPU',
    title: 'BlackFacts Minute: May 24',
    description:
      'BlackFacts.com Fact Of The Day for May 24th, On This Day in 1944, Legendary Singer, Pattie Labelle was born.',
    thumbnail: 'https://i.ytimg.com/vi/hQUn2jRqOPU/maxresdefault.jpg',
    index: 143,
  },
  '0525': {
    videoKey: 'XP4KqqPlII4',
    title: 'BlackFacts Minute: May 25',
    description:
      'BlackFacts.com Fact Of The Day for May 25th, On This Day in 1986, 30 Million people worldwide joined  Race Against Time  to raise money for the starvation crisis in Africa.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/XP4KqqPlII4/maxresdefault.jpg',
    index: 144,
  },
  '0526': {
    videoKey: 'E6-OOMJ13KU',
    title: 'BlackFacts Minute: May 26',
    description:
      'BlackFacts.com Fact Of The Day for May 26th, On This Day in 1926, Legendary Jazz Musician, Miles Davis was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/E6-OOMJ13KU/maxresdefault.jpg',
    index: 145,
  },
  '0527': {
    videoKey: 'iswZb2E-PBw',
    title: 'BlackFacts Minute: May 27',
    description:
      'BlackFacts.com Fact Of The Day for May 27th, On This Day in 1958, Congressional Gold Medal Recipient and member of the Little Rock Nine, Ernest Green graduates from Little Rock.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/iswZb2E-PBw/maxresdefault.jpg',
    index: 146,
  },
  '0528': {
    videoKey: 'fTKrZ5-rMng',
    title: 'BlackFacts Minute: May 28',
    description:
      'BlackFacts.com Fact Of The Day for May 28th, On This Day in 1944, Award Winning Singer, Gladys Knight was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/fTKrZ5-rMng/maxresdefault.jpg',
    index: 147,
  },
  '0529': {
    videoKey: 'mPym8bJAf_U',
    title: 'BlackFacts Minute: May 29',
    description:
      'BlackFacts.com Fact Of The Day for May 29th, On This Day in 1973, Thomas Bradley was elected the first African-American Mayor of Los Angeles.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/mPym8bJAf_U/maxresdefault.jpg',
    index: 148,
  },
  '0530': {
    videoKey: 'xjlhIbYYeWM',
    title: 'BlackFacts Minute: May 30',
    description:
      'BlackFacts.com Fact Of The Day for May 30th, On This Day in 1903, Artist and Poet, Countee Cullen was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/xjlhIbYYeWM/maxresdefault.jpg',
    index: 149,
  },
  '0531': {
    videoKey: 'hXRhgzOfffM',
    title: 'BlackFacts Minute: May 31',
    description:
      'BlackFacts.com Fact Of The Day for May 31st, On This Day in 1891, former Ambassador to Liberia,  Jesse Dwight Locker was born.',
    thumbnail: 'https://i.ytimg.com/vi/hXRhgzOfffM/maxresdefault.jpg',
    index: 150,
  },
  '0601': {
    videoKey: 'iZA5DHDZntM',
    title: 'BlackFacts Minute: June 1',
    description:
      'BlackFacts.com Fact Of The Day for June 1st, On This Day in 1966, The Lyndon Johnson White House held its Conference on Civil Rights.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/iZA5DHDZntM/maxresdefault.jpg',
    index: 151,
  },
  '0602': {
    videoKey: 'SSmVK8R9L-U',
    title: 'BlackFacts Minute: June 2',
    description:
      'BlackFacts.com Fact Of The Day for June 2nd, On This Day in 1875, James Augustine Healy became the first Black Roman Catholic Bishop in the USA.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/SSmVK8R9L-U/maxresdefault.jpg',
    index: 152,
  },
  '0603': {
    videoKey: 'm39kPpzB0CE',
    title: 'BlackFacts Minute: June 3',
    description:
      'BlackFacts.com Fact Of The Day for June 3rd, On This Day in 1904, Physician, Charles Drew was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/m39kPpzB0CE/maxresdefault.jpg',
    index: 153,
  },
  '0604': {
    videoKey: 'Rs-qmZSMYAE',
    title: 'BlackFacts Minute: June 4',
    description:
      'BlackFacts.com Fact Of The Day for June 4th, On This Day in 1972, Angela Davis was acquitted of Complicity by an all white jury.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Rs-qmZSMYAE/maxresdefault.jpg',
    index: 154,
  },
  '0605': {
    videoKey: 'Us2X-7mlkYE',
    title: 'BlackFacts Minute: June 5',
    description:
      'BlackFacts.com Fact Of The Day for June 5th, On This Day in 1940, The American Negro Theatre was formed.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Us2X-7mlkYE/maxresdefault.jpg',
    index: 155,
  },
  '0606': {
    videoKey: 'rwx0LCQyfqs',
    title: 'BlackFacts Minute: June 6',
    description:
      "BlackFacts.com Fact Of The Day for June 6th, On This Day in 1939, Marian Wright Edelman, Civil Rights Attorney who started The Children's Defense Fund in 1973, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ",
    thumbnail: 'https://i.ytimg.com/vi/rwx0LCQyfqs/maxresdefault.jpg',
    index: 156,
  },
  '0607': {
    videoKey: '_j-QXvjJHYI',
    title: 'BlackFacts Minute: June 7',
    description:
      'BlackFacts.com Fact Of The Day for June 7th, On This Day in 1943, America Poet and Writer, Nikki Giovanni was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/_j-QXvjJHYI/maxresdefault.jpg',
    index: 157,
  },
  '0608': {
    videoKey: 'vk4eKHL_B_c',
    title: 'BlackFacts Minute: June 8',
    description:
      'BlackFacts.com Fact Of The Day for June 8th, On This Day in 1968, James Earl Ray, suspected of Martin Luther King Assassination, was captured.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/vk4eKHL_B_c/maxresdefault.jpg',
    index: 158,
  },
  '0609': {
    videoKey: 'a-TVeSi0ciE',
    title: 'BlackFacts Minute: June 9',
    description:
      'BlackFacts.com Fact Of The Day for June 9th, On This Day in 1948, Oliver W. Hill became the 1st Black person elected to the City Council in Richmond, Virginia.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/a-TVeSi0ciE/maxresdefault.jpg',
    index: 159,
  },
  '0610': {
    videoKey: 'EVWFunzl38I',
    title: 'BlackFacts Minute: June 10',
    description:
      'BlackFacts.com Fact Of The Day for June 10th, On This Day in 1910, Blues Singer and Composer, Chester Arthur Burnett  The Howlin Man  was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/EVWFunzl38I/maxresdefault.jpg',
    index: 160,
  },
  '0611': {
    videoKey: 'TtJdP3IaiDE',
    title: 'BlackFacts Minute: June 11',
    description:
      'BlackFacts.com Fact Of The Day for June 11th, On This Day in 1963, President, John F.  Kennedy delivers the Report on Civil Rights.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/TtJdP3IaiDE/maxresdefault.jpg',
    index: 161,
  },
  '0612': {
    videoKey: 'R7J4_ctkwjA',
    title: 'BlackFacts Minute: June 12',
    description:
      'BlackFacts.com Fact Of The Day for June 12th, On This Day in 1991, Michael Jordan lead the Chicago Bulls to their first NBA Title.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/R7J4_ctkwjA/maxresdefault.jpg',
    index: 162,
  },
  '0613': {
    videoKey: 'eFQUkW0SFK8',
    title: 'BlackFacts Minute: June 13',
    description:
      'BlackFacts.com Fact Of The Day for June 13th, On This Day in 1967, Thurgood Marshall was named the First African American Supreme Court Justice.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/eFQUkW0SFK8/maxresdefault.jpg',
    index: 163,
  },
  '0614': {
    videoKey: '69z1llceroc',
    title: 'BlackFacts Minute: June 14',
    description:
      'BlackFacts.com Fact Of The Day for June 14th, On This Day in 1989, William H. Gray was elected Democratic WHIP of the House of Representatives.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/69z1llceroc/maxresdefault.jpg',
    index: 164,
  },
  '0615': {
    videoKey: 'BOc4QcHGBJQ',
    title: 'BlackFacts Minute: June 15',
    description:
      'BlackFacts.com Fact Of The Day for June 15th, On This Day in 1877, Henry Ossian Flipper became the first African American graduate from the U.S. Military Academy.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/BOc4QcHGBJQ/maxresdefault.jpg',
    index: 165,
  },
  '0616': {
    videoKey: 'I6Pe8NZGMco',
    title: 'BlackFacts Minute: June 16',
    description:
      'BlackFacts.com Fact Of The Day for June 16th, On This Day in 1970, Kenneth A. Gibson became the first African American Mayor of Newark, NJ.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/I6Pe8NZGMco/maxresdefault.jpg',
    index: 166,
  },
  '0617': {
    videoKey: '-98ZkjGESgo',
    title: 'BlackFacts Minute: June 17',
    description:
      'BlackFacts.com Fact Of The Day for June 17th, On This Day in 1957, The Tuskegee Boycott (in protest of redistricting and other attempts to block the right to vote for Black People) began.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/-98ZkjGESgo/maxresdefault.jpg',
    index: 167,
  },
  '0618': {
    videoKey: 'G7j2ktRB-8A',
    title: 'BlackFacts Minute: June 18',
    description:
      'BlackFacts.com Fact Of The Day for June 18th, On This Day in 1889, W. H. Richardson patents the Baby Buggy.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/G7j2ktRB-8A/maxresdefault.jpg',
    index: 168,
  },
  '0619': {
    videoKey: 'ozbkFEwiCCM',
    title: 'BlackFacts Minute: June 19',
    description:
      'BlackFacts.com Fact Of The Day for June 19th, On This Day in 1968, The Solidarity Day March Occurred in Washington, DC.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/ozbkFEwiCCM/maxresdefault.jpg',
    index: 169,
  },
  '0620': {
    videoKey: 'nKAbVUAiYn8',
    title: 'BlackFacts Minute: June 20',
    description:
      'BlackFacts.com Fact Of The Day for June 20th, On This Day in 1960, Harry Belafonte became the First African American Man to win an Emmy Award.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/nKAbVUAiYn8/maxresdefault.jpg',
    index: 170,
  },
  '0621': {
    videoKey: 'mfHmxGRH73c',
    title: 'BlackFacts Minute: June 21',
    description:
      'BlackFacts.com Fact Of The Day for June 21st, On This Day in 1859, Painter, Henry Ossawa Tanner was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/mfHmxGRH73c/maxresdefault.jpg',
    index: 171,
  },
  '0622': {
    videoKey: 'y0xXEO0vpb0',
    title: 'BlackFacts Minute: June 22',
    description:
      'BlackFacts.com Fact Of The Day for June 22nd, On This Day in 1965, Arthur Ashe leads UCLA to the NCAA Tennis Championship.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/y0xXEO0vpb0/maxresdefault.jpg',
    index: 172,
  },
  '0623': {
    videoKey: 'G4M6y2Cv6LQ',
    title: 'BlackFacts Minute: June 23',
    description:
      'BlackFacts.com Fact Of The Day for June 23rd, On This Day in 1940, Gold Medal Sprinter Wilma Rudolph was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/G4M6y2Cv6LQ/maxresdefault.jpg',
    index: 173,
  },
  '0624': {
    videoKey: 'rFMO_QLsBjw',
    title: 'BlackFacts Minute: June 24',
    description:
      'BlackFacts.com Fact Of The Day for June 24th, On This Day in 1884, John R. Lynch became the first African-American to preside over the deliberations of a national political party.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/rFMO_QLsBjw/maxresdefault.jpg',
    index: 174,
  },
  '0625': {
    videoKey: '0zjp4X5IyT0',
    title: 'BlackFacts Minute: June 25',
    description:
      'BlackFacts.com Fact Of The Day for June 25th, On This Day in 1954, Supreme Court Justice Sonia Sotomayor was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/0zjp4X5IyT0/maxresdefault.jpg',
    index: 175,
  },
  '0626': {
    videoKey: 'RvjhNSVdYxA',
    title: 'BlackFacts Minute: June 26',
    description:
      'BlackFacts.com Fact Of The Day for June 26th, On This Day in 1962, Sit-In demonstrations and passive resistance, the precursor of the Civil Rights Movement, began in Cairo, Illinois.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/RvjhNSVdYxA/maxresdefault.jpg',
    index: 176,
  },
  '0627': {
    videoKey: 'x6NeDA2EmrI',
    title: 'BlackFacts Minute: June 27',
    description:
      'BlackFacts.com Fact Of The Day for June 27th, On This Day in 1939, Frederick Jones invents the Ticket Dispensing Machine.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/x6NeDA2EmrI/maxresdefault.jpg',
    index: 177,
  },
  '0628': {
    videoKey: 'FYvGNIG1EJo',
    title: 'BlackFacts Minute: June 28',
    description:
      'BlackFacts.com Fact Of The Day for June 28th, On This Day in 1978, The U.S. Supreme Court invalidated the use of racial quota for University Applications.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/FYvGNIG1EJo/maxresdefault.jpg',
    index: 178,
  },
  '0629': {
    videoKey: 'okJKF3YPGNQ',
    title: 'BlackFacts Minute: June 29',
    description:
      'BlackFacts.com Fact Of The Day for June 29th, On This Day in 1970, NAACP Chairman, S. G. Spottswood, criticizes the Nixon Administration.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/okJKF3YPGNQ/maxresdefault.jpg',
    index: 179,
  },
  '0630': {
    videoKey: 'v8liggP7OsU',
    title: 'BlackFacts Minute: June 30',
    description:
      'BlackFacts.com Fact Of The Day for June 30th, On This Day in 1917, Legendary singer, dancer and actress Lena Horne was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/v8liggP7OsU/maxresdefault.jpg',
    index: 180,
  },
  '0701': {
    videoKey: 'r3CoKeJ6xrA',
    title: 'BlackFacts Minute: July 1',
    description:
      'BlackFacts.com Fact Of The Day for July 1st, On This Day in 1924, Ronald Hayes was name Soloist with the Boston Symphony Orchestra.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/r3CoKeJ6xrA/maxresdefault.jpg',
    index: 181,
  },
  '0702': {
    videoKey: 'o-Jts-4mOYw',
    title: 'BlackFacts Minute: July 2',
    description:
      'BlackFacts.com Fact Of The Day for July 2nd, On This Day in 1964, President Lyndon B. Johnson signed the Civil Rights Act.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/o-Jts-4mOYw/maxresdefault.jpg',
    index: 182,
  },
  '0703': {
    videoKey: 'Uv7LL5gdUJE',
    title: 'BlackFacts Minute: July 3',
    description:
      'BlackFacts.com Fact Of The Day for July 3rd, On This Day in 1962, Jackie Robinson became the first African American to be inducted into the Major League Baseball Hall of Fame.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Uv7LL5gdUJE/maxresdefault.jpg',
    index: 183,
  },
  '0704': {
    videoKey: 'QBvPj4dfYPc',
    title: 'BlackFacts Minute: July 4',
    description:
      'BlackFacts.com Fact Of The Day for July 4th, On This Day in 1963, Marian Anderson and Ralph Bunche received the first Medal of Freedom.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/QBvPj4dfYPc/maxresdefault.jpg',
    index: 184,
  },
  '0705': {
    videoKey: 'bZTaP2tBbf0',
    title: 'BlackFacts Minute: July 5',
    description:
      'BlackFacts.com Fact Of The Day for July 5th, On This Day in 1852, Frederick Douglass gave his speech  What to the Slave is the Fourth of July?   Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/bZTaP2tBbf0/maxresdefault.jpg',
    index: 185,
  },
  '0706': {
    videoKey: 'Ic0sg06kcaE',
    title: 'BlackFacts Minute: July 6',
    description:
      "BlackFacts.com Fact Of The Day for July 6th, On This Day in 1957, Althea Gibson won the Women's Wimbledon Singles Championship.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ",
    thumbnail: 'https://i.ytimg.com/vi/Ic0sg06kcaE/maxresdefault.jpg',
    index: 186,
  },
  '0707': {
    videoKey: '5BsJFFoXz_c',
    title: 'BlackFacts Minute: July 7',
    description:
      'BlackFacts.com Fact Of The Day for July 7th, On This Day in 1915, Margaret Walker, Writer and Poet, was Born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/5BsJFFoXz_c/maxresdefault.jpg',
    index: 187,
  },
  '0708': {
    videoKey: '42Aoq47eGGw',
    title: 'BlackFacts Minute: July 8',
    description:
      'BlackFacts.com Fact Of The Day for July 8th, On This Day in 1965, The NAACP Elects Roy Wilkins as Executive Director.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/42Aoq47eGGw/maxresdefault.jpg',
    index: 188,
  },
  '0709': {
    videoKey: 'dsRGk_MoWvM',
    title: 'BlackFacts Minute: July 9',
    description:
      'BlackFacts.com Fact Of The Day for July 9th, On This Day in 1955, Everett Frederic Morrow became the first African American to serve as an executive at the White House  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/dsRGk_MoWvM/maxresdefault.jpg',
    index: 189,
  },
  '0710': {
    videoKey: 'f8Cvd9o-DLU',
    title: 'BlackFacts Minute: July 10',
    description:
      'BlackFacts.com Fact Of The Day for July 10th, On This Day in 1893, Daniel Hale Williams performs the worlds first open heart surgery.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/f8Cvd9o-DLU/maxresdefault.jpg',
    index: 190,
  },
  '0711': {
    videoKey: 'T73lSj_pt2Y',
    title: 'BlackFacts Minute: July 11',
    description:
      'BlackFacts.com Fact Of The Day for July 11th, On This Day in 1905, The Niagara Movement of Black Intellectuals, Began.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/T73lSj_pt2Y/maxresdefault.jpg',
    index: 191,
  },
  '0712': {
    videoKey: 'BLiln7h7vaI',
    title: 'BlackFacts Minute: July 12',
    description:
      'BlackFacts.com Fact Of The Day for July 12th, On This Day in 1951, Governor Adlai Stevenson called out the National Guard to stop a Race Riot in Chicago.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/BLiln7h7vaI/maxresdefault.jpg',
    index: 192,
  },
  '0713': {
    videoKey: 'Mw7CKuGCL40',
    title: 'BlackFacts Minute: July 13',
    description:
      'BlackFacts.com Fact Of The Day for July 13th, On This Day in 1972, Shirley Chisholm became the first African American Presidential Nominee.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Mw7CKuGCL40/maxresdefault.jpg',
    index: 193,
  },
  '0714': {
    videoKey: 'QERq4mG6Htk',
    title: 'BlackFacts Minute: July 14',
    description:
      'BlackFacts.com Fact Of The Day for July 14th, On This Day in 1885, Sarah E. Goode invented the Cabinet Bed.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/QERq4mG6Htk/maxresdefault.jpg',
    index: 194,
  },
  '0715': {
    videoKey: 'VRr8X2vLdIo',
    title: 'BlackFacts Minute: July 15',
    description:
      'BlackFacts.com Fact Of The Day for July 15th, On This Day in 1961, award winning actor, Forest Whitaker was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/VRr8X2vLdIo/maxresdefault.jpg',
    index: 195,
  },
  '0716': {
    videoKey: 'tVgLexlU8jk',
    title: 'BlackFacts Minute: July 16',
    description:
      'BlackFacts.com Fact Of The Day for July 16th, On This Day in 1936, The movie, Green Pastures premieres in New York City.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/tVgLexlU8jk/maxresdefault.jpg',
    index: 196,
  },
  '0717': {
    videoKey: 'Ce0dd9exlKY',
    title: 'BlackFacts Minute: July 17',
    description:
      'BlackFacts.com Fact Of The Day for July 17th, On This Day in 1862, Congress kicked of the fight for Black Freedom - which lead to the Emancipation Proclamation.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Ce0dd9exlKY/maxresdefault.jpg',
    index: 197,
  },
  '0718': {
    videoKey: 'RHRt2-OrMng',
    title: 'BlackFacts Minute: July 18',
    description:
      'BlackFacts.com Fact Of The Day for July 18th, On This Day in 1918, Nelson Mandela was Born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/RHRt2-OrMng/maxresdefault.jpg',
    index: 198,
  },
  '0719': {
    videoKey: 'rA7g61Bzop0',
    title: 'BlackFacts Minute: July 19',
    description:
      'BlackFacts.com Fact Of The Day for July 19th, On This Day in 1922, Mordecai Wyatt Johnson gave his speech  The Faith of the American Negro .  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/rA7g61Bzop0/maxresdefault.jpg',
    index: 199,
  },
  '0720': {
    videoKey: '7Dhrm4NpCnw',
    title: 'BlackFacts Minute: July 20',
    description:
      'BlackFacts.com Fact Of The Day for July 20th, On This Day in 1967, The Black Power Conference was kicked off.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/7Dhrm4NpCnw/maxresdefault.jpg',
    index: 200,
  },
  '0721': {
    videoKey: 'u3FXb-njFzo',
    title: 'BlackFacts Minute: July 21',
    description:
      'BlackFacts.com Fact Of The Day for July 21st, On This Day in 1962, more than 60 Civil Rights Activists were jailed after a demonstration in Albany Georgia.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/u3FXb-njFzo/maxresdefault.jpg',
    index: 201,
  },
  '0722': {
    videoKey: '37R8DVMRCwY',
    title: 'BlackFacts Minute: July 22',
    description:
      'BlackFacts.com Fact Of The Day for July 22nd, On This Day in 1946, Award winning actor, Danny Glover was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/37R8DVMRCwY/maxresdefault.jpg',
    index: 202,
  },
  '0723': {
    videoKey: 'tVd3Yo_drVI',
    title: 'BlackFacts Minute: July 23',
    description:
      'BlackFacts.com Fact Of The Day for July 23rd, On This Day in 1948, the first Progressive Party Convention took place.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/tVd3Yo_drVI/maxresdefault.jpg',
    index: 203,
  },
  '0724': {
    videoKey: 'Jsx8fi0btU0',
    title: 'BlackFacts Minute: July 24',
    description:
      'BlackFacts.com Fact Of The Day for July 24th, On This Day in 1849, David Jones Peck became the first African American man to graduate from a U.S. Medical School.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Jsx8fi0btU0/maxresdefault.jpg',
    index: 204,
  },
  '0725': {
    videoKey: 'VT9Et_vtKhg',
    title: 'BlackFacts Minute: July 25',
    description:
      'BlackFacts.com Fact Of The Day for July 25, On this Day in 1972, The U.S. government acknowledged its role in the Tuskegee syphilis experiment.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/VT9Et_vtKhg/maxresdefault.jpg',
    index: 205,
  },
  '0726': {
    videoKey: '0aIokV8_wB0',
    title: 'BlackFacts Minute: July 26',
    description:
      'BlackFacts.com Fact Of The Day for July 26th, On This Day in 1948, Executive Order 9981 Abolished discrimination in the U.S. Armed Forces.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/0aIokV8_wB0/maxresdefault.jpg',
    index: 206,
  },
  '0727': {
    videoKey: 'LWNUTFY_MDM',
    title: 'BlackFacts Minute: July 27',
    description:
      'BlackFacts.com Fact Of The Day for July 27th, On This Day in 1919, Chicago race riot began.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/LWNUTFY_MDM/maxresdefault.jpg',
    index: 207,
  },
  '0728': {
    videoKey: 'oDUIVt6PShg',
    title: 'BlackFacts Minute: July 28',
    description:
      'BlackFacts.com Fact Of The Day for July 28th, On This Day in 1905, Racecar Driver, Rajo Jack was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/oDUIVt6PShg/maxresdefault.jpg',
    index: 208,
  },
  '0729': {
    videoKey: 'Ndf0Y_--sS0',
    title: 'BlackFacts Minute: July 29',
    description:
      'BlackFacts.com Fact Of The Day for July 29th, On This Day in 1919, the first convention of The National Association of Negro Musicians took place.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Ndf0Y_--sS0/maxresdefault.jpg',
    index: 209,
  },
  '0730': {
    videoKey: 'MfNFgPK11wg',
    title: 'BlackFacts Minute: July 30',
    description:
      'BlackFacts.com Fact Of The Day for July 30th, On This Day in 1866, Edward G. Walker became the first black man to sit in the legislator of Massachusetts.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/MfNFgPK11wg/maxresdefault.jpg',
    index: 210,
  },
  '0731': {
    videoKey: 'aaNn1Iro0c0',
    title: 'BlackFacts Minute: July 31',
    description:
      'BlackFacts.com Fact Of The Day for July 31st, On This Day in 1956, Deval Patrick was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/aaNn1Iro0c0/maxresdefault.jpg',
    index: 211,
  },
  '0801': {
    videoKey: 'w4cviIYHCDM',
    title: 'BlackFacts Minute: August 1',
    description:
      'BlackFacts.com Fact Of The Day for August 1st, On This Day in 1895, Benjamin E. Mays was named president of Morehouse College.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/w4cviIYHCDM/maxresdefault.jpg',
    index: 212,
  },
  '0802': {
    videoKey: 'tkONvIFBZPc',
    title: 'BlackFacts Minute: August 2',
    description:
      'BlackFacts.com Fact Of The Day for August 2nd, On This Day in 1951, William H. Thompson became the first Black to earn the Medal of Honor.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/tkONvIFBZPc/maxresdefault.jpg',
    index: 213,
  },
  '0803': {
    videoKey: '7YRbZXMsBng',
    title: 'BlackFacts Minute: August 3',
    description:
      'BlackFacts.com Fact Of The Day for August 3rd, On This Day in 1960, Niger declared independence from France.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/7YRbZXMsBng/maxresdefault.jpg',
    index: 214,
  },
  '0804': {
    videoKey: 'JPaBrGx7HHE',
    title: 'BlackFacts Minute: August 4',
    description:
      'BlackFacts.com Fact Of The Day for August 4th, On This Day in 1961, Barack Obama was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/JPaBrGx7HHE/maxresdefault.jpg',
    index: 215,
  },
  '0805': {
    videoKey: 'Fn8Fw75vUnw',
    title: 'BlackFacts Minute: August 5',
    description:
      'BlackFacts.com Fact Of The Day for August 5th, On This Day in 1984, Evelyn Ashford wins a gold medal in the 100 meters.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Fn8Fw75vUnw/maxresdefault.jpg',
    index: 216,
  },
  '0806': {
    videoKey: 'YhTVIwwFeHg',
    title: 'BlackFacts Minute: August 6',
    description:
      'BlackFacts.com Fact Of The Day for August 6th, On This Day in 1965, The Voting Rights Act of 1965 was signed into law by President Lyndon B. Johnson.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/YhTVIwwFeHg/maxresdefault.jpg',
    index: 217,
  },
  '0807': {
    videoKey: '9dx3lX0dfQU',
    title: 'BlackFacts Minute: August 7',
    description:
      'BlackFacts.com Fact Of The Day for August 7th, On This Day in 1904, Diplomat and Nobel Peace Prize winner Ralph Bunche was born in Detroit.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/9dx3lX0dfQU/maxresdefault.jpg',
    index: 218,
  },
  '0808': {
    videoKey: '-zC8YC86FsY',
    title: 'BlackFacts Minute: August 8',
    description:
      'BlackFacts.com Fact Of The Day for August 8th, On This Day in 1911, Broadway and television actress Rosetta LeNoire was born in New York City.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/-zC8YC86FsY/maxresdefault.jpg',
    index: 219,
  },
  '0809': {
    videoKey: 'QwJ66vaa58M',
    title: 'BlackFacts Minute: August 9',
    description:
      'BlackFacts.com Fact Of The Day for August 9th, On This Day in 1869, Inventor and philanthropist, Annie Malone was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/QwJ66vaa58M/maxresdefault.jpg',
    index: 220,
  },
  '0810': {
    videoKey: 'ivHSMogR78g',
    title: 'BlackFacts Minute: August 10',
    description:
      'BlackFacts.com Fact Of The Day for August 10th, On This Day in 1858, Author and educator Anna Julia Haywood Cooper was born in Raleigh, North Carolina.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/ivHSMogR78g/maxresdefault.jpg',
    index: 221,
  },
  '0811': {
    videoKey: 'Oq-mZlrt3Y0',
    title: 'BlackFacts Minute: August 11',
    description:
      'BlackFacts.com Fact Of The Day for August 11, On this Day in 1965, the Los Angeles Watts riots began.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Oq-mZlrt3Y0/maxresdefault.jpg',
    index: 222,
  },
  '0812': {
    videoKey: '7DLahcnwL0g',
    title: 'BlackFacts Minute: August 12',
    description:
      'BlackFacts.com Fact Of The Day for August 12, On this Day in 1922, Ophelia DeVore-Mitchell, founder of two African American modeling schools was born in Edgefield, South Carolina.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/7DLahcnwL0g/maxresdefault.jpg',
    index: 223,
  },
  '0813': {
    videoKey: 'LhDmIcDrF2w',
    title: 'BlackFacts Minute: August 13',
    description:
      'BlackFacts.com Fact Of The Day for August 13, On this Day in 1982, Olympic speed-skating gold medalist Shani Davis was born in Chicago.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/LhDmIcDrF2w/maxresdefault.jpg',
    index: 224,
  },
  '0814': {
    videoKey: '5zyrggF1D14',
    title: 'BlackFacts Minute: August 14',
    description:
      'BlackFacts.com Fact Of The Day for August 14, On this Day in 1966, actress and model Halle Berry was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/5zyrggF1D14/maxresdefault.jpg',
    index: 225,
  },
  '0815': {
    videoKey: 'xyLILPegt3s',
    title: 'BlackFacts Minute: August 15',
    description:
      'BlackFacts.com Fact Of The Day for August 15, On this Day in 1938, Congresswoman Maxine Waters was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/xyLILPegt3s/maxresdefault.jpg',
    index: 226,
  },
  '0816': {
    videoKey: 'Jele8EaMUkM',
    title: 'BlackFacts Minute: August 16',
    description:
      'BlackFacts.com Fact Of The Day for August 16, On this Day in 1963, Georg Elliott Olden became the first African American to design a postage stamp.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Jele8EaMUkM/maxresdefault.jpg',
    index: 227,
  },
  '0817': {
    videoKey: 'i7EO-1fQxzI',
    title: 'BlackFacts Minute: August 17',
    description:
      'BlackFacts.com Fact Of The Day for August 17, On this Day in 1887, Marcus Garvey, the father of the black nationalist movement, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/i7EO-1fQxzI/maxresdefault.jpg',
    index: 228,
  },
  '0818': {
    videoKey: 'bXSIcYUT8tw',
    title: 'BlackFacts Minute: August 18',
    description:
      'BlackFacts.com Fact Of The Day for August 18, On this Day in 1963, A pioneer, James Meredith helped to integrate University of Mississippi, becoming the first Black person to be admitted to UM in 1962.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/bXSIcYUT8tw/maxresdefault.jpg',
    index: 229,
  },
  '0819': {
    videoKey: 'zPf9Wv4o-tU',
    title: 'BlackFacts Minute: August 19',
    description:
      'BlackFacts.com Fact Of The Day for August 19, On this Day in 1946, Charles Bolden, first African American administrator of the NASA, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/zPf9Wv4o-tU/maxresdefault.jpg',
    index: 230,
  },
  '0820': {
    videoKey: '8olLcRfr_2A',
    title: 'BlackFacts Minute: August 20',
    description:
      'BlackFacts.com Fact Of The Day for August 20, On this Day in 1931, Legendary boxing promoter Don King was born in Cleveland.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/8olLcRfr_2A/maxresdefault.jpg',
    index: 231,
  },
  '0821': {
    videoKey: 'Lyv1JfrihXk',
    title: 'BlackFacts Minute: August 21',
    description:
      'BlackFacts.com Fact Of The Day for August 21, On this Day in 1831, Nat Turner’s slave rebellion happened.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Lyv1JfrihXk/maxresdefault.jpg',
    index: 232,
  },
  '0822': {
    videoKey: 'wafGO3lLD84',
    title: 'BlackFacts Minute: August 22',
    description:
      'BlackFacts.com Fact Of The Day for August 22, On this Day in 1989, Black Panther Party Co-founder, Huey P. Newton was killed in Oakland, California.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/wafGO3lLD84/maxresdefault.jpg',
    index: 233,
  },
  '0823': {
    videoKey: 'm_JIVkhtYcA',
    title: 'BlackFacts Minute: August 23',
    description:
      'BlackFacts.com Fact Of The Day for August 23, On this Day in 1791, the first uprising against the slave trade happened.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/m_JIVkhtYcA/maxresdefault.jpg',
    index: 234,
  },
  '0824': {
    videoKey: 'H7MFiayeyLQ',
    title: 'BlackFacts Minute: August 24',
    description:
      'BlackFacts.com Fact Of The Day for August 24, On this Day in 1987, Bayard Rustin, a prominent activist and organizer in the March on Washington in 1963, died.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/H7MFiayeyLQ/maxresdefault.jpg',
    index: 235,
  },
  '0825': {
    videoKey: 'Xb4Y9afE55E',
    title: 'BlackFacts Minute: August 25',
    description:
      'BlackFacts.com Fact Of The Day for August 25, On this Day in 1925, Brotherhood of Sleeping Car Porters organized at a mass meeting in Elks Hall in Harlem.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Xb4Y9afE55E/maxresdefault.jpg',
    index: 236,
  },
  '0826': {
    videoKey: '6HAu4BkURmY',
    title: 'BlackFacts Minute: August 26',
    description:
      'BlackFacts.com Fact Of The Day for August 26, On this Day in 1918, NASA Mathematician Katherine Johnson was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/6HAu4BkURmY/maxresdefault.jpg',
    index: 237,
  },
  '0827': {
    videoKey: 'jh_c55bbOAo',
    title: 'BlackFacts Minute: August 27',
    description:
      'BlackFacts.com Fact Of The Day for August 27, On this Day in 1961, Grammy Award winning gospel artist Yolanda Adams was born in Houston, Texas.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/jh_c55bbOAo/maxresdefault.jpg',
    index: 238,
  },
  '0828': {
    videoKey: 'uOoQNN4jfHo',
    title: 'BlackFacts Minute: August 28',
    description:
      'BlackFacts.com Fact Of The Day for August 28, On this Day in 1955, Emmet Till was murdered.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/uOoQNN4jfHo/maxresdefault.jpg',
    index: 239,
  },
  '0829': {
    videoKey: 'S2FMozxn5xM',
    title: 'BlackFacts Minute: August 29',
    description:
      'BlackFacts.com Fact Of The Day for August 29, On this Day in 1958, Michael Jackson was born in Gary, Indiana. @Michael Jackson   Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/S2FMozxn5xM/maxresdefault.jpg',
    index: 240,
  },
  '0830': {
    videoKey: '8vQa_g75ByM',
    title: 'BlackFacts Minute: August 30',
    description:
      'BlackFacts.com Fact Of The Day for August 30, On this Day in 1983, U.S. astronaut Guion S. Bluford, Jr., became on this day in 1983 the first African American to travel into space.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/8vQa_g75ByM/maxresdefault.jpg',
    index: 241,
  },
  '0831': {
    videoKey: 'Y7FDj6XXg88',
    title: 'BlackFacts Minute: August 31',
    description:
      'BlackFacts.com Fact Of The Day for August 31, On this Day in 1935, Eldridge Cleaver was born in Wabbaseka, Arkansas.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Y7FDj6XXg88/maxresdefault.jpg',
    index: 242,
  },
  '0901': {
    videoKey: 'uTogVPRBXSs',
    title: 'BlackFacts Minute: September 1',
    description:
      'BlackFacts.com Fact Of The Day for September 1, On this Day in 1977, Actress and singer Ethel Waters, passed away.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/uTogVPRBXSs/maxresdefault.jpg',
    index: 243,
  },
  '0902': {
    videoKey: 'V5KrON_6eLk',
    title: 'BlackFacts Minute: September 2',
    description:
      'BlackFacts.com Fact Of The Day for September 2, On this Day in 1975, Joseph W. Hatchett sworn in as first black supreme court justice in the south.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/V5KrON_6eLk/maxresdefault.jpg',
    index: 244,
  },
  '0903': {
    videoKey: 'JR4aptiawiM',
    title: 'BlackFacts Minute: September 3',
    description:
      'BlackFacts.com Fact Of The Day for September 3, On this Day in 1783, Richard Allen purchased his freedom from slavery.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/JR4aptiawiM/maxresdefault.jpg',
    index: 245,
  },
  '0904': {
    videoKey: 'LEHicpsoRR8',
    title: 'BlackFacts Minute: September 4',
    description:
      'BlackFacts.com Fact Of The Day for September 4, On this Day in 1981, Singer and actress Beyoncé was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/LEHicpsoRR8/maxresdefault.jpg',
    index: 246,
  },
  '0905': {
    videoKey: 'liy_HNdHBMk',
    title: 'BlackFacts Minute: September 5',
    description:
      'BlackFacts.com Fact Of The Day for September 5, On this Day in 1859, Writer Harriet Wilson became the first African American to publish a novel.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/liy_HNdHBMk/maxresdefault.jpg',
    index: 247,
  },
  '0906': {
    videoKey: 'nZg9Ah3sQ2M',
    title: 'BlackFacts Minute: September 6',
    description:
      'BlackFacts.com Fact Of The Day for September 6, On this Day in 1960, Rafer Johnson became the first African-American to win an Olympic Decathlon.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/nZg9Ah3sQ2M/maxresdefault.jpg',
    index: 248,
  },
  '0907': {
    videoKey: '8ROB5HvCedQ',
    title: 'BlackFacts Minute: September 7',
    description:
      'BlackFacts.com Fact Of The Day for September 7, On this Day in 1954, Integration of public schools begins in Washington D.C. and Maryland.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/8ROB5HvCedQ/maxresdefault.jpg',
    index: 249,
  },
  '0908': {
    videoKey: 'q5WU2kGNVkQ',
    title: 'BlackFacts Minute: September 8',
    description:
      'BlackFacts.com Fact Of The Day for September 8, On this Day in 1875, Mississippi governor requested federal troops to protect African-American voters.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/q5WU2kGNVkQ/maxresdefault.jpg',
    index: 250,
  },
  '0909': {
    videoKey: 'PlVV46LZZKY',
    title: 'BlackFacts Minute: September 9',
    description:
      'BlackFacts.com Fact Of The Day for September 9, On this Day in 1915, Carter G. Woodson founds the Association for the Study of African American Life and History.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/PlVV46LZZKY/maxresdefault.jpg',
    index: 251,
  },
  '0910': {
    videoKey: '1f__39_B1jU',
    title: 'BlackFacts Minute: September 10',
    description:
      'BlackFacts.com Fact Of The Day for September 10, On this Day in 1990, The Fresh Prince of Bel-Air debuts on NBC.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/1f__39_B1jU/maxresdefault.jpg',
    index: 252,
  },
  '0911': {
    videoKey: 'SZ8qJsZ5pv0',
    title: 'BlackFacts Minute: September 11',
    description:
      'BlackFacts.com Fact Of The Day for September 11, On this Day in 1970, Actress Taraji P. Henson was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/SZ8qJsZ5pv0/maxresdefault.jpg',
    index: 253,
  },
  '0912': {
    videoKey: 'BqPzvKuS5TU',
    title: 'BlackFacts Minute: September 12',
    description:
      'BlackFacts.com Fact Of The Day for September 12, On this Day in 1992, Engineer and physician Mae Jemison became the first African-American woman to travel into space.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/BqPzvKuS5TU/maxresdefault.jpg',
    index: 254,
  },
  '0913': {
    videoKey: 'KwivNoyc5r8',
    title: 'BlackFacts Minute: September 13',
    description:
      'BlackFacts.com Fact Of The Day for September 13, On this Day in 1886, philosopher Alain L. Locke, first African American Rhodes Scholar, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/KwivNoyc5r8/maxresdefault.jpg',
    index: 255,
  },
  '0914': {
    videoKey: 't2cmOBCzBBY',
    title: 'BlackFacts Minute: September 14',
    description:
      'BlackFacts.com Fact Of The Day for September 14, On this Day in 1940, Blacks are Allowed to Join Any Branch of the US Military.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/t2cmOBCzBBY/maxresdefault.jpg',
    index: 256,
  },
  '0915': {
    videoKey: '8H4hiJOIr5U',
    title: 'BlackFacts Minute: September 15',
    description:
      'BlackFacts.com Fact Of The Day for September 15, On this Day in 1889, Writer Claude McKay was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/8H4hiJOIr5U/maxresdefault.jpg',
    index: 257,
  },
  '0916': {
    videoKey: 'c5FHyUEUbtw',
    title: 'BlackFacts Minute: September 16',
    description:
      'BlackFacts.com Fact Of The Day for September 16, On this Day in 1933, Emperor Jones movie, the first with a black man in a leading role, was released.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/c5FHyUEUbtw/maxresdefault.jpg',
    index: 258,
  },
  '0917': {
    videoKey: 'CoqUlO-93F4',
    title: 'BlackFacts Minute: September 17',
    description:
      'BlackFacts.com Fact Of The Day for September 17, On this Day in 1970, The Flip Wilson Show premieres on NBC.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/CoqUlO-93F4/maxresdefault.jpg',
    index: 259,
  },
  '0918': {
    videoKey: 'tEstuiKJvdY',
    title: 'BlackFacts Minute: September 18',
    description:
      'BlackFacts.com Fact Of The Day for September 18, On this Day in 1967, Singer Ricky Bell was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/tEstuiKJvdY/maxresdefault.jpg',
    index: 260,
  },
  '0919': {
    videoKey: '410NMjGlGbY',
    title: 'BlackFacts.com celebrates Founders Day (Sept 19th) for Iota Phi Theta Fraternity.',
    description:
      'Fact-Of-The-Day for: September 19 - On this day in 1963, Iota Phi Theta Fraternity, Incorporated was founded at Morgan State University.',
    thumbnail: 'https://i.ytimg.com/vi/410NMjGlGbY/maxresdefault.jpg',
    index: 261,
  },
  '0920': {
    videoKey: 'IUr1RmR6vPI',
    title: 'BlackFacts Minute: September 20',
    description:
      'BlackFacts.com Fact Of The Day for September 20, On this Day in 1890, pianist Jelly Roll Morton was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/IUr1RmR6vPI/maxresdefault.jpg',
    index: 262,
  },
  '0921': {
    videoKey: 'XFMl9xPFRGs',
    title: 'BlackFacts Minute: September 21',
    description:
      'BlackFacts.com Fact Of The Day for September 21, On this Day in 1832, Maria W. Stewart addressed the New England Anti-Slavery Society.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/XFMl9xPFRGs/maxresdefault.jpg',
    index: 263,
  },
  '0922': {
    videoKey: 'MXVXxd_SKSs',
    title: 'BlackFacts Minute: September 22',
    description:
      'BlackFacts.com Fact Of The Day for September 22, On this Day in 1906, a race riot in Atlanta left at least 200 killed.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/MXVXxd_SKSs/maxresdefault.jpg',
    index: 264,
  },
  '0923': {
    videoKey: 'hBnkQ2XAfBs',
    title: 'BlackFacts Minute: September 23',
    description:
      'BlackFacts.com Fact Of The Day for September 23, On this Day in 1926, Musician John Coltrane was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/hBnkQ2XAfBs/maxresdefault.jpg',
    index: 265,
  },
  '0924': {
    videoKey: 'uU3BmfmQSz4',
    title: 'BlackFacts Minute: September 24',
    description:
      'BlackFacts.com Fact Of The Day for September 24, On this Day in 1957, Nine Black students begin first full day of classes - Known as  The Littlerock Nine .  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/uU3BmfmQSz4/maxresdefault.jpg',
    index: 266,
  },
  '0925': {
    videoKey: 'OmUsB3Wx4G0',
    title: 'BlackFacts Minute: September 25',
    description:
      'BlackFacts.com Fact Of The Day for September 25, On this Day in 1965, Basketball player Scottie Pippen was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/OmUsB3Wx4G0/maxresdefault.jpg',
    index: 267,
  },
  '0926': {
    videoKey: 'AAAxKihNnlc',
    title: 'BlackFacts Minute: September 26',
    description:
      'BlackFacts.com Fact Of The Day for September 26, On this Day in 1968, The Studio Museum in Harlem opens in NYC.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/AAAxKihNnlc/maxresdefault.jpg',
    index: 268,
  },
  '0927': {
    videoKey: 'pwPZgxj8oU8',
    title: 'BlackFacts Minute: September 27',
    description:
      'BlackFacts.com Fact Of The Day for September 27, On this Day in 1827, Hiram R. Revels, first Black U.S. senator, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/pwPZgxj8oU8/maxresdefault.jpg',
    index: 269,
  },
  '0928': {
    videoKey: 'zsgWIVo87o4',
    title: 'BlackFacts Minute: September 28',
    description:
      'BlackFacts.com Fact Of The Day for September 28, On this Day in 1868, the Opelousas massacre left at least 300 killed.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/zsgWIVo87o4/maxresdefault.jpg',
    index: 270,
  },
  '0929': {
    videoKey: 'WDwsUIKQ_r4',
    title: 'BlackFacts Minute: September 29',
    description:
      'BlackFacts.com Fact Of The Day for September 29, On this Day in 1979, W. Arthur Lewis became the first black to receive the Nobel Prize in Economics.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/WDwsUIKQ_r4/maxresdefault.jpg',
    index: 271,
  },
  '0930': {
    videoKey: '0PgetTBTghk',
    title: 'BlackFacts Minute: September 30',
    description:
      'BlackFacts.com Fact Of The Day for September 30, On this Day in 1991, Athlete Mike Powell broke the world long jump record.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/0PgetTBTghk/maxresdefault.jpg',
    index: 272,
  },
  1001: {
    videoKey: 'uJrFI8Xpuv4',
    title: 'BlackFacts Minute: October 1',
    description:
      'BlackFacts.com Fact Of The Day for October 1st, On this Day in 1966, Black Panther party founded in Oakland, California.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/uJrFI8Xpuv4/maxresdefault.jpg',
    index: 273,
  },
  1002: {
    videoKey: '_AXKBgvOF14',
    title: 'BlackFacts Minute: October 2',
    description:
      'BlackFacts.com Fact Of The Day for October 2, On this Day in 1935, Robert Henry Lawrence Jr., Robert Henry Lawrence Jr., first African American selected to be an astronaut, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/_AXKBgvOF14/maxresdefault.jpg',
    index: 274,
  },
  1003: {
    videoKey: 'LfyoJJXfvJM',
    title: 'BlackFacts Minute: October 3',
    description:
      'BlackFacts.com Fact Of The Day for October 3, On this Day in 1949, WERD, The First Black Radio Station begins operation in Atlanta.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/LfyoJJXfvJM/maxresdefault.jpg',
    index: 275,
  },
  1004: {
    videoKey: 'Z3iFFJ0CiQA',
    title: 'BlackFacts Minute: October 4',
    description:
      'BlackFacts.com Fact Of The Day for October 4, On this Day in 1864, The New Orleans Tribune, the first black daily newspaper, was founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Z3iFFJ0CiQA/maxresdefault.jpg',
    index: 276,
  },
  1005: {
    videoKey: 'w2rVxb9fa6U',
    title: 'BlackFacts Minute: October 5',
    description:
      'BlackFacts.com Fact Of The Day for October 5, On this Day in 1932, Yvonne Brathwaite Burke, the first Black Congresswoman from California, was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/w2rVxb9fa6U/maxresdefault.jpg',
    index: 277,
  },
  1006: {
    videoKey: 'aB9LsMEuSgE',
    title: 'BlackFacts Minute: October 6',
    description:
      'BlackFacts.com Fact Of The Day for October 6, On this Day in 1949, Inventor Lonnie Johnson was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/aB9LsMEuSgE/maxresdefault.jpg',
    index: 278,
  },
  1007: {
    videoKey: 'uTbJ9Bc9E8w',
    title: 'BlackFacts Minute: October 7',
    description:
      'BlackFacts.com Fact Of The Day for October 7, On this Day in 1931, Bishop and Nobel Peace Prize award-winner Desmond Tutu was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/uTbJ9Bc9E8w/maxresdefault.jpg',
    index: 279,
  },
  1008: {
    videoKey: 'Dbug-4comzI',
    title: 'BlackFacts Minute: October 8',
    description:
      'BlackFacts.com Fact Of The Day for October 8, On this Day in 2004, Dr. Wangari Muta Maathai became the first African woman to receive the Nobel Peace Prize.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Dbug-4comzI/maxresdefault.jpg',
    index: 280,
  },
  1009: {
    videoKey: 'KPGddl3gj1I',
    title: 'BlackFacts Minute: October 9',
    description:
      'BlackFacts.com Fact Of The Day for October 9, On this Day in 1984, W. Wilson Goode became the first African American mayor of Philadelphia.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/KPGddl3gj1I/maxresdefault.jpg',
    index: 281,
  },
  1010: {
    videoKey: '-pYawE7-HQA',
    title: 'BlackFacts Minute: October 10',
    description:
      "BlackFacts.com Fact Of The Day for October 10, On this Day in 1906, Mary Church Terrell gave her speech 'What it Means to be Colored in the Capital of the United States'.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ",
    thumbnail: 'https://i.ytimg.com/vi/-pYawE7-HQA/maxresdefault.jpg',
    index: 282,
  },
  1011: {
    videoKey: 'Y2BDu1Sxr9g',
    title: 'BlackFacts Minute: October 11',
    description:
      'BlackFacts.com Fact Of The Day for October 11, On this Day in 1887, inventor Alexander Miles patented automatically opening and closing elevator doors.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/Y2BDu1Sxr9g/maxresdefault.jpg',
    index: 283,
  },
  1012: {
    videoKey: 'QGh-gU1saxk',
    title: 'BlackFacts Minute: October 12',
    description:
      "BlackFacts.com Fact Of The Day for October 12, On this Day in 1932, Comedian and activist Richard 'Dick' Gregory was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ",
    thumbnail: 'https://i.ytimg.com/vi/QGh-gU1saxk/maxresdefault.jpg',
    index: 284,
  },
  1013: {
    videoKey: 'KfAxspJ84bA',
    title: 'BlackFacts Minute: October 13',
    description:
      "BlackFacts.com Fact Of The Day for October 13, On this Day in 1984, Stevie Wonder scored the number one song with 'I Just Called to Say I Love You'.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ",
    thumbnail: 'https://i.ytimg.com/vi/KfAxspJ84bA/maxresdefault.jpg',
    index: 285,
  },
  1014: {
    videoKey: 'jvwZ7SE2XY0',
    title: 'BlackFacts Minute: October 14',
    description:
      'BlackFacts.com Fact Of The Day for October 14, On this Day in 1964, Martin Luther King, Jr., is awarded the Nobel Peace Prize.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm) ',
    thumbnail: 'https://i.ytimg.com/vi/jvwZ7SE2XY0/maxresdefault.jpg',
    index: 286,
  },
  1015: {
    videoKey: 'wG0zlPGzCKU',
    title: 'BlackFacts Minute: October 15',
    description:
      'BlackFacts.com Fact Of The Day for October 15, On this Day in 1968, Wyomia Tyus became the first person to win the Olympic gold medal twice for 100-meter race.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/wG0zlPGzCKU/maxresdefault.jpg',
    index: 287,
  },
  1016: {
    videoKey: 'bh1kz21Qrbs',
    title: 'BlackFacts Minute: October 16',
    description:
      'BlackFacts.com Fact Of The Day for October 16, On this Day in 1995, the Million Man March took place in Washington D.C.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/bh1kz21Qrbs/maxresdefault.jpg',
    index: 288,
  },
  1017: {
    videoKey: 'xMH3eIqmL_U',
    title: 'BlackFacts Minute: October 17',
    description:
      'BlackFacts.com Fact Of The Day for October 17, On this Day in 1969, Dr. Clifton R. Wharton Jr. became the first Black to head a major white university.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/xMH3eIqmL_U/maxresdefault.jpg',
    index: 289,
  },
  1018: {
    videoKey: 'PppYBUXJ9Wg',
    title: 'BlackFacts Minute: October 18',
    description:
      'BlackFacts.com Fact Of The Day for October 18, On this Day in 1926, Musician Chuck Berry was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/PppYBUXJ9Wg/maxresdefault.jpg',
    index: 290,
  },
  1019: {
    videoKey: 'PY-puXajINw',
    title: 'BlackFacts Minute: October 19',
    description:
      'BlackFacts.com Fact Of The Day for October 19, On this Day in 1870, First African-Americans were elected to the U.S. House of Representatives.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/PY-puXajINw/maxresdefault.jpg',
    index: 291,
  },
  1020: {
    videoKey: 'koiJY8cS0aE',
    title: 'BlackFacts Minute: October 20',
    description:
      'BlackFacts.com Fact Of The Day for October 20, On this Day in 1898, Blacks founded North Carolina Mutual Life Insurance Company.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/koiJY8cS0aE/maxresdefault.jpg',
    index: 292,
  },
  1021: {
    videoKey: 'c3-5FhoaaRY',
    title: 'BlackFacts Minute: October 21',
    description:
      'BlackFacts.com Fact Of The Day for October 21, On this Day in 1917, musician Dizzy Gillespie was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/c3-5FhoaaRY/maxresdefault.jpg',
    index: 293,
  },
  1022: {
    videoKey: 'aLjiJsUodNA',
    title: 'BlackFacts Minute: October 22',
    description:
      'BlackFacts.com Fact Of The Day for October 22, On this Day in 1963, Chicago Public Schools boycott took place.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/aLjiJsUodNA/maxresdefault.jpg',
    index: 294,
  },
  1023: {
    videoKey: '0MEDVdUVHv8',
    title: 'BlackFacts Minute: October 23',
    description:
      "BlackFacts.com Fact Of The Day for October 23, On this Day in 1947, The NAACP sent to the United Nations a document titled 'An Appeal to the World  .  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts",
    thumbnail: 'https://i.ytimg.com/vi/0MEDVdUVHv8/maxresdefault.jpg',
    index: 295,
  },
  1024: {
    videoKey: 'vWcq1hiMEyE',
    title: 'BlackFacts Minute: October 24',
    description:
      'BlackFacts.com Fact Of The Day for October 24, On this Day in 1925, Inventor and scientist Emmett Chappelle was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/vWcq1hiMEyE/maxresdefault.jpg',
    index: 296,
  },
  1025: {
    videoKey: '0fWB8-0YzEE',
    title: 'BlackFacts Minute: October 25',
    description:
      'BlackFacts.com Fact Of The Day for October 25, On this Day in 1997, Million Woman March took place.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #millionmanmarch #women #blackwomen',
    thumbnail: 'https://i.ytimg.com/vi/0fWB8-0YzEE/maxresdefault.jpg',
    index: 297,
  },
  1026: {
    videoKey: 'vQ0ZdyRMFT8',
    title: 'BlackFacts Minute: October 26',
    description:
      'BlackFacts.com Fact Of The Day for October 26, On this Day in 1911, Singer Mahalia Jackson was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackwomen #blackbirthdays',
    thumbnail: 'https://i.ytimg.com/vi/vQ0ZdyRMFT8/maxresdefault.jpg',
    index: 298,
  },
  1027: {
    videoKey: 'CRedTolICAw',
    title: 'BlackFacts Minute: October 27',
    description:
      'BlackFacts.com Fact Of The Day for October 27, On this Day in 1922, Actress, writer and activist Ruby Dee was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blackbirthdays',
    thumbnail: 'https://i.ytimg.com/vi/CRedTolICAw/maxresdefault.jpg',
    index: 299,
  },
  1028: {
    videoKey: 'Z1vEJuPB5rg',
    title: 'BlackFacts Minute: October 28',
    description:
      'BlackFacts.com Fact Of The Day for October 28, On this Day in 1798, Founder of the Underground Railroad Levi Coffin was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #undergroundrailroad #emancipation',
    thumbnail: 'https://i.ytimg.com/vi/Z1vEJuPB5rg/maxresdefault.jpg',
    index: 300,
  },
  1029: {
    videoKey: 'f55MBs0jX3Q',
    title: 'BlackFacts Minute: October 29',
    description:
      'BlackFacts.com Fact Of The Day for October 29, On this Day in 1969, The Supreme Court orders immediate school desegregation.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #segregation',
    thumbnail: 'https://i.ytimg.com/vi/f55MBs0jX3Q/maxresdefault.jpg',
    index: 301,
  },
  1030: {
    videoKey: '-iwBFz0le-Q',
    title: 'BlackFacts Minute: October 30',
    description:
      'BlackFacts.com Fact Of The Day for October 30, On this Day in 1945, Jackie Robinson breaks the color barrier in baseball.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #jackierobinson #mlb',
    thumbnail: 'https://i.ytimg.com/vi/-iwBFz0le-Q/maxresdefault.jpg',
    index: 302,
  },
  1031: {
    videoKey: 'Kli11KBQ8GM',
    title: 'BlackFacts Minute: October 31',
    description:
      'BlackFacts.com Fact Of The Day for October 30, On this Day in 1950, Earl Francis Lloyd became the first African American to play in an NBA game.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #nba',
    thumbnail: 'https://i.ytimg.com/vi/Kli11KBQ8GM/maxresdefault.jpg',
    index: 303,
  },
  1101: {
    videoKey: 'Ah8p1u0mfnQ',
    title: 'BlackFacts Minute: November 1',
    description:
      'BlackFacts.com Fact Of The Day for November 1st, On this Day in 1942, John H. Johnson published first issue of Negro Digest.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blacknews',
    thumbnail: 'https://i.ytimg.com/vi/Ah8p1u0mfnQ/maxresdefault.jpg',
    index: 304,
  },
  1102: {
    videoKey: 'NAET9yF1ATs',
    title: 'BlackFacts Minute: November 2',
    description:
      'BlackFacts.com Fact Of The Day for November 2, On this Day in 1903, Business and civic leader, Maggie L. Walker, opens the St Luke Penny Savings Bank.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blacknews #blackbusiness',
    thumbnail: 'https://i.ytimg.com/vi/NAET9yF1ATs/maxresdefault.jpg',
    index: 305,
  },
  1103: {
    videoKey: 'GtLA2GcN7uM',
    title: 'BlackFacts Minute: November 3',
    description:
      'BlackFacts.com Fact Of The Day for November 3, On this Day in 1949, Boxer Larry Holmes was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #boxing #larryholmes',
    thumbnail: 'https://i.ytimg.com/vi/GtLA2GcN7uM/maxresdefault.jpg',
    index: 306,
  },
  1104: {
    videoKey: 'QqYfbonRqCU',
    title: 'BlackFacts Minute: November 4',
    description:
      'BlackFacts.com Fact Of The Day for November 4, On this Day in 1879, Inventor Thomas Elkins patented an improved refrigerator.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackinventors #blackfirst',
    thumbnail: 'https://i.ytimg.com/vi/QqYfbonRqCU/maxresdefault.jpg',
    index: 307,
  },
  1105: {
    videoKey: 'Pqc97MCEJi4',
    title: 'BlackFacts Minute: November 5',
    description:
      'BlackFacts.com Fact Of The Day for November 5, On this Day in 1974, George L. Brown became Lieutenant Governor of Colorado.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/Pqc97MCEJi4/maxresdefault.jpg',
    index: 308,
  },
  1106: {
    videoKey: 'jtb0w8cqZKk',
    title: 'BlackFacts Minute: November 6',
    description:
      'BlackFacts.com Fact Of The Day for November 6, On this Day in 1990, Sharon Pratt Dixon became the first woman mayor of Washington, D.C.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackfirsts #blackwomen',
    thumbnail: 'https://i.ytimg.com/vi/jtb0w8cqZKk/maxresdefault.jpg',
    index: 309,
  },
  1107: {
    videoKey: 'ta3csiorasE',
    title: 'BlackFacts Minute: November 7',
    description:
      'BlackFacts.com Fact Of The Day for November 7, On this Day in 1967, Politician Edward Brooke was awarded the Spingarn Medal from the NAACP.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #naacp',
    thumbnail: 'https://i.ytimg.com/vi/ta3csiorasE/maxresdefault.jpg',
    index: 310,
  },
  1108: {
    videoKey: '1KYpmx6mDaY',
    title: 'BlackFacts Minute: November 8',
    description:
      'BlackFacts.com Fact Of The Day for November 8, On this Day in 1920, Actress Esther Rolle was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackfirsts #blackwomen',
    thumbnail: 'https://i.ytimg.com/vi/1KYpmx6mDaY/maxresdefault.jpg',
    index: 311,
  },
  1109: {
    videoKey: 'LqP5132OR9Y',
    title: 'BlackFacts Minute: November 9',
    description:
      'BlackFacts.com Fact Of The Day for November 9, On this Day in 1868, Medical School at Howard University opens with eight students.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #howarduniversity #hbcu',
    thumbnail: 'https://i.ytimg.com/vi/LqP5132OR9Y/maxresdefault.jpg',
    index: 312,
  },
  1110: {
    videoKey: 'YIFK2DWhgWA',
    title: 'BlackFacts Minute: November 10',
    description:
      'BlackFacts.com Fact Of The Day for November 10, Golfer Charlie Sifford became the first Black person to win a major professional.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackfirsts #golf',
    thumbnail: 'https://i.ytimg.com/vi/YIFK2DWhgWA/maxresdefault.jpg',
    index: 313,
  },
  1111: {
    videoKey: '__0b7xDuZTE',
    title: 'BlackFacts Minute: November 11',
    description:
      'BlackFacts.com Fact Of The Day for November 11, On this Day in 1989, Civil Rights Memorial is dedicated in Montgomery, Alabama.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights',
    thumbnail: 'https://i.ytimg.com/vi/__0b7xDuZTE/maxresdefault.jpg',
    index: 314,
  },
  1112: {
    videoKey: 'lpWYmg4Dcg0',
    title: 'BlackFacts.com celebrates Founders Day (Nov12th) for Sigma Gamma Rho Sorority.',
    description:
      'Fact-Of-The-Day for: November 12 - On this day in 1922, Sigma Gamma Rho Sorority, Incorporated was founded at Butler University',
    thumbnail: 'https://i.ytimg.com/vi/lpWYmg4Dcg0/maxresdefault.jpg',
    index: 315,
  },
  1113: {
    videoKey: 'q4gaP3UHzAY',
    title: 'BlackFacts Minute: November 13',
    description:
      'BlackFacts.com Fact Of The Day for November 13, On this Day in 1955, Actress Whoopi Goldberg was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #whoopigoldberg #colorpurple',
    thumbnail: 'https://i.ytimg.com/vi/q4gaP3UHzAY/maxresdefault.jpg',
    index: 316,
  },
  1114: {
    videoKey: 'PXXT8MskS5E',
    title: 'BlackFacts Minute: November 14',
    description:
      'BlackFacts.com Fact Of The Day for November 14, On this Day in 1954, Politician Condoleezza Rice was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackwomen',
    thumbnail: 'https://i.ytimg.com/vi/PXXT8MskS5E/maxresdefault.jpg',
    index: 317,
  },
  1115: {
    videoKey: 'mu7q5cs5t8o',
    title: 'BlackFacts Minute: November 15',
    description:
      'BlackFacts.com Fact Of The Day for November 15, On this Day in 1898, Lyda D. Newman patented an improved hairbrush.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackwomen #blackinventors',
    thumbnail: 'https://i.ytimg.com/vi/mu7q5cs5t8o/maxresdefault.jpg',
    index: 318,
  },
  1116: {
    videoKey: 'lbZvruj5Ebw',
    title: 'BlackFacts Minute: November 16',
    description:
      'BlackFacts.com Fact Of The Day for November 16, On this Day in 1873, First Black graduate of Harvard University, Richard T. Greener, named professor at the University of South Carolina.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackfirst #blackeducators',
    thumbnail: 'https://i.ytimg.com/vi/lbZvruj5Ebw/maxresdefault.jpg',
    index: 319,
  },
  1117: {
    videoKey: 'bKUoHOPywFs',
    title: 'BlackFacts.com celebrates Founders Day (Nov 17th) for Omega Psi Phi Fraternity',
    description:
      'Fact-Of-The-Day for: November 17 - On this day in 1911, Omega Psi Phi Fraternity, Incorporated was founded at Howard University.',
    thumbnail: 'https://i.ytimg.com/vi/bKUoHOPywFs/maxresdefault.jpg',
    index: 320,
  },
  1118: {
    videoKey: 'oVEUWcPnsXo',
    title: 'BlackFacts Minute: November 18',
    description:
      'BlackFacts.com Fact Of The Day for November 18, On this Day in 1956, NFL Quarterback Warren Moon was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackfirst',
    thumbnail: 'https://i.ytimg.com/vi/oVEUWcPnsXo/maxresdefault.jpg',
    index: 321,
  },
  1119: {
    videoKey: '5BYiTGVQ-0c',
    title: 'BlackFacts Minute: November 19',
    description:
      'BlackFacts.com Fact Of The Day for November 19, On this Day in 1953, Roy Campanella was named Most Valuable Player of the National Baseball League for the second time.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/5BYiTGVQ-0c/maxresdefault.jpg',
    index: 322,
  },
  1120: {
    videoKey: 'R-l1nXM2Nb0',
    title: 'BlackFacts Minute: November 20',
    description:
      'BlackFacts.com Fact Of The Day for November 20, On this Day in 1976, Gymnastic Dominique Dawes was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/R-l1nXM2Nb0/maxresdefault.jpg',
    index: 323,
  },
  1121: {
    videoKey: 'pkX3BvlQ8U8',
    title: 'BlackFacts Minute: November 21',
    description:
      'BlackFacts.com Fact Of The Day for November 21, On this Day in 1931, Ella Fitzgerald makes her singing debut at the Apollo Theatre in Harlem, New York  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackwomen #ellafitzgerald',
    thumbnail: 'https://i.ytimg.com/vi/pkX3BvlQ8U8/maxresdefault.jpg',
    index: 324,
  },
  1122: {
    videoKey: 'NxAmO3xonAk',
    title: 'BlackFacts Minute: November 22',
    description:
      'BlackFacts.com Fact Of The Day for November 22, On this Day in 1963, John F. Kennedy was assassinated.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #jfk #johnfkennedy',
    thumbnail: 'https://i.ytimg.com/vi/NxAmO3xonAk/maxresdefault.jpg',
    index: 325,
  },
  1123: {
    videoKey: 'WTSjlCIBadU',
    title: 'BlackFacts Minute: November 23',
    description:
      'BlackFacts.com Fact Of The Day for November 23, On this Day in 1990, The Piano Lesson, a play by August Wilson, wins the Pulitzer Prize for drama.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #pulitzerprize',
    thumbnail: 'https://i.ytimg.com/vi/WTSjlCIBadU/maxresdefault.jpg',
    index: 326,
  },
  1124: {
    videoKey: 'KIhyKBU6Ovw',
    title: 'BlackFacts Minute: November 24',
    description:
      'BlackFacts.com Fact Of The Day for November 24, On this Day in 1874, Robert B. Elliott elected Speaker of the lower house of the South Carolina legislature.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/KIhyKBU6Ovw/maxresdefault.jpg',
    index: 327,
  },
  1125: {
    videoKey: 'isBWRzCgHLw',
    title: 'BlackFacts Minute: November 25',
    description:
      'BlackFacts.com Fact Of The Day for November 25, On this Day in 1903, Athlete William DeHart Hubbard was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/isBWRzCgHLw/maxresdefault.jpg',
    index: 328,
  },
  1126: {
    videoKey: '3Yecjy78yww',
    title: 'BlackFacts Minute: November 26',
    description:
      'BlackFacts.com Fact Of The Day for November 26, On this Day in 1939, Tina Turner was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #tinaturner',
    thumbnail: 'https://i.ytimg.com/vi/3Yecjy78yww/maxresdefault.jpg',
    index: 329,
  },
  1127: {
    videoKey: '2dXWO-L1NL8',
    title: 'BlackFacts Minute: November 27',
    description:
      'BlackFacts.com Fact Of The Day for November 27, On this Day in 1942, Jimi Hendrix was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #jimihendrix',
    thumbnail: 'https://i.ytimg.com/vi/2dXWO-L1NL8/maxresdefault.jpg',
    index: 330,
  },
  1128: {
    videoKey: 'dIVrriBYKio',
    title: 'BlackFacts Minute: November 28',
    description:
      'BlackFacts.com Fact Of The Day for November 28, On this Day in 1961, Ernie Davis became the first African American to win the Heisman Trophy.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #heismantrophy #heisman',
    thumbnail: 'https://i.ytimg.com/vi/dIVrriBYKio/maxresdefault.jpg',
    index: 331,
  },
  1129: {
    videoKey: 'PXVDu9wY3Vs',
    title: 'BlackFacts Minute: November 29',
    description:
      'BlackFacts.com Fact Of The Day for November 29, On this Day in 1961, Freedom Riders attacked by white mob.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights',
    thumbnail: 'https://i.ytimg.com/vi/PXVDu9wY3Vs/maxresdefault.jpg',
    index: 332,
  },
  1130: {
    videoKey: 'C4X9jlRpQbs',
    title: 'BlackFacts Minute: November 30',
    description:
      'BlackFacts.com Fact Of The Day for November 30, On this Day in 1912, Photographer and filmmaker Gordon Parks was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/C4X9jlRpQbs/maxresdefault.jpg',
    index: 333,
  },
  1201: {
    videoKey: '28W6jDNyql8',
    title: 'BlackFacts Minute: December 1',
    description:
      'BlackFacts.com Fact Of The Day for December 1st, On this Day in 1955, Rosa Parks refused to change seats on a bus.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #rosaparks',
    thumbnail: 'https://i.ytimg.com/vi/28W6jDNyql8/maxresdefault.jpg',
    index: 334,
  },
  1202: {
    videoKey: 'pWyeTvglhWA',
    title: 'BlackFacts Minute: December 2',
    description:
      'BlackFacts.com Fact Of The Day for December 2, On this Day in 1969, Marie Van Brittan Brown patented home security system.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #blackinventors',
    thumbnail: 'https://i.ytimg.com/vi/pWyeTvglhWA/maxresdefault.jpg',
    index: 335,
  },
  1203: {
    videoKey: 'xXKtee5Na4U',
    title: 'BlackFacts Minute: December 3',
    description:
      'BlackFacts.com Fact Of The Day for December 3, On this Day in 1847, The North Star, an anti-slavery newspaper, was started by Frederick Douglass.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #frederickdouglass',
    thumbnail: 'https://i.ytimg.com/vi/xXKtee5Na4U/maxresdefault.jpg',
    index: 336,
  },
  1204: {
    videoKey: 'AbFkRzcXv8s',
    title: 'BlackFacts Minute: December 4',
    description:
      'BlackFacts.com Fact Of The Day for December 4, On this Day in 1969, Musician Jay Z was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #jayz',
    thumbnail: 'https://i.ytimg.com/vi/AbFkRzcXv8s/maxresdefault.jpg',
    index: 337,
  },
  1205: {
    videoKey: 'GuprMT2w2-8',
    title: 'BlackFacts Minute: December 5',
    description:
      'BlackFacts.com Fact Of The Day for December 5, On this Day in 1955, Historic bus boycott began in Montgomery.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights',
    thumbnail: 'https://i.ytimg.com/vi/GuprMT2w2-8/maxresdefault.jpg',
    index: 338,
  },
  1206: {
    videoKey: 'bwVd_WHqQtQ',
    title: 'BlackFacts Minute: December 6',
    description:
      'BlackFacts.com Fact Of The Day for December 6, On this Day in 1865, The 13th Amendment to the U.S. Constitution, officially ending the institution of slavery, is ratified.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #slavery',
    thumbnail: 'https://i.ytimg.com/vi/bwVd_WHqQtQ/maxresdefault.jpg',
    index: 339,
  },
  1207: {
    videoKey: '3_M9syfiglA',
    title: 'BlackFacts Minute: December 7',
    description:
      "BlackFacts.com Fact Of The Day for December 7, On this Day in 1941, Doris 'Dorie' Miller defends U.S. ships during Pearl Harbor attack.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #pearlharbor",
    thumbnail: 'https://i.ytimg.com/vi/3_M9syfiglA/maxresdefault.jpg',
    index: 340,
  },
  1208: {
    videoKey: 'KjPV4nrohZw',
    title: 'BlackFacts Minute: December 8',
    description:
      'BlackFacts.com Fact Of The Day for December 8, On this Day in 1987, Kurt Schmoke becomes the first African American mayor of Baltimore, MD.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/KjPV4nrohZw/maxresdefault.jpg',
    index: 341,
  },
  1209: {
    videoKey: 'MRqvTsi0gw4',
    title: 'BlackFacts Minute: December 9',
    description:
      'BlackFacts.com Fact Of The Day for December 9, On this Day in 1833, The Philadelphia Female Anti-Slavery Society was founded  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #slavery',
    thumbnail: 'https://i.ytimg.com/vi/MRqvTsi0gw4/maxresdefault.jpg',
    index: 342,
  },
  1210: {
    videoKey: 'RNlkZ7ynQRY',
    title: 'BlackFacts Minute: December 10',
    description:
      'BlackFacts.com Fact Of The Day for December 10, On this Day in 1950, Ralph J. Bunche became the first African American to be awarded a Nobel Prize.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #nobelprize',
    thumbnail: 'https://i.ytimg.com/vi/RNlkZ7ynQRY/maxresdefault.jpg',
    index: 343,
  },
  1211: {
    videoKey: 'JehHAfPU4Uw',
    title: 'BlackFacts Minute: December 11',
    description:
      "BlackFacts.com Fact Of The Day for December 11, On this Day in 1961, Langston Hughes’ musical play 'Black Nativity' opened on Broadway.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts",
    thumbnail: 'https://i.ytimg.com/vi/JehHAfPU4Uw/maxresdefault.jpg',
    index: 344,
  },
  1212: {
    videoKey: 'nue1n_kjRt4',
    title: 'BlackFacts Minute: December 12',
    description:
      'BlackFacts.com Fact Of The Day for December 12, On this Day in 1870, Joseph H. Rainey became the first African American elected to Congress to represent South Carolina.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts',
    thumbnail: 'https://i.ytimg.com/vi/nue1n_kjRt4/maxresdefault.jpg',
    index: 345,
  },
  1213: {
    videoKey: '51BhjbQkWmc',
    title: 'BlackFacts Minute: December 13',
    description:
      'BlackFacts.com Fact Of The Day for December 13, On this Day in 1903, Activist Ella Baker was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/51BhjbQkWmc/maxresdefault.jpg',
    index: 346,
  },
  1214: {
    videoKey: 'mRGbJ3Ezqwo',
    title: 'BlackFacts Minute: December 14',
    description:
      'BlackFacts.com Fact Of The Day for December 14, On this Day in 1959, Motown Record Company, the first large Black-owned music company in America, was founded.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #motown',
    thumbnail: 'https://i.ytimg.com/vi/mRGbJ3Ezqwo/maxresdefault.jpg',
    index: 347,
  },
  1215: {
    videoKey: 'r9mwyB7pk50',
    title: 'BlackFacts Minute: December 15',
    description:
      'BlackFacts.com Fact Of The Day for December 15, On this Day in 2006, B.B. King received the Presidential Medal of Freedom.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #bbking',
    thumbnail: 'https://i.ytimg.com/vi/r9mwyB7pk50/maxresdefault.jpg',
    index: 348,
  },
  1216: {
    videoKey: 'b3SpYVu-7Pw',
    title: 'BlackFacts Minute: December 16',
    description:
      'BlackFacts.com Fact Of The Day for December 16, On this Day in 1946, The first coin honoring a Person of Color (Booker T. Washington) was issued.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #bookertwashington',
    thumbnail: 'https://i.ytimg.com/vi/b3SpYVu-7Pw/maxresdefault.jpg',
    index: 349,
  },
  1217: {
    videoKey: 'oCSbx1xX33s',
    title: 'BlackFacts Minute: December 17',
    description:
      'BlackFacts.com Fact Of The Day for December 17, On this Day in 1991, Michael Jordan is named Sports Illustrated Sportsman of the Year.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #michaeljordan #sportsillustrated',
    thumbnail: 'https://i.ytimg.com/vi/oCSbx1xX33s/maxresdefault.jpg',
    index: 350,
  },
  1218: {
    videoKey: 'cRKWVcy3Qe8',
    title: 'BlackFacts Minute: December 18',
    description:
      'BlackFacts.com Fact Of The Day for December 18, On this Day in 1917, Actor, director and activist Ossie Davis was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/cRKWVcy3Qe8/maxresdefault.jpg',
    index: 351,
  },
  1219: {
    videoKey: 'v1jo_LDQBH0',
    title: 'BlackFacts Minute: December 19',
    description:
      'BlackFacts.com Fact Of The Day for December 19, On this Day in 1875, Carter G. Woodson was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #cartergwoodson',
    thumbnail: 'https://i.ytimg.com/vi/v1jo_LDQBH0/maxresdefault.jpg',
    index: 352,
  },
  1220: {
    videoKey: 'Y3NGxOBoKz8',
    title: 'BlackFacts Minute: December 20',
    description:
      'BlackFacts.com Fact Of The Day for December 20, On this Day in 1860, South Carolina became the first state to secede from the federal Union.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #civilwar',
    thumbnail: 'https://i.ytimg.com/vi/Y3NGxOBoKz8/maxresdefault.jpg',
    index: 353,
  },
  1221: {
    videoKey: 'akOe0vIZfHo',
    title: 'BlackFacts Minute: December 21',
    description:
      'BlackFacts.com Fact Of The Day for December 21, On this Day in 1911, Baseball player Josh Gibson was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/akOe0vIZfHo/maxresdefault.jpg',
    index: 354,
  },
  1222: {
    videoKey: 'OUs5CpCY-dA',
    title: 'BlackFacts Minute: December 22',
    description:
      'BlackFacts.com Fact Of The Day for December 22, On this Day in 1960, Painter Jean-Michel Basquiat was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/OUs5CpCY-dA/maxresdefault.jpg',
    index: 355,
  },
  1223: {
    videoKey: 'evDbvO_MEvU',
    title: 'BlackFacts Minute: December 23',
    description:
      'BlackFacts.com Fact Of The Day for December 23, On this Day in 1867, Madam CJ Walker was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #madamcjwalker',
    thumbnail: 'https://i.ytimg.com/vi/evDbvO_MEvU/maxresdefault.jpg',
    index: 356,
  },
  1224: {
    videoKey: 'SmKjqSxaNeM',
    title: 'BlackFacts Minute: December 24',
    description:
      'BlackFacts.com Fact Of The Day for December 24, On this Day in 1832, The Georgia Infirmary, the first hospital for African Americans, was built in the U. S.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm',
    thumbnail: 'https://i.ytimg.com/vi/SmKjqSxaNeM/maxresdefault.jpg',
    index: 357,
  },
  1225: {
    videoKey: 'cxeztWaDe7w',
    title: 'BlackFacts Minute: December 25',
    description:
      'BlackFacts.com Fact Of The Day for December 25, On this Day in 1907, Singer Cabell  Cab  Calloway was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #cabcalloway',
    thumbnail: 'https://i.ytimg.com/vi/cxeztWaDe7w/maxresdefault.jpg',
    index: 358,
  },
  1226: {
    videoKey: 'jsda2RtW0fc',
    title: 'BlackFacts Minute: December 26',
    description:
      'BlackFacts.com Fact Of The Day for December 26, On this Day in 1966, Kwanzaa is started by Maulana Karenga.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #kwanzaa',
    thumbnail: 'https://i.ytimg.com/vi/jsda2RtW0fc/maxresdefault.jpg',
    index: 359,
  },
  1227: {
    videoKey: 'IBA8agml5SM',
    title: 'BlackFacts Minute: December 27',
    description:
      'BlackFacts.com Fact Of The Day for December 27, On this Day in 1892, First Black intercollegiate football game was played.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #football',
    thumbnail: 'https://i.ytimg.com/vi/IBA8agml5SM/maxresdefault.jpg',
    index: 360,
  },
  1228: {
    videoKey: 'Qh7ZYAm6GtY',
    title: 'BlackFacts Minute: December 28',
    description:
      'BlackFacts.com Fact Of The Day for December 28, On this Day in 1954, Actor Denzel Washington was born.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #denzelwashington',
    thumbnail: 'https://i.ytimg.com/vi/Qh7ZYAm6GtY/maxresdefault.jpg',
    index: 361,
  },
  1229: {
    videoKey: 'Z2UjmTBVI1g',
    title: 'BlackFacts Minute: December 29',
    description:
      "BlackFacts.com Fact Of The Day for December 29, On this Day in 1992, Whitney Houston's  I Will Always Love You  is certified Gold, Platinum and Triple Platinum.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #whitneyhouston",
    thumbnail: 'https://i.ytimg.com/vi/Z2UjmTBVI1g/maxresdefault.jpg',
    index: 362,
  },
  1230: {
    videoKey: 'kyQ_DYnGx8M',
    title: 'BlackFacts Minute: December 30',
    description:
      "BlackFacts.com Fact Of The Day for December 30, On this Day in 1929,  Don't Buy Where You Can't Work  movement started in Chicago.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm",
    thumbnail: 'https://i.ytimg.com/vi/kyQ_DYnGx8M/maxresdefault.jpg',
    index: 363,
  },
  1231: {
    videoKey: 'ggNFNZkyfDY',
    title: 'BlackFacts Minute: December 31',
    description:
      'BlackFacts.com Fact Of The Day for December 31, On this Day in 1862, Watch Nights, the meetings for Emancipation Proclamation.  Narrated by BlackFacts.com A.I. driven Digital Griot -  Timbuktu(tm)  #blackhistorymonth #blackhistory #blackfacts #civilrights #blm #emancipationday #emancipation',
    thumbnail: 'https://i.ytimg.com/vi/ggNFNZkyfDY/maxresdefault.jpg',
    index: 364,
  },
};

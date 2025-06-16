import { DocumentProps, DocumentTextType } from './documentProps';

export const faq: DocumentProps[] = [
  [DocumentTextType.Title, 'FAQ'],
  [DocumentTextType.Subtitle, 'Jak zamówić?'],
  [DocumentTextType.Paragraph, 'Zamówienie możesz złożyć na trzy sposoby: '],
  [
    DocumentTextType.List,
    [
      'Wypełnij formularz zamówień na stronie (proszę o dodanie formularza z polami: Imię, Telefon/Email, Rodzaj butli/usługi, Ilość, Adres dostawy - wysyłka na zamowienia@butleco2.pl).',
      'Wyślij SMS na 500-612-755 z krótką informacją (np. "2 butle CO2 10 kg, ul. X").',
      'Zadzwoń pod 500-612-755 i podaj szczegóły - doradzimy i przyjmiemy zamówienie od razu.',
    ],
  ],
  [DocumentTextType.Subtitle, 'Czy butle mają atesty?'],
  [
    DocumentTextType.Paragraph,
    'Tak, wszystkie nasze butle są atestowane, a CO2 posiada certyfikat spożywczy, co gwarantuje bezpieczeństwo w gastronomii i domu.',
  ],
  [DocumentTextType.Subtitle, 'Jak szybko realizujecie dostawę?'],
  [
    DocumentTextType.Paragraph,
    'Zamówienia złożone do 10:00 dostarczamy tego samego dnia na terenie Warszawy i okolic. W innych przypadkach - maksymalnie w 24h.',
  ],
  [DocumentTextType.Subtitle, 'Czy mogę zwrócić butlę?'],
  [
    DocumentTextType.Paragraph,
    'Tak, oferujemy elastyczne opcje zwrotu w ramach wynajmu - skontaktuj się z nami, by ustalić szczegóły.',
  ],
];

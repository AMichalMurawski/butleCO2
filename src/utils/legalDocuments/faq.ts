import { DocumentProps, DocumentTextType } from './documentProps';

export const faq: DocumentProps = {
  title: 'FAQ',
  hideSection: true,
  contents: [
    {
      subtitle: 'Jak zamówić?',
      section: [
        [DocumentTextType.Paragraph, 'Zamówienie możesz złożyć na trzy sposoby: '],
        [
          DocumentTextType.List,
          [
            'Wypełnij formularz zamówień na stronie.',
            'Wyślij SMS na 500-612-755 z krótką informacją (np. "2 butle CO2 10 kg, ul. Abc, miejscowość: Xyz").',
            'Zadzwoń pod 500-612-755 i podaj szczegóły - doradzimy i przyjmiemy zamówienie od razu.',
          ],
        ],
      ]
    },
    {
      subtitle: 'Czy butle mają atesty?',
      section: [
        [
          DocumentTextType.Paragraph,
          'Tak, wszystkie nasze butle są atestowane, a CO2 posiada certyfikat spożywczy, co gwarantuje bezpieczeństwo w gastronomii i domu.',
        ],
      ]
    },
    {
      subtitle: 'Jak szybko realizujecie dostawę?',
      section: [
        [
          DocumentTextType.Paragraph,
          'Zamówienia złożone do 10:00 dostarczamy tego samego dnia na terenie Warszawy i okolic. W innych przypadkach - maksymalnie w 24h.',
        ],
      ]
    },
    {
      subtitle: 'Czy mogę zwrócić butlę?',
      section: [
        [
          DocumentTextType.Paragraph,
          'Tak, oferujemy elastyczne opcje zwrotu w ramach wynajmu - skontaktuj się z nami, by ustalić szczegóły.',
        ],
      ]
    },
  ]
};

import { DocumentProps, DocumentTextType } from './documentProps';

export const termsOfService: DocumentProps = {
  title: 'Regulamin strony internetowej',
  hideSection: false,
  contents: [
    {
      subtitle: '1. Postanowienia ogólne',
      section: [
        [
          DocumentTextType.Paragraph,
          '1.1. Niniejszy Regulamin określa zasady korzystania ze strony internetowej www.butleco2.pl, dalej zwaną „Stroną”. Właścicielem Strony jest ButleCO2.PL Artur Rembek, ul. Poprawna 105A, 03-984 Warszawa, NIP: 9522030252.',
        ],
      ]
    },
    {
      subtitle: '2. Warunki korzystania',
      section: [
        [
          DocumentTextType.Paragraph,
          '2.1. Korzystanie ze Strony jest możliwe pod warunkiem posiadania urządzenia z dostępem do Internetu oraz przeglądarki internetowej.',
        ],
        [
          DocumentTextType.Paragraph,
          '2.2. Użytkownik zobowiązuje się do przestrzegania Regulaminu oraz obowiązujących przepisów prawa.',
        ],
        [
          DocumentTextType.Paragraph,
          '2.3. Usługi świadczone przez Stronę:',
        ],
        [
          DocumentTextType.List,
          [
            'napełnianie butli CO2',
            'wymiana / napełnianie butli do saturatorów wody',
            'wynajem / sprzedaż butli CO2 o wadze 1.5kg, 2kg, 3.7kg, 5kg, 6kg, 7.5kg, 10kg, 18kg, 26kg',
            'wynajem / sprzedaż butli Argon, Argon+CO2, Azot, Azot+CO2 o pojemności 8 litrów',
            'wynajem / sprzedaż butli Propan o pojemności 10 litrów',
          ],
        ],
      ]
    },
    {
      subtitle: '4. Zasady użytkowania',
      section: [
        [
          DocumentTextType.Paragraph,
          '4.1. Zabronione jest:',
        ],
        [
          DocumentTextType.List,
          [
            'publikowanie treści niezgodnych z prawem',
            'naruszanie praw osób trzecich',
            'podejmowanie działań mogących zakłócić funkcjonowanie Strony'
          ],
        ],
        [
          DocumentTextType.Paragraph,
          '4.2. Administrator zastrzega sobie prawo do zablokowania dostępu użytkownikom naruszającym Regulamin.',
        ],
      ]
    },
    {
      subtitle: '5. Odpowiedzialność',
      section: [
        [
          DocumentTextType.Paragraph,
          '5.1. Administrator nie ponosi odpowiedzialności za przerwy w działaniu Strony wynikające z przyczyn niezależnych.',
        ],
        [
          DocumentTextType.Paragraph,
          '5.2. Administrator nie odpowiada za treści publikowane przez użytkowników.',
        ],
      ]
    },
    {
      subtitle: '6. Postanowienia końcowe',
      section: [
        [
          DocumentTextType.Paragraph,
          '6.1. Regulamin wchodzi w życie z dniem publikacji na Stronie.',
        ],
        [
          DocumentTextType.Paragraph,
          '6.2. Administrator zastrzega sobie prawo do zmiany Regulaminu. Zmiany będą publikowane na Stronie.',
        ],
      ]
    },
    {
      subtitle: '7. Kontakt',
      section: [
        [
          DocumentTextType.Paragraph,
          '7.1. W sprawach związanych z Regulaminem prosimy o kontakt pod adresem: biuro@butleco2.pl',
        ],
      ]
    },
  ]
};

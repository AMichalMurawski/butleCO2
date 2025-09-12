import { DocumentProps, DocumentTextType } from './documentProps';

export const privacyPolicy: DocumentProps = {
  title: 'Polityka prywatności',
  hideSection: false,
  contents: [
    {
      subtitle: '1. Informacje ogólne',
      section: [
        [
          DocumentTextType.Paragraph,
          '1.1. Niniejsza Polityka prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników strony internetowej butleco2.pl, dalej zwaną „Stroną” zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).',
        ],
        [
          DocumentTextType.Paragraph,
          '1.2. Administratorem danych osobowych jest ButleCO2.PL Artur Rembek, ul. Poprawna 105A, 03-984 Warszawa, NIP: 9522030252, kontakt: biuro@butleco2.pl.'
        ]
      ]
    },
    {
      subtitle: '2. Cel i podstawa prawna przetwarzania danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '2.1. Dane osobowe użytkowników są przetwarzane w celu:',
        ],
        [
          DocumentTextType.List,
          [
            'świadczenia usług dostępnych na Stronie (podstawa prawna: art. 6 ust. 1 lit. b RODO)',
            'realizacji obowiązków prawnych ciążących na Administratorze (podstawa prawna: art. 6 ust. 1 lit. c RODO)',
            'marketingu usług własnych Administratora, o ile użytkownik wyraził na to zgodę (podstawa prawna: art. 6 ust. 1 lit. a RODO)'
          ]
        ]
      ]
    },
    {
      subtitle: '3. Rodzaje zbieranych danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '3.1. Strona zbiera następujące dane osobowe:'
        ],
        [
          DocumentTextType.List,
          [
            'imię i nazwisko',
            'adres e-mail',
            'dane miejsca dostawy',
            'dane firmy potrzebne do wystawienia faktury'
          ]
        ]
      ]
    },
    {
      subtitle: '4. Bezpieczeństwo danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '4.1. Administrator stosuje odpowiednie środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo danych (np. ograniczenie dostępu).',
        ],
        [
          DocumentTextType.Paragraph,
          '4.2. W przypadku naruszenia ochrony danych Administrator poinformuje użytkowników oraz organ nadzorczy zgodnie z RODO.',
        ],
      ]
    },
    {
      subtitle: '5. Okres przechowywania danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '5.1. Dane osobowe są przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, lub przez okres wynikający z przepisów prawa.'
        ]
      ]
    },
    {
      subtitle: '5. Prawa użytkownika',
      section: [
        [
          DocumentTextType.Paragraph,
          '5.1 Użytkownik ma prawo do:',
        ],
        [
          DocumentTextType.List,
          [
            'dostępu do danych osobowych',
            'ich sprostowania, usunięcia lub ograniczenia przetwarzania',
            'wniesienia sprzeciwu wobec przetwarzania',
            'przenoszenia danych',
            'cofnięcia zgody na przetwarzanie danych w dowolnym momencie',
            'wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych'
          ],
        ],
      ]
    },
    {
      subtitle: '6. Udostępnianie danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '6.1. Dane osobowe mogą być przekazywane podmiotom współpracującym z Administratorem (np. dostawcom usług hostingowych, narzędzi analitycznych) wyłącznie w zakresie niezbędnym do realizacji usług.'
        ]
      ]
    },
    {
      subtitle: '6. Kontakt',
      section: [
        [
          DocumentTextType.Paragraph,
          'W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem: biuro@butleco2.pl.',
        ],
      ]
    },
  ]
};

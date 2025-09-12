import { DocumentProps, DocumentTextType } from './documentProps';

export const dataProtectionPolicy: DocumentProps = {
  title: 'Zasady ochrony danych',
  hideSection: false,
  contents: [
    {
      subtitle: '1. Wstęp',
      section: [
        [
          DocumentTextType.Paragraph,
          '1.1. Niniejszy dokument określa zasady ochrony danych osobowych użytkowników strony internetowej [Nazwa Twojej strony] (dalej: „Strona”) zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).',
        ],
      ]
    },
    {
      subtitle: '2. Administrator danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '2.1. Administratorem danych osobowych jest ButleCo2.pl Artur Rembek, ul. Poprawna 105A, 03-984 Warszawa, NIP: 9522030252. Kontakt: biuro@butleco2.pl.',
        ],
      ]
    },
    {
      subtitle: '3. Zasady przetwarzania danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '3.1. Dane osobowe są przetwarzane w sposób zgodny z prawem, rzetelny i przejrzysty.',
        ],
        [
          DocumentTextType.Paragraph,
          '3.2. Dane są zbierane w konkretnych, wyraźnych i prawnie uzasadnionych celach.',
        ],
        [
          DocumentTextType.Paragraph,
          '3.3. Przetwarzanie danych jest ograniczone do minimum niezbędnego do realizacji celów.',
        ],
      ]
    },
    {
      subtitle: '4. Bezpieczeństwo danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '4.1. Administrator stosuje odpowiednie środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo danych (np. szyfrowanie, ograniczenie dostępu).',
        ],
        [
          DocumentTextType.Paragraph,
          '4.2. W przypadku naruszenia ochrony danych Administrator poinformuje użytkowników oraz organ nadzorczy zgodnie z RODO.',
        ],
      ]
    },
    {
      subtitle: '5. Prawa użytkowników',
      section: [
        [
          DocumentTextType.Paragraph,
          '5.1. Użytkownik ma prawo do:',
        ],
        [
          DocumentTextType.List,
          [
            'dostępu do danych',
            'sprostowania, usunięcia lub ograniczenia przetwarzania',
            'wniesienia sprzeciwu wobec przetwarzania',
            'przenoszenia danych',
            'wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych'
          ],
        ],
      ]
    },
    {
      subtitle: '6. Kontakt z Inspektorem Ochrony Danych',
      section: [
        [
          DocumentTextType.Paragraph,
          '6.1. W sprawach związanych z ochroną danych prosimy o kontakt pod adresem: biuro@butleco2.pl.',
        ],
      ]
    },
  ]
};

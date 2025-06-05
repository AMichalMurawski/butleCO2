export const phoneMask = (value: string, helpers: any) => {
    const rawValue = value.replace(/\D/g, '');
    
    if (rawValue.length > 9) return;
    
    const stacionaryNumbers = [12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 29, 32, 33, 34, 41, 42, 43, 44, 46, 48, 52, 54, 55, 56, 58, 59, 61, 62, 63, 65, 67, 68, 71, 74, 75, 76, 77, 81, 82, 83, 84, 85, 86, 87, 89, 91, 94, 95];
    const includesStacionary = stacionaryNumbers.includes(Number(rawValue.substring(0, 2)));
    
    let regexPattern: RegExp;
    if (includesStacionary) {
        regexPattern = /^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/;
    } else {
        regexPattern = /^(\d{0,3})(\d{0,3})(\d{0,3})$/;
    }
    
    const formattedValue = rawValue.replace(regexPattern, (...groups: any) => {
        const matchGroups = groups.slice(1, -2);
        return matchGroups.filter(Boolean).join('-');
    });
    
    helpers.setValue(formattedValue);
};
  
export const postalCodeMask = (value: string, helpers: any) => {
    
    const rawValue = value.replace(/\D/g, '');

    if (rawValue.toString().length > 5) return

    const formattedValue = rawValue
        .replace(/^(\d{0,2})(\d{0,3})$/, '$1-$2')
        .replace(/-+$/, '');
    
    helpers.setValue(formattedValue);
};
  
export const nameMask = (value: string, helpers: any) => {
    let filtered = value.replace(/[^a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ \/-]/g, '');
  
    filtered = filtered.replace(/([ \/-])\1+/g, '$1');
  
    filtered = filtered.replace(/([ \/-])([ \/-])+/g, (_, first) => first);
  
    filtered = filtered.replace(/^\s+/, '');
  
    helpers.setValue(filtered);
  };

  export const nrLetterMask = (value: string, helpers: any) => {
    let filtered = value.replace(/[^a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\/]/g, '');
  
    filtered = filtered.replace(/\/+/g, '/');
  
    helpers.setValue(filtered);
};
  
export const emailMask = (value: string, helpers: any) => {
    const allowedCharsRegex = /[^a-zA-Z0-9._\-+@]/g;
    let filtered = value.replace(allowedCharsRegex, '');
  
    const atIndex = filtered.indexOf('@');
    if (atIndex !== -1) {
        filtered =
            filtered.slice(0, atIndex + 1) +
            filtered
                .slice(atIndex + 1)
                .replace(/@/g, '')
                .replace(/[+_]/g, '');
    }
  
    if (filtered.startsWith('@')) {
        filtered = filtered.slice(1);
    }
  
    helpers.setValue(filtered);
};

export const nipMask = (value: string, helpers: any) => {
    // Usuwamy wszystko oprócz cyfr i '-'
    let filtered = value.replace(/[^0-9-]/g, '');
  
    // Wyciągamy tylko cyfry, żeby sprawdzić ich ilość
    const digitsOnly = filtered.replace(/[^0-9]/g, '');
  
    if (digitsOnly.length > 10) return; // za dużo cyfr — przerwij
  
    if (
      digitsOnly.length === 10 &&
      filtered.length > 0 &&
      !/[0-9]$/.test(filtered)
    ) {
      // 10 cyfr, ale ostatni znak nie jest cyfrą — przerwij
      return;
    }
  
    // Usuwamy '-' z początku
    if (filtered.startsWith('-')) {
      filtered = filtered.slice(1);
    }
  
    // Zamieniamy wielokrotne '-' na pojedynczy '-'
    filtered = filtered.replace(/-+/g, '-');
  
    let digitsCount = 0;
    let result = '';
  
    for (let i = 0; i < filtered.length; i++) {
      const char = filtered[i];
  
      if (char >= '0' && char <= '9') {
        digitsCount++;
        if (digitsCount <= 10) {
          result += char;
        } else {
          break;
        }
      } else if (char === '-') {
        if (digitsCount > 0 && digitsCount < 10) {
          result += '-';
        }
      }
    }
  
    helpers.setValue(result);
  };
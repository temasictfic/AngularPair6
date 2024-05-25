import { Pipe, PipeTransform } from '@angular/core';

interface TranslationDictionary {
    [key: string]: {
      [key: string]: string;
    };
  }

@Pipe({
  name: 'translate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {

      
    private dictionary: TranslationDictionary = {
    'en': {
        'Welcome': 'Welcome',
    },
    'es': {
        'Welcome': 'Bienvenido',
    },
    'fr': {
        'Welcome': 'Bienvenue',
    }
    };
    
    transform(value: string, lang: string): string {
    if (!this.dictionary[lang] || !this.dictionary[lang][value]) {
        return value;
    }
    return this.dictionary[lang][value];
    }

}
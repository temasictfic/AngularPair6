import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formControlErrorMessage',
  pure: false,
  standalone: true,
})
export class FormControlErrorMessagePipe implements PipeTransform {
  transform(value: any): string {
    if (value) {
      if (value['required']) {
        return 'This field is required';
      } else if (value['minlength']) {
        return `Minimum length is ${value['minlength'].requiredLength}`;
      } else if (value['maxlength']) {
        return `Maximum length is ${value['maxlength'].requiredLength}`;
      } else if (value['pattern']) {
        return 'Invalid format';
      }
    }
    return "bonanza";
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './components/basic-layout/basic-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../features/products/components/loading/loading.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './interceptor/loading.interceptor';


@NgModule({
    declarations: [NavbarComponent, FooterComponent, BasicLayoutComponent, LoadingComponent], // imports kısmında modül tanımlamaları yapılır.
    exports: [BasicLayoutComponent, LoadingComponent] // declarations kısmında tanımlaan bileşenler başka bir modülde veya bir standolone componentte kullanacak isek, exports kısmına eklemek gerekiyor.
    ,
    imports: [CommonModule, RouterModule, HttpClientModule],
    providers: [
        // ...
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
      ]
})
export class SharedModule {}
// SharedModule'ı diğer modüllerde veya standolone componentlerde kullanabilmek için, imports kısmına eklemek gerekiyor.
// Böylece exports kısmında tanımlanan componentler, diğer modüllerde veya standolone componentlerde kullanılabilir hale gelir.
// Aynı zamanda imports kısmında tanımlanan modüller, SharedModule içerisindeki componentlerde kullanılabilir hale gelir. Hem de SharedModule'ı kullanan modüller veya standalones componentler de kullanabiliyor.

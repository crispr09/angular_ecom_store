import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  registerObj: any = {
    id: 0,
    userName: 'sach1',
    password: 'sach1',
    mobile: '1234',
  };
  loginObj: any = {
    userName: '1234',
    password: 'sach2',
  };
  constructor(private prodSrrvice: ProductService) {}
  onRegister() {
    this.prodSrrvice.register(this.registerObj).subscribe((res: any) => {
      debugger;
      if (res) {
        this.registerObj = res.data;
        alert('User Creation Done');
      } else {
        alert('error registering user');
      }
    });
  }
  onLogin() {
    console.log('login called');
    this.prodSrrvice.login(this.loginObj).subscribe((res: any) => {
      debugger;
      if (res) {
        this.loginObj = res.data;
        alert('User login Done');
      } else {
        alert('error login user');
      }
    });
  }
  removeItem(arg0: any) {}
  title = 'store2-ecom';
}

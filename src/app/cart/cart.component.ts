import { Component } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'สินค้าตัวอย่าง 1',
      price: 299,
      quantity: 1,
      image: 'https://cdn.discordapp.com/attachments/1264857064887554131/1356860522414477454/FB_IMG_1743571138582.jpg?ex=67ef6bd5&is=67ee1a55&hm=2b9b6015fdaa8c088b38e97551dba11d8d462b250a1fe9835c64406a55da9aec&'
    },
    {
      id: 2,
      name: 'สินค้าตัวอย่าง 2',
      price: 499,
      quantity: 2,
      image: 'https://cdn.discordapp.com/attachments/1264857064887554131/1356860522414477454/FB_IMG_1743571138582.jpg?ex=67ef6bd5&is=67ee1a55&hm=2b9b6015fdaa8c088b38e97551dba11d8d462b250a1fe9835c64406a55da9aec&'
    },
    {
      id: 3,
      name: 'สินค้าตัวอย่าง 2',
      price: 499,
      quantity: 2,
      image: 'https://cdn.discordapp.com/attachments/1264857064887554131/1356860522414477454/FB_IMG_1743571138582.jpg?ex=67ef6bd5&is=67ee1a55&hm=2b9b6015fdaa8c088b38e97551dba11d8d462b250a1fe9835c64406a55da9aec&'
    },
    {
      id: 4,
      name: 'สินค้าตัวอย่าง 2',
      price: 499,
      quantity: 2,
      image: 'https://cdn.discordapp.com/attachments/1264857064887554131/1356860522414477454/FB_IMG_1743571138582.jpg?ex=67ef6bd5&is=67ee1a55&hm=2b9b6015fdaa8c088b38e97551dba11d8d462b250a1fe9835c64406a55da9aec&'
    },
    {
      id: 5,
      name: 'สินค้าตัวอย่าง 2',
      price: 499,
      quantity: 2,
      image: 'https://cdn.discordapp.com/attachments/1264857064887554131/1356860522414477454/FB_IMG_1743571138582.jpg?ex=67ef6bd5&is=67ee1a55&hm=2b9b6015fdaa8c088b38e97551dba11d8d462b250a1fe9835c64406a55da9aec&'
    },
    {
      id: 6,
      name: 'สินค้าตัวอย่าง 2',
      price: 499,
      quantity: 2,
      image: 'https://cdn.discordapp.com/attachments/1264857064887554131/1356860522414477454/FB_IMG_1743571138582.jpg?ex=67ef6bd5&is=67ee1a55&hm=2b9b6015fdaa8c088b38e97551dba11d8d462b250a1fe9835c64406a55da9aec&'
    }
  ];

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  increaseQuantity(item: CartItem): void {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  checkout(): void {
    // alert('ระบบชำระเงินจะถูกพัฒนาต่อในอนาคต');
  }

  continueShopping(): void {
    // ไปยังหน้าสินค้า
    console.log('ไปยังหน้าสินค้า');
  }

  goBack(): void {
    // ย้อนกลับ
    console.log('ย้อนกลับ');
  }
}
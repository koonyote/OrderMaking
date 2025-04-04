import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../service/cart.service';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  @Input() isGroupMode: boolean = false;
  @Input() currentMember: any;
  @Output() itemAdded = new EventEmitter<any>();
  
  categories: string[] = ['ทั้งหมด', 'อาหารไทย', 'อาหารจีน', 'เครื่องดื่ม', 'ของหวาน'];
  selectedCategory = 'ทั้งหมด';

  inmage : string = "https://cdn.discordapp.com/attachments/1110483509765742632/1357540952700354690/FB_IMG_1743733348589.jpg?ex=67f09409&is=67ef4289&hm=fc2957627c9d3624c388d4c60779378f133ce0d6e42addb715ffc39018e6e963&";

  menuItems: MenuItem[] = [
    { id: 1, name: 'ผัดไทย', price: 50, category: 'อาหารไทย', image: this.inmage },
    { id: 2, name: 'ต้มยำกุ้ง', price: 80, category: 'อาหารไทย', image: this.inmage },
    { id: 3, name: 'ข้าวผัด', price: 45, category: 'อาหารจีน', image: this.inmage },
    { id: 4, name: 'เกี๊ยวน้ำ', price: 60, category: 'อาหารจีน', image: this.inmage },
    { id: 5, name: 'กาแฟ', price: 35, category: 'เครื่องดื่ม', image: this.inmage },
    { id: 6, name: 'ชาเขียว', price: 40, category: 'เครื่องดื่ม', image: this.inmage },
    { id: 7, name: 'บัวลอย', price: 30, category: 'ของหวาน', image: this.inmage }
  ];

  cartItemCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartCount();
  }


  get filteredItems(): MenuItem[] {
    if (this.selectedCategory === 'ทั้งหมด') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  addToCart(item: any): void {
    if (this.isGroupMode) {
      this.itemAdded.emit({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      });
    } else {
      // โหมดปกติ
      this.cartService.addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image
      });
      this.updateCartCount();
    }
  }

  updateCartCount(): void {
    this.cartItemCount = this.cartService.getTotalItems();
  }
}
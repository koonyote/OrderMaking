import { Component, OnInit } from '@angular/core';

interface Member {
  id: string;
  name: string;
  orders: OrderItem[];
}

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-group-order',
  templateUrl: './group-order.component.html',
  styleUrl: './group-order.component.scss'
})
export class GroupOrderComponent implements OnInit {
  groupName = 'ทีมงาน ABC';
  groupLeaderId = 'user1';
  currentMember: Member = {
    id: 'user1',
    name: 'คุณสมชาย',
    orders: []
  };
  
  members: Member[] = [
    this.currentMember,
    { id: 'user2', name: 'คุณสมหญิง', orders: [] },
    { id: 'user3', name: 'คุณสมใจ', orders: [] }
  ];

  get isGroupLeader(): boolean {
    return this.currentMember.id === this.groupLeaderId;
  }

  constructor() { }

  ngOnInit(): void {
    // โหลดข้อมูลกลุ่มจาก Service
    this.loadGroupData();
  }

  loadGroupData(): void {
    // ตัวอย่างข้อมูล - ในแอพจริงควรโหลดจาก API
    this.members[0].orders = [
      { id: 1, name: 'ผัดไทย', price: 50, quantity: 1 },
      { id: 5, name: 'กาแฟ', price: 35, quantity: 2 }
    ];
    this.members[1].orders = [
      { id: 2, name: 'ต้มยำกุ้ง', price: 80, quantity: 1 }
    ];
  }

  onItemAdded(item: OrderItem): void {
    // เพิ่มหรืออัปเดตรายการอาหารของสมาชิกปัจจุบัน
    const existingItem = this.currentMember.orders.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.currentMember.orders.push({...item});
    }
  }

  getMemberTotal(member: Member): number {
    return member.orders.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getGroupTotal(): number {
    return this.members.reduce((total, member) => total + this.getMemberTotal(member), 0);
  }

  checkout(): void {
    // if (confirm(`ต้องการชำระเงินทั้งหมด ${this.getGroupTotal() | currency:'THB '} หรือไม่?`)) {
    //   alert('ดำเนินการชำระเงินเรียบร้อย');
    //   // ในแอพจริง: ส่งข้อมูลไปยัง API การชำระเงิน
    // }
  }

  closeGroup(): void {
    if (confirm('ต้องการปิดกลุ่มและลบข้อมูลการสั่งซื้อทั้งหมดหรือไม่?')) {
      this.members.forEach(member => member.orders = []);
      alert('ปิดกลุ่มเรียบร้อย');
    }
  }
}
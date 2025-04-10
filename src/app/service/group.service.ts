import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private currentGroup: any;
  private members: any[] = [];

  constructor() { }

  // สร้างกลุ่มใหม่
  createGroup(groupName: string, leader: any) {
    this.currentGroup = {
      id: this.generateId(),
      name: groupName,
      leaderId: leader.id,
      members: [leader],
      orders: []
    };
    this.members = [leader];
  }

  // เข้าร่วมกลุ่ม
  joinGroup(member: any) {
    if (this.currentGroup) {
      this.currentGroup.members.push(member);
      this.members.push(member);
    }
  }

  // เพิ่มออเดอร์
  addOrder(memberId: string, item: any) {
    if (this.currentGroup) {
      this.currentGroup.orders.push({
        ...item,
        memberId,
        memberName: this.getMemberName(memberId),
        timestamp: new Date().toISOString()
      });
    }
  }

  // ดึงข้อมูลกลุ่ม
  getGroup() {
    return this.currentGroup;
  }

  // ดึงข้อมูลสมาชิก
  getMembers() {
    return this.members;
  }

  // ดึงข้อมูลออเดอร์ทั้งหมด
  getOrders() {
    return this.currentGroup?.orders || [];
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private getMemberName(memberId: string): string {
    const member = this.members.find(m => m.id === memberId);
    return member ? member.name : 'Unknown';
  }
}
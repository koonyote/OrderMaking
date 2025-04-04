import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private currentGroup = new BehaviorSubject<any>(null);
  currentGroup$ = this.currentGroup.asObservable();

  constructor() { }

  createGroup(groupName: string, leader: any): void {
    const newGroup = {
      id: this.generateId(),
      name: groupName,
      leaderId: leader.id,
      members: [leader],
      orders: []
    };
    this.currentGroup.next(newGroup);
  }

  joinGroup(groupId: string, member: any): void {
    // ในแอพจริงควรเรียก API เพื่อเข้าร่วมกลุ่ม
    const group = this.currentGroup.value;
    if (group) {
      group.members.push(member);
      this.currentGroup.next(group);
    }
  }

  addOrder(memberId: string, item: any): void {
    const group = this.currentGroup.value;
    if (group) {
      const member = group.members.find((m: any) => m.id === memberId);
      if (member) {
        const existingItem = member.orders.find((i: any) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          member.orders.push({...item});
        }
        this.currentGroup.next(group);
      }
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
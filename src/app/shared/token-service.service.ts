import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey: string = 'token';
  private connectedSubject: BehaviorSubject<boolean>;

  constructor() {
    const storedValue = localStorage.getItem(this.tokenKey);
    const initialStatus = storedValue !== null ? storedValue === 'true' : false;

    // Initialize the BehaviorSubject with a default value
    this.connectedSubject = new BehaviorSubject<boolean>(initialStatus);
  }

  // Expose the BehaviorSubject as an observable
  get connected$(): Observable<boolean> {
    return this.connectedSubject.asObservable();
  }

  // Update connection status
  setConnectionStatus(status: boolean): void {
    localStorage.setItem(this.tokenKey, status.toString());
    this.connectedSubject.next(status);
  }

  // Clear connection status
  clearConnectionStatus(): void {
    localStorage.removeItem(this.tokenKey);
    this.connectedSubject.next(false);
  }
}

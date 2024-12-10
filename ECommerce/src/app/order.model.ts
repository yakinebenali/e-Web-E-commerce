export interface Order {
    id: number;
    customerName: string;
    customerEmail: string;
    date: string;
    items: { 
      productName: string;
      quantity: number;
      price: number;
    }[];
    total: number;
    status: string;  
  }
  
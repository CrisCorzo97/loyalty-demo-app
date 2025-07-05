// Tipos básicos para la aplicación de fidelización

export enum UserType {
  MERCHANT = 'MERCHANT',
  CONSUMER = 'CONSUMER',
}

export enum EmployeeRole {
  ADMIN = 'ADMIN',
  CASHIER = 'CASHIER',
  MANAGER = 'MANAGER',
}

export enum RewardType {
  PRODUCT_SERVICE = 'PRODUCT_SERVICE',
  PERCENTAGE_DISCOUNT = 'PERCENTAGE_DISCOUNT',
  FIXED_AMOUNT = 'FIXED_AMOUNT',
  FREE_ITEM = 'FREE_ITEM',
}

export enum ConsumptionStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}

export enum RedemptionStatus {
  PENDING = 'PENDING',
  REDEEMED = 'REDEEMED',
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
}

// Interfaces para componentes
export interface User {
  id: string;
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  dni?: string;
  phone?: string;
  userType: UserType;
  createdAt: Date;
  updatedAt: Date;
}

export interface Business {
  id: string;
  name: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  category?: string;
  isActive: boolean;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Employee {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: EmployeeRole;
  isActive: boolean;
  businessId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Reward {
  id: string;
  name: string;
  description?: string;
  type: RewardType;
  value?: number;
  requiredPoints: number;
  isActive: boolean;
  validUntil?: Date;
  termsAndConditions?: string;
  businessId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Consumption {
  id: string;
  amount: number;
  points: number;
  status: ConsumptionStatus;
  notes?: string;
  customerId: string;
  businessId: string;
  employeeId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Redemption {
  id: string;
  status: RedemptionStatus;
  securityCode: string;
  redeemedAt?: Date;
  expiresAt?: Date;
  notes?: string;
  customerId: string;
  rewardId: string;
  businessId: string;
  validatedById?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos para formularios
export interface CreateBusinessForm {
  name: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  category?: string;
}

export interface CreateEmployeeForm {
  email: string;
  firstName: string;
  lastName: string;
  role: EmployeeRole;
}

export interface CreateRewardForm {
  name: string;
  description?: string;
  type: RewardType;
  value?: number;
  requiredPoints: number;
  validUntil?: Date;
  termsAndConditions?: string;
}

export interface CreateConsumptionForm {
  customerDni: string;
  amount: number;
  notes?: string;
}

// Tipos para respuestas de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Props para componentes comunes
export interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

// Perfil de negocio para merchants
export interface BusinessProfile {
  name: string;
  description?: string;
  businessType:
    | 'Restaurante'
    | 'Bar'
    | 'Cafetería'
    | 'Heladería'
    | 'Panadería'
    | 'Food Truck'
    | 'Otro';
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: 'Argentina';
  };
  phone: {
    countryPrefix: string; // Ej: '+54'
    number: string;
  };
  email: string;
  website?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    other?: string;
  };
  logoUrl?: string;
  brandColors?: {
    primary?: string; // hex o rgb
    secondary?: string; // hex o rgb
  };
  businessHours: Array<{
    days: string[]; // Ej: ['Lunes', 'Martes']
    open: string; // '09:00'
    close: string; // '18:00'
    closed?: boolean;
  }>;
}

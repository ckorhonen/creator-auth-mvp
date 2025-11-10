// Type definitions for the creator auth platform

export interface Creator {
  id: string;
  username: string;
  email: string;
  verified: boolean;
  verificationLevel?: 'basic' | 'advanced' | 'premium';
  createdAt: Date;
  updatedAt: Date;
}

export interface VerificationRequest {
  id: string;
  creatorId: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: Date;
  reviewedAt?: Date;
}

export interface Badge {
  id: string;
  type: 'verified' | 'premium' | 'trusted';
  issuedAt: Date;
  expiresAt?: Date;
}

// Whop-specific types can be added here as integration develops
export interface WhopUser {
  id: string;
  username: string;
  // Add Whop-specific fields as needed
}

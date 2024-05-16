

export type Cars = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

// Omit is a utility type that creates a new type by omitting
// a property from another type
export type NewCar = Omit<Cars, 'id'>;
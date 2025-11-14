
import { Product } from './types';

export const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Vintage Leather Backpack',
    description: 'A stylish and durable vintage leather backpack, perfect for daily use or travel. Features multiple compartments and adjustable straps for comfort.',
    price: 89.99,
    category: 'Fashion',
    imageUrl: 'https://picsum.photos/seed/backpack/600/600',
    seller: {
      name: 'Jane Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=jane'
    }
  },
  {
    id: 2,
    name: 'Mid-Century Modern Armchair',
    description: 'An iconic armchair with a solid wood frame and comfortable upholstery. A perfect statement piece for any living room.',
    price: 350.00,
    category: 'Furniture',
    imageUrl: 'https://picsum.photos/seed/chair/600/600',
    seller: {
      name: 'John Smith',
      avatarUrl: 'https://i.pravatar.cc/150?u=john'
    }
  },
  {
    id: 3,
    name: 'Retro Polaroid Camera',
    description: 'Capture memories the old-school way with this fully functional retro Polaroid camera. Includes one pack of film to get you started.',
    price: 120.50,
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/seed/camera/600/600',
    seller: {
      name: 'Emily White',
      avatarUrl: 'https://i.pravatar.cc/150?u=emily'
    }
  },
  {
    id: 4,
    name: 'Handmade Ceramic Vase Set',
    description: 'A set of three beautiful, handmade ceramic vases. Each piece is unique, with a speckled glaze finish. Ideal for flowers or as standalone decor.',
    price: 45.00,
    category: 'Home Decor',
    imageUrl: 'https://picsum.photos/seed/vases/600/600',
    seller: {
      name: 'Michael Green',
      avatarUrl: 'https://i.pravatar.cc/150?u=michael'
    }
  },
  {
    id: 5,
    name: 'Classic Acoustic Guitar',
    description: 'A beautiful dreadnought acoustic guitar with a warm, rich tone. Great for beginners and experienced players alike. Comes with a soft case.',
    price: 220.00,
    category: 'Musical Instruments',
    imageUrl: 'https://picsum.photos/seed/guitar/600/600',
    seller: {
      name: 'Sarah Blue',
      avatarUrl: 'https://i.pravatar.cc/150?u=sarah'
    }
  },
  {
    id: 6,
    name: 'Professional Espresso Machine',
    description: 'A semi-automatic espresso machine for the home barista. Pull perfect shots and steam milk like a pro. Well-maintained and recently serviced.',
    price: 450.00,
    category: 'Appliances',
    imageUrl: 'https://picsum.photos/seed/espresso/600/600',
    seller: {
      name: 'David Black',
      avatarUrl: 'https://i.pravatar.cc/150?u=david'
    }
  },
  {
    id: 7,
    name: 'Vintage Road Bicycle',
    description: 'A classic 10-speed road bike from the 80s, fully restored and ready to ride. Lightweight steel frame with original components.',
    price: 275.00,
    category: 'Sports & Outdoors',
    imageUrl: 'https://picsum.photos/seed/bicycle/600/600',
    seller: {
      name: 'Jane Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=jane'
    }
  },
  {
    id: 8,
    name: 'Noise-Cancelling Headphones',
    description: 'Top-tier wireless noise-cancelling headphones with excellent sound quality and long battery life. Barely used, in like-new condition with original packaging.',
    price: 180.00,
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/seed/headphones/600/600',
    seller: {
      name: 'John Smith',
      avatarUrl: 'https://i.pravatar.cc/150?u=john'
    }
  },
];

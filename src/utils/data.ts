export const designs = [
    { _id: "1", name: "Bridal Design", image: "bridal.jpg", price: 2000, category: "Wedding", rating: 4.5, description: "Intricate bridal mehendi with peacock motifs" },
    { _id: "2", name: "Arabic Design", image: "arabic.jpg", price: 1500, category: "Party", rating: 4.0, description: "Stylish floral Arabic pattern" },
    { _id: "3", name: "Peacock Motif", image: "peacock.jpg", price: 1800, category: "Festival", rating: 4.2, description: "Traditional peacock theme for festive occasions" },
    { _id: "4", name: "Floral Lace", image: "floral-lace.jpg", price: 1200, category: "Traditional", rating: 4.1, description: "Delicate flower patterns with lace effects" },
    { _id: "5", name: "Modern Geometric", image: "geometric.jpg", price: 1700, category: "Modern", rating: 4.4, description: "Contemporary geometric patterns for urban look" },
    { _id: "6", name: "Full Arm Design", image: "full-arm.jpg", price: 2500, category: "Wedding", rating: 4.7, description: "Elaborate arm coverage for brides" },
    { _id: "7", name: "Foot Art", image: "foot-art.jpg", price: 900, category: "Traditional", rating: 3.9, description: "Intricate foot patterns for ceremonies" },
    { _id: "8", name: "Gujarati Style", image: "gujarati.jpg", price: 1600, category: "Cultural", rating: 4.3, description: "Traditional Gujarati wedding patterns" },
    { _id: "9", name: "Mandala Art", image: "mandala.jpg", price: 1900, category: "Modern", rating: 4.5, description: "Circular spiritual patterns with dots" },
    { _id: "10", name: "Kids' Design", image: "kids.jpg", price: 700, category: "Kids", rating: 4.0, description: "Simple playful patterns for children" },
    { _id: "11", name: "Glow-in-Dark", image: "glow.jpg", price: 2200, category: "Party", rating: 4.6, description: "Special UV-reactive henna for night events" },
    { _id: "12", name: "Rajasthani Motif", image: "rajasthani.jpg", price: 2100, category: "Cultural", rating: 4.4, description: "Traditional Rajasthani wedding art" },
    { __id: "13", name: "Minimalist Design", image: "minimal.jpg", price: 950, category: "Contemporary", rating: 3.8, description: "Simple elegant patterns for daily wear" },
    { _id: "14", name: "Animal Patterns", image: "animals.jpg", price: 1300, category: "Kids", rating: 4.2, description: "Cute animal-shaped designs" },
    { _id: "15", name: "Royal Mughal", image: "mughal.jpg", price: 2800, category: "Luxury", rating: 4.8, description: "Ornate patterns inspired by Mughal art" },
    { _id: "16", name: "Boho Chic", image: "boho.jpg", price: 1600, category: "Modern", rating: 4.3, description: "Free-spirited patterns with feathers" },
    { _id: "17", name: "Bridal Backhand", image: "backhand.jpg", price: 2300, category: "Wedding", rating: 4.7, description: "Detailed backhand design for brides" },
    { _id: "18", name: "Metallic Accents", image: "metallic.jpg", price: 2000, category: "Party", rating: 4.5, description: "Henna with gold/silver foil highlights" },
    { _id: "19", name: "Nature Theme", image: "nature.jpg", price: 1500, category: "Traditional", rating: 4.1, description: "Leaf and vine patterns with flowers" },
    { _id: "20", name: "South Indian", image: "south-indian.jpg", price: 1950, category: "Cultural", rating: 4.4, description: "Traditional Kerala bridal mehendi" }
  ];

export const bookings = [
    { _id: "1", customer: { name: "John Doe", email: "john@example.com" }, bookingDate: "2023-10-15", bookingTime: "10:00 AM", designId: { name: "Bridal Design" }, status: "Confirmed" },
    { _id: "2", customer: { name: "Jane Smith", email: "jane@example.com" }, bookingDate: "2023-10-16", bookingTime: "2:00 PM", designId: { name: "Arabic Design" }, status: "Pending" },
    { _id: "3", customer: { name: "Sarah Lee", email: "sarah@example.com" }, bookingDate: "2023-10-17", bookingTime: "11:00 AM", designId: { name: "Floral Design" }, status: "Confirmed" },
    { _id: "4", customer: { name: "Emily Brown", email: "emily@example.com" }, bookingDate: "2023-10-18", bookingTime: "3:00 PM", designId: { name: "Traditional Design" }, status: "Pending" },
    { _id: "5", customer: { name: "Michael Green", email: "michael@example.com" }, bookingDate: "2023-10-19", bookingTime: "9:00 AM", designId: { name: "Peacock Design" }, status: "Confirmed" },
    { _id: "6", customer: { name: "Lily Adams", email: "lily@example.com" }, bookingDate: "2023-10-20", bookingTime: "1:00 PM", designId: { name: "Mandala Design" }, status: "Confirmed" },
    { _id: "7", customer: { name: "David Clark", email: "david@example.com" }, bookingDate: "2023-10-21", bookingTime: "12:00 PM", designId: { name: "Arabic Design" }, status: "Pending" },
    { _id: "8", customer: { name: "Olivia Davis", email: "olivia@example.com" }, bookingDate: "2023-10-22", bookingTime: "4:00 PM", designId: { name: "Bridal Design" }, status: "Confirmed" },
    { _id: "9", customer: { name: "Sophia Turner", email: "sophia@example.com" }, bookingDate: "2023-10-23", bookingTime: "5:00 PM", designId: { name: "Floral Design" }, status: "Pending" },
    { _id: "10", customer: { name: "James Wilson", email: "james@example.com" }, bookingDate: "2023-10-24", bookingTime: "7:00 PM", designId: { name: "Traditional Design" }, status: "Confirmed" }
  ];
export const users = [
    { _id: "1", name: "Alice", email: "alice@example.com", phone: "1234567890", isAdmin: false },
    { _id: "2", name: "Bob", email: "bob@example.com", phone: "9876543210", isAdmin: true },
    { _id: "3", name: "Charlie", email: "charlie@example.com", phone: "5551234567", isAdmin: false },
    { _id: "4", name: "Diana", email: "diana@example.com", phone: "5559876543", isAdmin: false },
    { _id: "5", name: "Eve", email: "eve@example.com", phone: "5556547890", isAdmin: false },
    { _id: "6", name: "Frank", email: "frank@example.com", phone: "5551112233", isAdmin: true },
    { _id: "7", name: "Grace", email: "grace@example.com", phone: "5553334455", isAdmin: false },
    { _id: "8", name: "Hannah", email: "hannah@example.com", phone: "5556667788", isAdmin: false },
    { _id: "9", name: "Ian", email: "ian@example.com", phone: "5558889999", isAdmin: true },
    { _id: "10", name: "Jack", email: "jack@example.com", phone: "5552223344", isAdmin: false }
  ];
  export const feedbacks = [
    { _id: "1", design: { name: "Bridal Design" }, feedbacks: [{ user: { name: "Alice", email: "alice@example.com" }, rating: 5, comment: "Amazing design! Loved it." }, { user: { name: "Bob", email: "bob@example.com" }, rating: 4, comment: "Good, but could be better." }] },
    { _id: "2", design: { name: "Arabic Design" }, feedbacks: [{ user: { name: "Charlie", email: "charlie@example.com" }, rating: 3, comment: "Decent design." }] },
    { _id: "3", design: { name: "Floral Design" }, feedbacks: [{ user: { name: "Diana", email: "diana@example.com" }, rating: 5, comment: "Beautiful design, highly recommend!" }] },
    { _id: "4", design: { name: "Traditional Design" }, feedbacks: [{ user: { name: "Eve", email: "eve@example.com" }, rating: 4, comment: "Classic and elegant." }] },
    { _id: "5", design: { name: "Peacock Design" }, feedbacks: [{ user: { name: "Frank", email: "frank@example.com" }, rating: 5, comment: "The best design I've seen!" }] },
    { _id: "6", design: { name: "Mandala Design" }, feedbacks: [{ user: { name: "Grace", email: "grace@example.com" }, rating: 4, comment: "Lovely, but a bit too intricate for me." }] },
    { _id: "7", design: { name: "Arabic Design" }, feedbacks: [{ user: { name: "Hannah", email: "hannah@example.com" }, rating: 5, comment: "Perfect for my occasion!" }] },
    { _id: "8", design: { name: "Bridal Design" }, feedbacks: [{ user: { name: "Ian", email: "ian@example.com" }, rating: 4, comment: "Elegant and beautiful." }] },
    { _id: "9", design: { name: "Floral Design" }, feedbacks: [{ user: { name: "Jack", email: "jack@example.com" }, rating: 5, comment: "Exceeded my expectations!" }] },
    { _id: "10", design: { name: "Traditional Design" }, feedbacks: [{ user: { name: "Alice", email: "alice@example.com" }, rating: 5, comment: "Amazing work, as always!" }] }
  ];
    
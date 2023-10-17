// Custom Type Alias for User
type User = {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
};

// Using the Custom Type Alias
const currentUser: User = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    isAdmin: false,
};

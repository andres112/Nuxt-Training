// Mock user data - in a real app, this would come from a database
const mockUser = {
	id: '123',
	name: 'Test User',
	role: 'admin',
};

// Simulate getting user data based on token
function getUserFromToken() {
	// In a real app, you would validate the token and fetch the user
	return mockUser;
}

export default defineEventHandler(async (event) => {
	// Only apply to API routes
	if (event.path.startsWith('/api')) {
		// Simulate authentication check
		const token = event.headers.get('authorization');

		if (!token || token !== 'Bearer your_token') {
			// Reject unauthorized access
			throw createError({
				statusCode: 401,
				statusMessage: 'Unauthorized',
				message: 'Invalid or missing authentication token',
			});
		}

		console.warn('Authenticated request to:', event.path);

		// If token is valid, attach user to the event context
		// so it can be accessed by subsequent handlers
		const user = getUserFromToken();
		event.context.user = user;

		// Don't return anything - just let the request continue
		// with the authenticated user in the context
	}

	// For non-API routes, do nothing and let the request pass through
});

const GUEST_TOKEN_KEY = 'guest_token';  // Replace with actual session cookie name if different
const GUEST_LOGIN_TIMESTAMP_KEY = 'guest_login_timestamp';

function isGuestLoggedIn() {
  const token = getWithExpiry(GUEST_TOKEN_KEY);
  const lastLoginTimestamp = getWithExpiry(GUEST_LOGIN_TIMESTAMP_KEY);

  // Check if token exists and hasn't expired (within 24 hours)
  const now = new Date().getTime();
  return token && (now - lastLoginTimestamp) <= (24 * 60 * 60 * 1000);
}

function generateGuestToken() {
  // You'll need server-side logic to generate a secure session cookie
  // This example demonstrates placeholder logic (replace with your actual mechanism)
  const token = `guest_token_${Math.random().toString(36).substring(2, 15)}`; // Placeholder logic
  setWithExpiry(GUEST_TOKEN_KEY, token, 24 * 60 * 60 * 1000); // Expires in 24 hours
  return token;
}

function getGuestToken() {
  if (isGuestLoggedIn()) {
    return getWithExpiry(GUEST_TOKEN_KEY);
  }

  // If not logged in, generate a new token and record the login timestamp
  const token = generateGuestToken();
  setWithExpiry(GUEST_LOGIN_TIMESTAMP_KEY, new Date().getTime(), 24 * 60 * 60 * 1000);  // Record login time
  return token;
}

// No changes needed in these functions:
function setWithExpiry(key:any, value:any, expiration:number) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + expiration,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key:any) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

// Usage example (replace with your actual logic):
function handleGuestLoginRequest() {
  const token = getGuestToken();
  if (token) {
    console.log('Guest login successful!', token);
    // Send the session cookie to the server for verification (replace with your logic)
  } else {
    console.log('Guest login limit reached for today.');
  }
}

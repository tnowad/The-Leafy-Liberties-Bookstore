This is a code snippet in PHP that defines the routes for a website and an admin dashboard.

The website routes include:

- Home page ('/')
- Search page ('/search')
- Cart page ('/cart')
- Shop page ('/shop/{slug?}')
- Shop by tag page ('/shop/tag/{slug}')
- Wishlist page ('/wishlist')
- Product page ('/product/{slug}')
- Contact page ('/contact')
- Page content ('/page/{slug}')
- Social media login routes ('/login/{provider}' and '/login/{provider}/callback')
- Authenticated user routes:
  - User dashboard ('/user/dashboard')
  - User profile ('/user/profile')
  - Update user profile ('/user/profile' - PATCH method)
  - Remove user profile image ('/user/profile/remove-image')
  - User addresses ('/user/addresses')
  - User orders ('/user/orders')
- Checkout and payment routes:
  - Checkout page ('/checkout')
  - PayPal gateway ('/payment', '/payment/{orderId}/cancelled', '/payment/{orderId}/completed', and '/payment/webhook/{order?}/{env?}')
  - Tap gateway ('/payment/charge-request' and '/payment/charge-update')

The admin dashboard routes include:

- Admin authentication routes:
  - Login page ('/login')
  - Forgot password page ('/forgot-password')
- Admin authenticated routes:
  - Admin dashboard ('/')
  - Account settings ('/account-settings' - GET and PATCH methods)
  - Category CRUD routes ('/categories', '/categories/{category}/remove-image')
  - Product CRUD routes ('/products', '/products/remove-image')
  - Tag CRUD routes ('/tags')
  - Coupon CRUD routes ('/coupons')
  - Review CRUD routes ('/reviews')
  - Supervisor CRUD routes ('/supervisors', '/supervisors/{supervisor}/remove-image')
  - Country CRUD routes ('/countries')
  - State CRUD routes ('/states', '/states/get-states')
  - City CRUD routes ('/cities', '/cities/get-cities')
  - User CRUD routes ('/users', 'users/get-users')
  - User address CRUD routes ('/user_addresses')
  - Shipping company CRUD routes ('/shipping_companies')
  - Payment method CRUD routes ('/payment_methods')

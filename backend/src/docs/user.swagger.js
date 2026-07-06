/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new CampusHub user account.
 *     tags:
 *       - Authentication
 *
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *
 *     responses:
 *       201:
 *         $ref: '#/components/responses/Created'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       409:
 *         $ref: '#/components/responses/Conflict'
 *
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login User
 *     description: Login using email and password.
 *     tags:
 *       - Authentication
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */


/**
 * @swagger
 * /users/logout:
 *   post:
 *     summary: Logout current user
 *     description: Clears access and refresh token cookies.
 *     tags:
 *       - Authentication
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */


/**
 * @swagger
 * /users/refresh-token:
 *   post:
 *     summary: Refresh Access Token
 *     description: Generates a new access token using refresh token.
 *     tags:
 *       - Authentication
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */



/**
 * @swagger
 * /users/current-user:
 *   get:
 *     summary: Get Current Logged In User
 *     tags:
 *       - Users
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */


/**
 * @swagger
 * /users/change-password:
 *   patch:
 *     summary: Change Password
 *     tags:
 *       - Users
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePasswordRequest'
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /users/update-profile:
 *   patch:
 *     summary: Update User Profile
 *     tags:
 *       - Users
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProfileRequest'
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /users/update-avatar:
 *   patch:
 *     summary: Update User Avatar
 *     tags:
 *       - Users
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - avatar
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */


/**
 * @swagger
 * /users/{username}:
 *   get:
 *     summary: Get Public User Profile
 *     tags:
 *       - Users
 *
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */


/**
 * @swagger
 * /users/bookmarks:
 *   get:
 *     summary: Get Bookmarked Resources
 *     tags:
 *       - Users
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /users/recently-viewed:
 *   get:
 *     summary: Get Recently Viewed Resources
 *     tags:
 *       - Users
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /users/my-uploads:
 *   get:
 *     summary: Get My Uploaded Resources
 *     tags:
 *       - Users
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /users/download-history:
 *   get:
 *     summary: Get Download History
 *     tags:
 *       - Users
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */
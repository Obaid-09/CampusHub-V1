/**
 * @swagger
 * /admin/dashboard:
 *   get:
 *     summary: Get Admin Dashboard Statistics
 *     description: Returns overall statistics including users, resources, downloads, views and bookmarks.
 *     tags:
 *       - Admin
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
 *
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get All Users
 *     description: Returns a paginated list of all users with search, filtering and sorting.
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *           enum:
 *             - student
 *             - admin
 *
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *
 *       - in: query
 *         name: semester
 *         schema:
 *           type: integer
 *
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum:
 *             - latest
 *             - oldest
 *             - fullname
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /admin/users/{userId}:
 *   get:
 *     summary: Get User Details
 *     description: Returns detailed information of a specific user.
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: userId
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
 * /admin/resources/pending:
 *   get:
 *     summary: Get Pending Resources
 *     description: Returns all resources waiting for admin approval.
 *     tags:
 *       - Admin
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
 * /admin/resources/{resourceId}/approve:
 *   patch:
 *     summary: Approve Resource
 *     description: Approves a pending resource uploaded by a user.
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /admin/resources/{resourceId}/reject:
 *   patch:
 *     summary: Reject Resource
 *     description: Rejects a pending resource.
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /admin/resources:
 *   get:
 *     summary: Get All Resources
 *     description: Returns every resource including pending, approved, rejected and deleted resources.
 *     tags:
 *       - Admin
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
 * /admin/resources/{resourceId}:
 *   delete:
 *     summary: Delete Any Resource
 *     description: Soft deletes any resource from the platform.
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /admin/resources/{resourceId}/restore:
 *   patch:
 *     summary: Restore Deleted Resource
 *     description: Restores a previously deleted resource.
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /admin/resources/deleted:
 *   get:
 *     summary: Get Deleted Resources
 *     description: Returns all soft deleted resources.
 *     tags:
 *       - Admin
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
 * /admin/analytics:
 *   get:
 *     summary: Get Platform Analytics
 *     description: Returns analytics like branch-wise resources, downloads, views, bookmarks and ratings.
 *     tags:
 *       - Admin
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */


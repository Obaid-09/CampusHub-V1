/**
 * @swagger
 * /resources/upload:
 *   post:
 *     summary: Upload a new resource
 *     description: Upload a PDF resource with an optional thumbnail.
 *     tags:
 *       - Resources
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/UploadResourceRequest'
 *
 *     responses:
 *       201:
 *         $ref: '#/components/responses/Created'
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
 * /resources:
 *   get:
 *     summary: Get all resources
 *     description: Returns paginated resources with filtering, searching and sorting.
 *     tags:
 *       - Resources
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
 *         name: type
 *         schema:
 *           type: string
 *
 *       - in: query
 *         name: subject
 *         schema:
 *           type: string
 *
 *       - in: query
 *         name: courseCode
 *         schema:
 *           type: string
 *
 *       - in: query
 *         name: college
 *         schema:
 *           type: string
 *
 *       - in: query
 *         name: examType
 *         schema:
 *           type: string
 *
 *       - in: query
 *         name: tags
 *         schema:
 *           type: string
 *
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum:
 *             - latest
 *             - oldest
 *             - downloads
 *             - views
 *             - bookmarks
 *             - rating
 *             - title-asc
 *             - title-desc
 *
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 */

/**
 * @swagger
 * /resources/{resourceId}:
 *   get:
 *     summary: Get resource details
 *     tags:
 *       - Resources
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
 *
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */


/**
 * @swagger
 * /resources/{resourceId}:
 *   patch:
 *     summary: Update a resource
 *     tags:
 *       - Resources
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
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/UpdateResourceRequest'
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
 * /resources/{resourceId}:
 *   delete:
 *     summary: Soft delete a resource
 *     tags:
 *       - Resources
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
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */


/**
 * @swagger
 * /resources/{resourceId}/view:
 *   patch:
 *     summary: Increase resource view count
 *     description: Public endpoint. If logged in, recently viewed history is also updated.
 *     tags:
 *       - Resources
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
 * /resources/{resourceId}/download:
 *   patch:
 *     summary: Download a resource
 *     description: Increments download count and updates user's download history.
 *     tags:
 *       - Resources
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
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */


/**
 * @swagger
 * /resources/{resourceId}/bookmark:
 *   patch:
 *     summary: Bookmark or remove bookmark
 *     description: Toggles bookmark status for the logged-in user.
 *     tags:
 *       - Resources
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
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */




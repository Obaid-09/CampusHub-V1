/**
 * @swagger
 * components:
 *   responses:
 *
 *     Success:
 *       description: Request completed successfully
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ApiResponse'
 *
 *     Created:
 *       description: Resource created successfully
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ApiResponse'
 *
 *     BadRequest:
 *       description: Invalid request data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 400
 *             success: false
 *             message: Invalid request
 *
 *     Unauthorized:
 *       description: Authentication required
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 401
 *             success: false
 *             message: Unauthorized Request
 *
 *     Forbidden:
 *       description: Permission denied
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 403
 *             success: false
 *             message: Forbidden
 *
 *     NotFound:
 *       description: Resource not found
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 404
 *             success: false
 *             message: Resource not found
 *
 *     Conflict:
 *       description: Resource already exists
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 409
 *             success: false
 *             message: Resource already exists
 *
 *     ValidationError:
 *       description: Validation failed
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 422
 *             success: false
 *             message: Validation Error
 *
 *     InternalServerError:
 *       description: Internal Server Error
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 500
 *             success: false
 *             message: Internal Server Error
 */
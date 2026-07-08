/**
 * @swagger
 * components:
 *   schemas:
 *
 *     ApiResponse:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           example: 200
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Success
 *         data:
 *           type: object
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           example: 400
 *         success:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: Invalid Request
 *
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 6864b64d734d90e85691bb56
 *         fullname:
 *           type: string
 *           example: Obaidullah
 *         username:
 *           type: string
 *           example: obaid
 *         email:
 *           type: string
 *           format: email
 *           example: obaid@gmail.com
 *         avatar:
 *           type: string
 *           format: uri
 *           example: https://res.cloudinary.com/demo/image/upload/avatar.png
 *         role:
            type: string
            enum:
                - student
                - admin
            example: student
 *         branch:
            type: string
            enum:
                - CSE
                - ECE
                - EEE
                - ME
                - CE
                - CHE
                - MME
                - BT
                - Other
 *         year:
 *           type: integer
 *           example: 3
 *         semester:
 *           type: integer
 *           example: 5
 *         college:
 *           type: string
 *           example: NIT Warangal
 *         bio:
 *           type: string
 *           example: SDE Aspirant
 *         isVerified:
 *           type: boolean
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *     Resource:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 6864beaf734d90e85691bb99
 *         title:
 *           type: string
 *           example: Operating Systems Notes
 *         description:
 *           type: string
 *           example: Complete handwritten notes.
 *         type:
 *           type: string
 *           example: Notes
 *         subject:
 *           type: string
 *           example: Operating Systems
 *         courseCode:
 *           type: string
 *           example: CS301
 *         branch:
 *           type: string
 *           example: CSE
 *         semester:
 *           type: integer
 *           example: 5
 *         year:
 *           type: integer
 *           example: 3
 *         academicYear:
 *           type: string
 *           example: 2025-26
 *         college:
 *           type: string
 *           example: NIT Warangal
 *         examType:
 *           type: string
 *           example: End Sem
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - os
 *             - scheduling
 *             - memory
 *         pdfUrl:
 *           type: string
 *           format: uri
 *           example: https://res.cloudinary.com/demo/raw/upload/file.pdf
 *         thumbnail:
 *           type: string
 *           format: uri
 *           example: https://res.cloudinary.com/demo/image/upload/thumb.png
 *         fileSize:
 *           type: integer
 *           example: 234567
 *         totalPages:
 *           type: integer
 *           example: 132
 *         uploadedBy:
 *           $ref: '#/components/schemas/User'
 *         downloads:
 *           type: integer
 *           example: 230
 *         views:
 *           type: integer
 *           example: 540
 *         bookmarks:
 *           type: integer
 *           example: 120
 *         averageRating:
 *           type: number
 *           example: 4.8
 *         ratingsCount:
 *           type: integer
 *           example: 42
 *         visibility:
 *           type: string
 *           example: public
 *         status:
 *           type: string
 *           example: approved
 *         isVerified:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - fullname
 *         - username
 *         - email
 *         - password
 *         - branch
 *         - semester
 *         - year
 *       properties:
 *         fullname:
 *           type: string
 *           example: Obaidullah
 *         username:
 *           type: string
 *           example: obaid
 *         email:
 *           type: string
 *           example: obaid@gmail.com
 *         password:
 *           type: string
 *           format: password
 *           example: Password@123
 *         branch:
 *           type: string
 *           example: EEE
 *         semester:
 *           type: integer
 *           example: 5
 *         year:
 *           type: integer
 *           example: 3
 *         college:
 *           type: string
 *           example: NIT Warangal
 *         bio:
 *           type: string
 *           example: SDE Aspirant
 *
 *     LoginRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: obaid@gmail.com
 *         password:
 *           type: string
 *           format: password
 *           example: Password@123
 *
 *     UpdateProfileRequest:
 *       type: object
 *       properties:
 *         fullname:
 *           type: string
 *         email:
 *           type: string
 *         branch:
 *           type: string
 *         semester:
 *           type: integer
 *         year:
 *           type: integer
 *         college:
 *           type: string
 *         bio:
 *           type: string
 *
 *     ChangePasswordRequest:
 *       type: object
 *       required:
 *         - oldPassword
 *         - newPassword
 *       properties:
 *         oldPassword:
 *           type: string
 *           format: password
 *           example: Password@123
 *         newPassword:
 *           type: string
 *           format: password
 *           example: NewPassword@123
 *
 *     UploadResourceRequest:
 *       type: object
 *       required:
 *         - title
 *         - subject
 *         - type
 *         - branch
 *         - semester
 *         - year
 *         - pdf
 *       properties:
 *         title:
 *           type: string
 *           example: Operating Systems Notes
 *         description:
 *           type: string
 *         type:
 *           type: string
 *           example: Notes
 *         subject:
 *           type: string
 *         courseCode:
 *           type: string
 *         branch:
 *           type: string
 *         semester:
 *           type: integer
 *         year:
 *           type: integer
 *         academicYear:
 *           type: string
 *         college:
 *           type: string
 *         examType:
 *           type: string
 *         visibility:
            type: string
            enum:
                - public
                - private
 *         tags:
 *           type: string
 *           example: os,memory,scheduling
 *         pdf:
 *           type: string
 *           format: binary
 *         thumbnail:
 *           type: string
 *           format: binary
 *
 *     UpdateResourceRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         subject:
 *           type: string
 *         courseCode:
 *           type: string
 *         branch:
 *           type: string
 *         semester:
 *           type: integer
 *         year:
 *           type: integer
 *         academicYear:
 *           type: string
 *         college:
 *           type: string
 *         examType:
 *           type: string
 *         visibility:
 *           type: string
 *         tags:
 *           type: string
 *         thumbnail:
 *           type: string
 *           format: binary
 *
 *     PaginationResponse:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *           example: 1
 *         limit:
 *           type: integer
 *           example: 12
 *         totalResources:
 *           type: integer
 *           example: 120
 *         totalPages:
 *           type: integer
 *           example: 10
 *         hasNextPage:
 *           type: boolean
 *           example: true
 *         hasPreviousPage:
 *           type: boolean
 *           example: false
 *         resources:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Resource'
 */






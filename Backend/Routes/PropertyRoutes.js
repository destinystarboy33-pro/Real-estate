import express from 'express'
import {getproperties, CreateProperty, UpdateProperty, DeleteProperty, getPropertyById} from '../Controller/PropertyController.js'
import authMiddleware from '../MiddleWare/UserMiddleware.js'
import adminMiddleware from '../MiddleWare/adminMiddleware.js'
import upload from '../MiddleWare/upload.js'

const Router = express.Router()

Router.get('/', getproperties)
Router.get('/:id', getPropertyById)
Router.post('/', authMiddleware, adminMiddleware, upload.single('image'), CreateProperty)
Router.patch('/:id', authMiddleware, adminMiddleware, upload.single('image'), UpdateProperty)
// Router.post("/test-upload", upload.single("image"), CreateProperty);
Router.delete('/:id', authMiddleware, adminMiddleware, DeleteProperty)

export default Router
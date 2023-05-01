import { GridFsStorage } from 'multer-gridfs-storage'
import dotenv from 'dotenv';
import multer from 'multer'

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-tlksrcm-shard-00-00.6bzmyjg.mongodb.net:27017,ac-tlksrcm-shard-00-01.6bzmyjg.mongodb.net:27017,ac-tlksrcm-shard-00-02.6bzmyjg.mongodb.net:27017/?ssl=true&replicaSet=atlas-bi8j5f-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: {useNewUrlParser: true},
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) {
            return `${Date.now()}-blog-${file.originalname}`
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({ storage })
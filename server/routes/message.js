const messageController = require("../controllers/message.controller");
const authenticate = require("../middlewares/authenticate");
const paginate = require("../middlewares/paginate");
const upload = require("../config/multer");


const router = express.Router();

router.use(authenticate);

router.get("/messages/:userId", paginate, messageController.getRooms);


module.exports = router;

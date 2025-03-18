const roomController = require("../controllers/room.controller");
const authenticate = require("../middlewares/authenticate");
const paginate = require("../middlewares/paginate");
const upload = require("../config/multer");


const router = express.Router();

router.use(authenticate);

router.get("/rooms/:userId", paginate, roomController.getRooms);


module.exports = router;

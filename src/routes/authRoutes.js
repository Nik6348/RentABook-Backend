import { auth } from '../firebaseAdmin';
import { User } from '../models/User';
import { apiResponse } from '../utils/apiResponse';
import { RESPONSE_MESSAGES } from '../config/responseMessages';
import { asyncHandler } from '../utils/asyncHandler';

const authUser = asyncHandler(async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = await auth().verifyIdToken(token);

    const { uid, email, name } = decodedToken;

    let user = await User.findOne({ email });
    if (!user) {
        user = new User({ uid, email, name });
        await user.save();
    }

    apiResponse(res, 200, RESPONSE_MESSAGES.USER_AUTHENTICATED, user);
});

export default authUser;
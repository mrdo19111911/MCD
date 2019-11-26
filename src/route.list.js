// import userRouter from './routers/user';
// import thayboiRouter from './routers/thayboi';
import thayboiRouter from './api/thayboi/thayboi.router';
import userRate from './api/user/rate.router';
import userComment from './api/user/comment.router';
import userReaction from './api/user/reaction.router';
import userFollowing from './api/user/following.router';
import getAll from './api/user/getall.router';
import userRoute from './api/account/route.user';
export const routeList = [
    // userRouter,
    thayboiRouter,
    userRate,
    userComment,
    userReaction,
    userFollowing,
    getAll,
    userRoute
]
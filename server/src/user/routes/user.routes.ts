import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  addFriend,
  getFriends,
  removeFriend,
  getFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
  getRecommendedFriendsWithMutualFriend,
  getRecommendedFriendsWithMutualHobbies,
} from "../controllers/user.controller";
import verifyUser from "../middlewares/verifyUser";

const userRoutes = Router();

// Authentication routes
userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/logout", verifyUser, logoutUser);

// Friendship management routes
userRoutes.post("/friend/add", verifyUser, addFriend);
userRoutes.get("/friends", verifyUser, getFriends);
userRoutes.delete("/friend/remove", verifyUser, removeFriend);

// Friend request management routes
userRoutes.get("/friend/requests", verifyUser, getFriendRequests);
userRoutes.post("/friend/requests/accept", verifyUser, acceptFriendRequest);
userRoutes.post("/friend/requests/reject", verifyUser, rejectFriendRequest);

// Recommendation routes
userRoutes.get(
  "/friend/recommendations/mutual-friends",
  verifyUser,
  getRecommendedFriendsWithMutualFriend
);
userRoutes.get(
  "/friend/recommendations/mutual-hobbies",
  verifyUser,
  getRecommendedFriendsWithMutualHobbies
);

export default userRoutes;

import asyncHandler from "express-async-handler";
// Auth user/set Token
// POST /api/user/

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

export { authUser };

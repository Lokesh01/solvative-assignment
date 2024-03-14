import User from "../models/User.js";
import RewardHistory from "../models/RewardHistory.js";

export const createUser = async (req, res) => {
  try {
    // Extract user data from the request body
    const { name } = req.body;

    // Create a new user in the database
    const newUser = await User.create({
      name,
      p5Balance: 100,
      rewardBalance: 0,
    });

    await RewardHistory.create({
      datetime: new Date(),
      points: 0,
      givenBy: null,
      givenTo: null,
    });

    // Return the newly created user as a JSON response
    res
      .status(201)
      .json({ data: newUser, message: "user created successfully !" });
  } catch (error) {
    // If there's an error, return an error response
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getListOfUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Return the users as a JSON response
    res.json({ data: users, message: "user list fetched succesfully" });
  } catch (error) {
    // If there's an error, return an error response
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        summary: {
            type: String,
            trim: true, // optional
        },
        tasks: [
            {
                task: {
                    type: String,
                    required: [true, " Please give task description!"],
                    trim: true,
                },
                status: {
                    type: String,
                    enum: ["pending", "in-progress", "completed"],
                    lowercase: true,
                    default: "pending",
                },
                deadline: {
                    type: Date,
                },
            },
        ],
    },
    { timestamps: true } // create and update timestamps automatically
);

const Todo = mongoose.model("Todo", TodoSchema);  // Changed from "TodoItems" to "Todo"
export default Todo;

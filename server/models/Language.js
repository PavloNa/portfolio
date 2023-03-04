import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            min: 3,
            max: 3,
        },
        value: {
            type: Number
        }
    }
)

const Language = mongoose.model("Language", LanguageSchema);
export default Language
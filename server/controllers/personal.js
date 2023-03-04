import Language from "../models/Language.js";

export const getLanguage = async (req, res) => {
    try {

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
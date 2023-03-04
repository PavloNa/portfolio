import Language from "../models/Language.js";

export const getLanguage = async (req, res) => {
    try {
        const languageSkills = await Language.find()
        res.status(200).json(languageSkills)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
import Tour from "../models/Tour"

// create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res
            .status(200)
            .json({
                success: true,
                message: "successfully created",
                data: savedTour
            })
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "Failed ot created",
                data: savedTour
            })
    }
}
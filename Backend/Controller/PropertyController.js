import Property from "../Model/PropertyModel.js"
import cloudinary from "../config/cloudinary.js"

                // GET PROPERTIES

const getproperties = async (req, res) => {
  try {

    const { name, location, minPrice, maxPrice } = req.query;

    let filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    const properties = await Property.find(filter);

    res.status(200).json(properties);

  } catch (error) {

    res.status(500).json({
      message: "failed",
      error: error.message
    });

  }
};

                        // CREATE PROPERTIES
const CreateProperty = async (req, res) => {
  try {
    const {
      name,
      location,
      views,
      price,
      oldPrice,
       description,
      distance
    } = req.body;

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "real-estate"
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      stream.end(req.file.buffer);
    });

    const image = result.secure_url;

    const property = await Property.create({
      image,
      name,
      location,
      views,
      price,
      oldPrice,
      description,
      distance
    });

    console.log("CREATE PROPERTY REACHED");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    res.status(201).json({
      message: "Successfully Uploaded",
      property
    });

  } catch (error) {
    res.status(500).json({
      message: "failed",
      error: error.message
    });
  }
};
                        // UPDATE PROPERTIES


          const UpdateProperty = async(req, res) =>{
            try{
                const property = await Property.findByIdAndUpdate
                (req.params.id, req.body,
                      {new: true},
                      // {runValidators: true}
                )
              
                res.status(200).json({
                    message: 'updated'
                })
            } catch(error){
                res.status(500).json({
                    message: 'failed',
                    error: error.message
                })
            }
          }  
          
                // DELETE PROPERTY

    const DeleteProperty = async(req, res) =>{
      try{
        const property = await Property.findByIdAndDelete(req.params.id, req.body)

        res.status(200).json({
            message: 'deleted'
        })
      } catch(error){
        res.status(500).json({
            message:'delete failed',
            error: error.message
        })
      }
    }


    const getPropertyById = async (req, res) => {
  try {

    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found"
      });
    }

    res.status(200).json(property);

  } catch (error) {

    res.status(500).json({
      message: "Failed to get property",
      error: error.message
    });

  }
};

export  {getproperties, getPropertyById, CreateProperty, UpdateProperty, DeleteProperty}
let index;
let productColour;

// ------------------------------------------------------------------
//                             Name
// ------------------------------------------------------------------


//Checks if object includes key "Name". If not I have to find it in values
const checkName = (object, productName) => {
    const name = Object.keys(object).includes('Name')
        ? findObjectWithName(object, productName)
        : findName(object, productName)

    return name
}

//returns array with key "Name" and values
const findObjectWithName = (object, productName) => {
    const arrayOfProducts = Object.entries(object)
    const productValues = arrayOfProducts.filter(([key, value]) => {
        if (key === 'Name') {
            for (const detail in value) {
                if (value[detail].toLowerCase().includes(productName.toLowerCase())) {
                    return detail
                }
            }
        }
    })
    return Object.fromEntries(productValues)
}

//finds "Name" in other values of "Text" keys
const findName = (object, productName) => {
    const arrayOfProducts = Object.entries(object)

    //Arrays with key "Text"
    const productValues = arrayOfProducts.filter(([key, _]) => {
        return key.includes('Text') && key;
    })

    //filters Array to find product's Name
    const findNamesInObject = productValues.filter(([_, value]) => {
        for (const key in value) {
            return value[key].toLowerCase().includes(productName.toLowerCase()) && key
        }
    })

    //returns object with product's Name
    return Object.fromEntries(findNamesInObject)
}

// ------------------------------------------------------------------
//                             Colour
// ------------------------------------------------------------------


//check colour's index in object where the colour is
const checkColourIndex = (object, colour) => {
    const findProductColour = Object.keys(object).includes('Colour')
        ? findIndexOfColour(object, colour)
        : findColour(object, colour)

    return findProductColour;
}

//find index of object with colour
const findIndexOfColour = (object, colour) => {
    const arrayOfProducts = Object.entries(object)
    const productColourArray = arrayOfProducts.filter(([key, value]) => {
        if (key === 'Colour') {
            return key
        }
    })

    productColour = productColourArray

    const findColourIndex = productColourArray.map(([key, value]) => {
        for (const index in value) {
            if (value[index].toLowerCase().includes(colour.toLowerCase())) {
                return index
            }
        }
    })

    index = findColourIndex[0];
    return index;
}

// find index of object with colour, when the "Colour" is not in keys
const findColour = (object, colour) => {
    const arrayWithProductDetails = Object.entries(object)
    const productDetails = arrayWithProductDetails.filter(([key, _]) => {
        if (key.includes('Text')) { return key }
    })

    const findProductWithColour = productDetails.filter(([_, value]) => {
        for (const key in value) {
            if (value[key].toLowerCase().includes(colour.toLowerCase())) {
                return key
            }
        }
    })

    const findProductIndex = findProductWithColour.map(([_, value]) => {
        for (const index in value) {
            if (value[index].toLowerCase().includes(colour.toLowerCase())) {
                return index
            }else{
                return -index
            }
        }
    })

    productColour = findProductWithColour;
    index = findProductIndex[0];
    return index;
}

// ------------------------------------------------------------------
//                          Check API
// ------------------------------------------------------------------

export const checkApi = (api, productName, colour) => {
    const retailerObject = Object.entries(api).flat()[1]
    return findInfosAboutProduct(retailerObject, productName, colour)
}

const findInfosAboutProduct = (object, productName, colour) => {
    const correctName = checkName(object, productName)
    const correctColour = checkColourIndex(object, colour)

    if (correctName && correctColour) {
        const productDetails = {
            Retailer: object.Retailer[index],
            Name: `Nike ${productName}`,
            Colour: colour,
            Price: object.Price[index],
            Sizes: object.Sizes[index],
            Sale: object.Sale[index],
            Available: true
        }

        return productDetails;
    } else {
        const outOfStore = {
            Retailer: object.Retailer[-index],
            Price: 'out of store',
            Available: false
        }
        return outOfStore;
    }
}
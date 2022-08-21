interface StringByString {
    [key: string]: string;
}

export const CampaignDescription: StringByString =  {
    "mint" : "Minting event begins ",
    "sale" : "Sale ends on ",
    "auction" : "Auction ends on ",
}

export const PriceDescription: StringByString = {
    "mint" : "Price",
    "sale" : "Current Price",
    "auction" : "Highest bid",
}
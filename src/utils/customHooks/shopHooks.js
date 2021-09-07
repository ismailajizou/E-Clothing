import { useContext } from "react"
import ShopCtx from "../contextFiles/shop.context";

export const usePreviewCollections = () => {
    const collections = useContext(ShopCtx);
    return collections ? Object.keys(collections).map(key => collections[key]) : [];
}

export const useCollectionWithURL = collectionUrlParam => {
    const collections = useContext(ShopCtx);
    return collections ? collections[collectionUrlParam] : null;
}

